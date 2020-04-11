<template>
  <div class="card-wrap">
    <Card
      class="card-item"
      v-for="item in products"
      :key="item.id"
      @click.native="jumpTo(item)"
    >
      <img :src="item.image" width="100%" alt />
      <span class="name">{{ item.name }}</span>
      <div class="footer">
        <span class="price">¥{{ item.price }}</span>
        <span class="hot">热度{{ item.hot }}</span>
      </div>
    </Card>
    <Card class="card-item" @click.native="$router.push('/shop/new')">
      <Icon type="ios-add" size="100" color="#999" />
    </Card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["products"])
  },
  mounted() {
    this.$store.dispatch("allProducts");
  },
  methods: {
    jumpTo(item) {
      this.$router.push({
        path: "/shop/detail",
        query: {
          id: item._id
        }
      });
      this.$store.commit("SELECTE_PRODUCT", item);
    }
  }
};
</script>

<style scoped>
.card-wrap {
  display: flex;
  flex-wrap: wrap;
}
.card-item {
  display: flex;
  width: 25%;
  justify-content: center;
  align-items: center;
}
.card-item:hover {
  border-color: #ff4338;
}
.card-item .name {
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

/** 手机 **/
@media only screen and (max-width: 540px) {
  .card-item {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
  }
}
</style>
