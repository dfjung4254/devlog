#!/usr/bin/env node

/**
 *
 * this code work with below command!
 * ./deploy.js ${DEVLOG_DEFAULT_PROJECT_PATH}
 *
 */

import PathUtils from './path.js'
import ProcessUtils from './process.js'

const pathUtils = new PathUtils(process.argv[2]);
const processUtils = new ProcessUtils();
const DOCKER_IMAGE_TAG = 'devjk/devlog';
const DOCKER_IMAGE_SAVE_NAME = 'devlog.tar';
const SERVER_FQDN = 'ubuntu@13.209.67.71';

async function init() {

  setup();
  test();
  await build();
  pushServer();

}

/**
 * setup modules before deploy
 */
function setup() {

}

/**
 * unit test
 */
function test() {

  console.log(`testing..`);

}

/**
 * build front, api and containerize
 */
async function build() {

  console.log(`building..`);
  await buildFront();
  await buildApi();
  await dockerize();
  await saveDockerImage();

}

/**
 * build front
 */
async function buildFront() {

  const frontPath = pathUtils.getFrontPath();
  console.log(`build front : ${frontPath}`);
  process.chdir(frontPath);

  // yarn install
  let code = await processUtils.exec('yarn', ['install']);
  console.log(`yarn install success with code : ${code}`);

  // yarn build-deploy
  code = await processUtils.exec('yarn', ['build-deploy']);
  console.log(`build front success with code : ${code}`);

}

/**
 * build api
 */
async function buildApi() {

  const apiPath = pathUtils.getApiPath();
  console.log(`build api : ${apiPath}`);
  process.chdir(apiPath);
  const code = await processUtils.exec('./gradlew', ['bootJar']);
  console.log(`build api-jar success with code : ${code}`);
}

/**
 * dockerize api
 */
async function dockerize() {

  const apiPath = pathUtils.getApiPath();
  console.log(`dockerize api : ${apiPath}`);
  process.chdir(apiPath);
  const code = await processUtils.exec('docker', [
    'build',
    '--platform',
    'amd64',
    '--build-arg',
    'JAR_FILE=build/libs/\*.jar',
    '-t',
    DOCKER_IMAGE_TAG,
    '.'
  ]);
  console.log(`dockerize api success with code : ${code}`);

}

/**
 * docker image to tar file
 */
async function saveDockerImage() {

  const deployPath = pathUtils.getDeployPath();
  console.log(`save docker image : ${deployPath}`);
  process.chdir(deployPath);
  const code = await processUtils.exec('docker', [
    'save',
    '-o',
    DOCKER_IMAGE_SAVE_NAME,
    DOCKER_IMAGE_TAG
  ]);
  console.log(`save docker image success with code : ${code}`);

}

/**
 * push to server and run container
 */
async function pushServer() {

  const deployPath = pathUtils.getDeployPath();
  const dockerImagePath = pathUtils.concat(deployPath, DOCKER_IMAGE_SAVE_NAME);
  console.log(`push docker image to server : ${dockerImagePath}`);
  const code = await processUtils.exec('scp', [
    '-i',
    '~/.ssh/clubtetrix.pem',  // todo
    dockerImagePath,
    SERVER_FQDN + ':~'
  ]);
  console.log(`push docker image to server success with code : ${code}`);

}

init();
