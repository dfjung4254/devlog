const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // build target directory
  outputDir: '../devlog-api/src/main/resources/static',

  // run serve
  devServer: {
    proxy: 'http://localhost:8080'
  }


})
