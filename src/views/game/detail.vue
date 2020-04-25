<template>
  <div class="game-info">
      <h3 class="title">{{game.title}}</h3>
      <p class="sub-title">{{game.source}}</p>
      <div class="img-wrap">
          <img :src="game.img" alt="">
      </div>
      <div class="body">
          {{game.content}}
      </div>
      <go-back />
  </div>
</template>

<script>
const goBack = () => import("@/components/goBack/index.vue");
export default {
  data() {
    return {
      game: {}
    };
  },

  mounted() {
    this.game = this.$route.params;
    console.log(this.$route.params);
  },
  components:{
      "go-back":goBack
  }
};
</script>

<style lang="less" scoped>
.game-info{
    padding: 0.5rem;
    .title{
        text-align: center;
        font-size: 24px;
    }
    .sub-title{
        padding: 0.2rem;
        color: #989da2;
    }
    .img-wrap{
        padding: 0.1rem;
        display: flex;
        justify-content: center;
        img{
            height: 3rem;
            width: auto;
            overflow: hidden;
        }
    }
    .body{
        font-size: 14px;
        padding: 0.1rem;
    }
}

</style>
