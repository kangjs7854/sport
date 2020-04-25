<template>
  <!-- <keep-alive> -->
    <div class="wrap">
      <!-- 头部菜单 -->
      <div class="title">
        <Icon size="20" type="ios-arrow-back" @click="$router.go(-1)" />
        <Icon size="20" type="ios-cart" @click="jumpTo" />
      </div>
      <!-- 轮播 -->
      <Carousel v-model="value1" loop>
        <CarouselItem class="img-wrap" v-for="(item, index) in 4" :key="index">
          <img :src="product.image" class="img" />
        </CarouselItem>
      </Carousel>
      <!-- 价格 -->
      <div class="price">
        <span>￥</span>
        <span>{{ product.price }}</span>
      </div>
      <h4 class="old">
        官方价格
        <span>{{ product.price * 1.5 }}</span>
      </h4>
      <h3>{{ product.name }}{{ product.description }}</h3>

      <!-- 选择配色 -->

      <div class="color">
        <div class="title">
          <span>选择配色 {{ choosedColor }}</span>
          <span @click="$store.commit('OPEN_SIZE_DRAWER')">
            选择尺码 {{ choosedSize }}
            <Icon type="ios-arrow-forward" />
          </span>
        </div>
        <div class="box-wrap">
          <Card
            class="box-item"
            :class="{ active: isActive == index }"
            style="width:25%"
            v-for="(item, index) in shoesColor"
            :key="index"
            @click.native="handleChoosedColor(index)"
          >
            <img :src="product.image" alt width="100%" />
            <span>{{ item.type }}</span>
          </Card>
        </div>
      </div>
      <!-- 底部菜单栏 -->
      <div class="size">
        <div class="collect" @click="collect">
          <Icon type="ios-heart" size="20" v-if="isCollect" />
          <Icon type="ios-heart-outline" size="20" v-else />
          <span>收藏</span>
        </div>
        <div class="btn">
          <Button
            v-if="choosedSize === ''"
            long
            type="error"
            @click="$store.commit('OPEN_SIZE_DRAWER')"
          >查看尺码价格</Button>
          <Button v-else long type="error" @click="handleBuyShoe">立即购买</Button>
        </div>
      </div>
      <size-drawer :product="product" @choosedSize="handleChoosedSize" />
    </div>
  <!-- </keep-alive> -->
</template>
 
<script>
import { mapState } from "vuex";
import sizeDrawer from "./sizeDrawer";
export default {
  data() {
    return {
      shoesColor: [
        { type: "Red/white" },
        { type: "Black/White" },
        { type: "Valentine" },
        { type: "Foundation" }
      ],
      value1: 0,
      isCollect: false, //是否被收藏
      isActive: 0, //颜色选择框
      choosedColor: "Red/white", //选中的颜色
      choosedSize: "" //选择的尺码
    };
  },
  components: {
    "size-drawer": sizeDrawer
  },
  computed: {
    ...mapState(["product", "isLogin"])
  },
  mounted() {
    const { name } = this.product;
    //如果商品详情页面的内容为空，就从后端api接口请求数据
    if (!this.name) {
      this.$store.dispatch("productById", {
        productId: this.$route.query.id
      });
    }
  },
  methods: {
    //收藏
    collect() {
      if (!this.isLogin) return this.$Message.warning("未登录");
      this.isCollect = !this.isCollect;
    },
    //选择码数
    handleChoosedSize(data) {
      this.choosedSize = data;
    },
    //选择颜色
    handleChoosedColor(index) {
      this.isActive = index;
      this.choosedColor = this.shoesColor[index].type;
    },
    //添加到购物车
    async handleBuyShoe() {
      if (!this.isLogin) return this.$Message.warning("未登录");
      this.$set(this.product, "color", this.choosedColor);
      this.$set(this.product, "size", this.choosedSize);
      await this.$store.commit("ADD_TO_CART", this.product);
      console.log("此时的购物车数据：", this.$store.state.cart);
      this.$Message.success("添加成功");
      this.$router.push("/cart");
    },
    //跳转到购物车
    jumpTo() {
      if (!this.isLogin) return this.$Message.warning("未登录");
      this.$router.push("/cart");
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  padding: 0.2rem;
  .img-wrap {
    display: flex;
    justify-content: center;
  }
  .img {
    width: 25%;
  }
  .price {
    font-weight: 700;
    color: black;
  }
  .price span:nth-child(2) {
    font-size: 20px;
  }
  .old {
    color: #999;
  }
  .old span {
    text-decoration: line-through;
  }
  .color .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0px;
  }
  .color .box-wrap {
    display: flex;
  }
  .active {
    border-color: #ff4338;
  }
  .size {
    display: flex;
    padding: 10px;
    justify-content: space-around;
    align-items: center;
  }
  .size .collect {
    display: flex;
    flex-direction: column;
  }
  .size .btn {
    width: 80%;
  }
  .title {
    display: flex;
    justify-content: space-between;
  }
  .box-item span {
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 540px) {
    .img {
      width: 60%;
    }
  }
}
</style>
