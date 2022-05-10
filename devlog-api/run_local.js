#!/usr/bin/env node

import {spawn} from 'child_process';

function init() {


  runLocal(parseArguments());

}

function parseArguments() {

  const args = [];
  if(process.argv.some(arg => arg === '-debug')) {
    args.push('--debug-jvm');
  }

  return args;
}

function runLocal(args) {

  const gradlewArgs = ['bootRun', '--stacktrace'];
  gradlewArgs.push(...args);

  const child = spawn('./gradlew', gradlewArgs);

  child.stdout.on('data', (data) => {
    console.log(`${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`${data}`);
  });

  child.on('close', (code) => {
    console.log(`end with : ${code}`);
  });

}

init();
