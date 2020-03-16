<template>
  <div>
    <router-view class="shop-wrap" />
    <BackTop :bottom="70"></BackTop>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.shop-wrap {
  padding: 10px;
}
</style>