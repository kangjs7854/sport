<template>
  <div class="wrap">
    <h3>{{jrs.title}}</h3>
    <div class="user">
      <span>{{jrs.name}}</span>
      <span>{{jrs.time}}</span>
    </div>
    <div class="content">
      <div>
        <img v-if="jrs.img" :src="jrs.img" alt />
      </div>
      <p>{{jrs.content}}</p>
    </div>
    <go-back />
  </div>
</template>

<script>
const goBack = ()=>import("@/components/goBack/index.vue");
export default {
  data() {
    return {
      jrs: {}
    };
  },
  mounted() {
    console.log(this.$route.params);
    this.jrs = this.$route.params;
  },
  components: {
    "go-back": goBack
  }
};
</script>

<style lang="less" scoped>
.wrap {
  padding: 0.5rem;
  .user {
    padding: 0.1rem 0;
    span:nth-child(2) {
      padding-left: 0.2rem;
      color: #989da2;
    }
  }
  .content {
    img {
      height: auto;
      width: 80%;
      overflow: hidden;
    }
    p {
      padding: 0.1rem;
    }
  }
}
</style>