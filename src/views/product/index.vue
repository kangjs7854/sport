<template>
  <div>
    <banner />
    <div class="card-wrap">
      <Card
        class="card-item"
        v-for="product in products"
        :key="product.id"
        @click.native="jumpTo(product)"
      >
        <item :product="product" />
      </Card>
    </div>
  </div>
</template>

<script>
const banner = () => import("./banner");
const item = () => import("./item");
import { mapState } from "vuex";

export default {
  components: {
    banner,
    item
  },
  computed: {
    ...mapState(["products"])
  },
  mounted() {
    // this.$store.dispatch("allProducts");
    console.log(this.products);
  },
  methods: {
    jumpTo(item) {
      this.$router.push({
        path: "/product/detail",
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
