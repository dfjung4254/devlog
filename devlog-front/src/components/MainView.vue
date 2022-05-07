<template>
  <div id="main">
    <SideBar/>
    <ContentsView :msg="member_id"/>
  </div>
</template>

<script>
import ContentsView from '@/components/ContentsView.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'MainView',
  components: {
    ContentsView,
    SideBar
  },
  data: function() {
    return {
       member_id: this.$route.params.member_id
    }
  },
  mounted: function() {
    console.log('this is test after mounted member_id : ', this.$route.params.member_id)
  }
}
</script>

<style>
#main {
  font-family: Roboto, Helvetica Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  top: 0;
  height: 100vh;
  color: aliceblue;
}
</style>
