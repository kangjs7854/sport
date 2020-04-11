<template>
  <div ref="container">
    <ul class="bxjMsg-box">
      <li v-for="(item, index) in bxjMsg" :key="index" @click="jumpTo(item)">
        <h3>{{ item.title }}</h3>
        <div class="subtitle">
          {{ item.name }}
          {{ item.time }}
        </div>
        <Divider />
      </li>
    </ul>
    <BackTop :bottom="70"></BackTop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bxjMsg: []
    };
  },
  methods: {
    jumpTo(item) {
      this.$router.push({
        name: "jrsdetail",
        params: item
      });
    }
  },
  mounted() {
    this.$axios.get("bxj2.json").then(res => {
      this.bxjMsg = res.data.data;
      this.bxjMsg.sort(() => 0.5 - Math.random());
    });
  }
};
</script>

<style scoped>
.bxjMsg-box {
  padding: 10px;
}
.subtitle {
  padding-top: 10px;
  color: #888;
}
</style>
