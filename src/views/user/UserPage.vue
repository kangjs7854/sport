<template>
  <div>
    
    <AppBar />
    <router-view class="body" />
    <div class="space"></div>
    <BottomNavBar />
  </div>
</template>

<script>
const BottomNavBar = () => import("@/components/BottomNavBar");
const AppBar = () => import("@/components/AppBar");
export default {
  components: {
    BottomNavBar,
    AppBar
  }
};
</script>

<style scoped>
.space {
  padding: 40px;
}
</style>