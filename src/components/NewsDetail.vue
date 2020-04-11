<template>
  <div style="padding:10px">
    <Icon size="20" type="ios-arrow-back" @click="$router.go(-1)" />
    <h3>{{ news && news.title }}</h3>
    <div>
      <span>{{ news && news.source }}</span>
      <span>{{ news && news.ptime }}</span>
    </div>
    <viewer class="img-wrap">
      <img :src="news && news.image" alt="newsimg" width="100%" />
    </viewer>
    <div v-html="news.body">{{ news && news.body }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: {}
    };
  },
  mounted() {
    const id = this.$route.query.id;
    let temp;
    this.$axios.get("/api/nc/article/" + id + "/full.html").then(res => {
      this.news = res.data[id];
      if (Array.isArray(this.news.img)) {
        temp = this.news.img.shift();
        this.news.image = temp.src;
      }
      console.log(this.news);
    });
  }
};
</script>

<style scoped>
.img-wrap {
  margin: 10px 0;
}
</style>
