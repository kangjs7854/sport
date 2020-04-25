<template>
  <div>
    <hupu-header />
    <router-view />
    <div class="space"></div>
    <nav-bar />
  </div>
</template>

<script>
const navBar = () => import("@/components/navBar/index.vue");
const header = () => import("@/components/header/index.vue");
export default {
  components: {
    "nav-bar": navBar,
    "hupu-header": header
  }
};
</script>

<style scoped>
.space {
  padding: 40px;
}
</style>