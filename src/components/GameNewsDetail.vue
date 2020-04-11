<template>
  <div>
    <Affix :offset-top="10">
      <Icon
        type="ios-arrow-back"
        @click="$router.go(-1)"
        style="fontSize:20px"
      />
    </Affix>
    <h2>{{ news.title }}</h2>
    <viewer>
      <img :src="news.img" class="img-box" />
    </viewer>
    {{ news.content }}
    <Divider />
    <Comment />
    <br />
  </div>
</template>

<script>
import Comment from "../components/Comment";
export default {
  data() {
    return {
      news: {}
    };
  },
  components: {
    Comment
  },
  mounted() {
    this.news = this.$route.params;
    console.log(this.$route.params);
  }
};
</script>

<style scoped>
.img-box {
  width: 100%;
  padding: 10px 0;
}
</style>
