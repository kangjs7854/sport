<template>
  <div class="game">
    <ul class="game-wrap">
      <li class="game-item" 
      v-for="(item,index) in game" :key="index"
      @click="jumpTo(item)"
      >
        <div class="left" >
          <img v-if="item.img" :src="item.img" alt />
          <img v-else :src="url" alt="">
        </div>
        <div class="right">
          <h3 class="title">{{item.title}}</h3>
          <p class="sub-title">{{item.content | cutter}}。</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      game: [],
      url:'https://c2.hoopchina.com.cn/uploads/star/event/images/default/newLogo.jpg?x-oss-process=image/resize,w_800/format,webp'
    };
  },

  methods: {
    jumpTo(item) {
      this.$router.push({
        name: "gameDetail",
        params: item
      });
    }
  },
  mounted() {
    api.getGame().then(res => {
      console.log(res.data.data);
      this.game = res.data.data;
    });
   
    
  },
  filters: {
    cutter(str) {
      return str.split("。")[0]
    }
  }
};
</script>
<style lang="less" scoped>
.game {
  padding: 0.5rem;
  .game-wrap {
    display: flex;
    flex-direction: column;
    li {
      list-style: none;
    }
    .game-item {
      padding: 0.5rem 0;
      display: flex;
      .left {
        padding: 0 0.2rem;
        img {
          width: 270px;
          height: auto;
        }
      }
      .right {
        .title {
          font-size: 18px;
        }
        .sub-title {
          padding: 0.1rem 0;
          color: #989da2;
        }
      }
    }
    /** 手机 **/
    @media only screen and (max-width: 540px) {
      .game-item {
        padding: 0.5rem 0;
        display: flex;
        .left {
          display: none;
        }
        .right {
          flex: 1;
          .title {
            font-size: 18px;
          }
          .sub-title {
            padding: 0.1rem 0;
            color: #989da2;
          }
        }
      }
    }
  }
}
</style>
