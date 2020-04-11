<template>
  <div>
    <ShopListHeader />
    <ShopListItem />
  </div>
</template>

<script>
const ShopListHeader = () => import("../components/ShopListHeader");
const ShopListItem = () => import("../components/ShopListItem");
export default {
  components: {
    ShopListHeader,
    ShopListItem
  }
};
</script>

<style></style>
