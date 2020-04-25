<template>
  <div class="news-wrap">
    <h3 class="title">{{news.title}}</h3>
    <div class="sub-title">
      <p>{{news.source}}</p>
      <p>{{news.ptime}}</p>
    </div>
    <div class="img-wrap" v-if="news.img">
      <img :src="news.img[0].src" alt />
    </div>
    <div class="body" v-html="news.body">{{news.body}}</div>
    <go-back />
  </div>
</template>

<script>
const goBack = () => import("@/components/goBack/index.vue");
import api from "@/api";
export default {
  data() {
    return {
      news: {}
    };
  },
  mounted() {
    const id = this.$route.query.id;
    api.getNewsDetail(id).then(res => {
      let { body, title, source, ptime, dkey, img } = res.data[id];
      this.news = { body, title, source, ptime, dkey, img };
    });
  },
  components: {
    "go-back": goBack
  }
};
</script>
<style lang="less" scoped>
.news-wrap {
  padding: 0.5rem;
  .title {
    text-align: center;
    font-size: 24px;
  }
  .sub-title {
    padding-left: 0.2rem;
    margin: 0.1rem 0;
    color: #989da2;
  }
  .img-wrap {
    display: flex;
    justify-content: center;
    padding: 0.2rem;
    img {
      width: auto;
      height: 4rem;
      overflow: hidden;
    }
  }
  .body {
    font-size: 14px;
  }
}
</style>
