<template>
  <div id="app">
    <SideBar/>
    <Contents msg="Welcome DEVLOG"/>
  </div>
</template>

<script>
import Contents from './components/Contents.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    Contents,
    SideBar
  }
}
</script>

<style>
#app {
  font-family: Roboto, Helvetica Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  top: 0;
  height: 100vh;
  color: aliceblue;
}
</style>
