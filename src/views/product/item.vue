<template>
  <div>
    <img :src="product.image" width="100%" alt />
    <span class="name">{{ product.name }}</span>
    <div class="footer">
      <span class="price">¥{{ product.price }}</span>
      <span class="hot">热度{{ product.hot }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  
};
</script>

<style scoped>
.name {
  font-size: 14px;
  color: #444;
}
.footer {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}
.footer .price {
  font-weight: 700;
  color: black;
}


</style>
