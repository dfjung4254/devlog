import path from 'path';

export default class PathUtils {

  constructor() {
    this.DIR_NAME_FRONT = 'devlog-front';
    this.DIR_NAME_API = 'devlog-api';
    this.deployPath = process.cwd();

    this.projectPath = this.setProjectPath();
    this.frontPath = this.setFrontPath();
    this.apiPath = this.setApiPath();
  }

  setProjectPath = () => {
    return path.resolve(this.deployPath, '../');
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

  getDeployPath = () => {
    return this.deployPath;
  }

}
