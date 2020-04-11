<template>
  <div>
    <br />
    <br />

    <product-form @save-product="addProduct" :model="model" :manufacturers="manufacturers"></product-form>
  </div>
</template>

<script>
const ProductForm = () => import("./ProductForm");
export default {
  data() {
    return {
      model: {},
      manufacturers: [
        {
          _id: "1",
          name: "耐克"
        },
        {
          _id: "2",
          name: "阿迪达斯"
        },
        {
          _id: "3",
          name: "安德玛"
        },
        {
          _id: "4",
          name: "李宁"
        },
        {
          _id: "5",
          name: "安踏"
        }
      ]
    };
  },
  methods: {
    addProduct(model) {
      console.log("model", model);
      this.$store.dispatch("addProduct", {
        product: model
      });
    }
  },
  components: {
    "product-form": ProductForm
  }
};
</script>

<style></style>
