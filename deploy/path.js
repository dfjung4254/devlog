import path from 'path';

export default class PathUtils {

  constructor(workingDir) {

    console.log(`current working Dir is ${workingDir}`)

    this.DIR_NAME_FRONT = 'devlog-front';
    this.DIR_NAME_API = 'devlog-api';
    this.DIR_NAME_DEPLOY = 'deploy';

    this.projectPath = workingDir;
    this.deployPath = this.setDeployPath();
    this.frontPath = this.setFrontPath();
    this.apiPath = this.setApiPath();
  }

  getProjectPath = () => {
    return this.projectPath;
  }

  setFrontPath = () => {
    return path.resolve(this.getProjectPath(), this.DIR_NAME_FRONT);
  }

  getFrontPath = () => {
    return this.frontPath;
  }

  setApiPath = () => {
    return path.resolve(this.getProjectPath(), this.DIR_NAME_API);
  }

  getApiPath = () => {
    return this.apiPath;
  }

  setDeployPath = () => {
    return path.resolve(this.getProjectPath(), this.DIR_NAME_DEPLOY);
  }

  getDeployPath = () => {
    return this.deployPath;
  }

}
