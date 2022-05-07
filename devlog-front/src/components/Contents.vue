<template>
  <div class="main-panel">

  </div>
</template>

<script>
export default {
  name: 'Contents',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main-panel {
  position: relative;
  float: right;
  width: calc(100% - 260px);
  min-height: 100%;
  background-color: rgba(25,29,38,1);
}

</style>
