<template>
  <div id="nav">
    <SideBarNavLink navname="HOME" />
    <SideBarNavLink navname="PROFILE" />
    <SideBarNavLink navname="ARTICLES" />
    <SideBarNavLink navname="PORTPOLIO" />
  </div>
</template>

<script>
import SideBarNavLink from "@/components/SideBar-Nav-Link.vue";

export default {
  name: "SideBar-Nav",
  components: {
    SideBarNavLink
  }
}
</script>

<style scoped>
#nav {

}
</style>
