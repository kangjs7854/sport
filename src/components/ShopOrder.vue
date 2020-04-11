<template>
  <div>
    <Icon size="20" type="ios-arrow-back" @click="$router.go(-1)" />
    <ul>
      <li v-for="(item, index) in orders" :key="index" class="order-item">
        <shop-order-item :order="item" @delete-order="deleteOrder" />
      </li>
    </ul>
    <div class="space"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
const ShopOrderItem = () => import("../components/ShopOrderItem");
export default {
  computed: {
    ...mapState(["orders"])
  },
  components: {
    "shop-order-item": ShopOrderItem
  },
  mounted() {
    this.$store.commit("GET_ORDERS_FROM_LOCAL");
    this.orders.reverse();
  },
  methods: {
    deleteOrder(item) {
      this.$store.commit("REMOVE_FROM_ORDERS", item);
    }
  }
};
</script>

<style scoped>
.order-wrap {
  border: 1px #dcdee2 solid;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
}
.order-item {
  list-style: none;
  margin: 10px;
}
.space {
  padding: 30px;
}
</style>
