<template>
  <div class="card-wrap">
    <Card class="card-item" v-for="item in shoes" :key="item.id" @click.native="Linkto(item)">
      <img :src="item.url" width="100%" alt />
      <span class="name">{{item.name}}</span>
      <div class="footer">
        <span class="price">¥{{item.price}}</span>
        <span class="hot">热度{{item.hot}}</span>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shoes: []
    };
  },
  mounted() {
    this.$axios.get("shoe.json").then(res => {
      this.shoes = res.data.data;
      this.shoes.forEach(
        item => (item.hot = Math.floor(Math.random() * 100000))
      );
      this.shoes.sort(()=>0.5-Math.random())
    });
  },
  methods: {
    Linkto(item) {
      this.$router.push({
        name: "shopinfo"
      });
      this.$store.commit("setShoe", item);
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
  width: 50%;
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
</style>