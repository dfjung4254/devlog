<template>
  <div id="sidebar-wrapper" class="border-danger">
    <SideBarLogo />
    <SideBarNav />
  </div>
</template>

<script>
import SideBarLogo from "@/components/SideBar-Logo.vue";
import SideBarNav from "@/components/SideBar-Nav.vue";

export default {
  name: "SideBar",
  components: {
    SideBarNav,
    SideBarLogo
  }
}
</script>

<style scoped>
#sidebar-wrapper {
  overflow: auto;
  max-height: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 260px;
  display: block;
  z-index: 1;
  font-weight: 200;
  background-size: cover;
  background-position: 50%;
  background-color: rgba(18,21,28,1);
  padding: 15px;
}
</style>