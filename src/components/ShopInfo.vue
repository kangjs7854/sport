<template>
  <keep-alive>
    <div>
      <!-- 头部菜单 -->
      <div class="title">
        <Icon size="20" type="ios-arrow-back" @click="$router.go(-1)" />
        <Icon size="20" type="ios-cart" @click="$router.push({path:'/shop/cart'})" />
      </div>
      <!-- 轮播 -->
      <Carousel v-model="value1" loop>
        <CarouselItem v-for="(item,index) in 4" :key="index">
          <div class="img-wrap">
            <img :src="shoe.url" width="60%" />
          </div>
        </CarouselItem>
      </Carousel>
      <!-- 价格 -->
      <div class="price">
        <span>￥</span>
        <span>{{shoe.price}}</span>
      </div>
      <h4 class="old">
        官方价格
        <span>{{shoe.price*1.5}}</span>
      </h4>
      <h2>{{shoe.name}}</h2>
      <!-- 选择配色 -->
      <div class="color">
        <div class="title">
          <span>选择配色</span>
          <span @click="$store.commit('openSizeDrawer')">
            选择尺码 {{choosedSize}}
            <Icon type="ios-arrow-forward" />
          </span>
        </div>
        <div class="box-wrap">
          <Card
            class="box-item"
            :class="{active :isActive==index}"
            style="width:25%"
            v-for="(item,index) in shoesColor"
            :key="index"
            @click.native="handleChoosedColor(index)"
          >
            <img :src="item.url" alt width="100%" />
            <span>{{item.type}}</span>
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
            v-if="!choosedSize"
            long
            type="error"
            @click="$store.commit('openSizeDrawer')"
          >查看尺码价格</Button>
          <Button v-else long type="error" @click="handleBuyShoe">立即购买</Button>
        </div>
      </div>
      <ShopInfoSize :shoe="shoe" @choosedSize="handleChoosedSize" />
    </div>
  </keep-alive>
</template>

<script>
import { mapState } from "vuex";
import ShopInfoSize from "../components/ShopInfoSize";
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
      isCollect: false,
      isActive: 0,
      choosedColor: "Red/white",
      choosedSize: "",
      // shoeInfo: {},
      orders: []
    };
  },
  components: {
    ShopInfoSize
  },
  computed: {
    ...mapState(["shoe","shoeInfos"])
  },
  created() {
    // this.shoe = this.$route.params;
    this.shoesColor.forEach(item => (item.url = this.shoe.url));
    console.log(JSON.parse(localStorage.getItem('shoeInfos')));
    
  },
  methods: {
    //收藏
    collect() {
      this.isCollect = !this.isCollect;
    },
    //选择码数
    handleChoosedSize(data) {
      this.choosedSize = data;
      console.log(this.choosedSize);
    },
    //选择颜色
    handleChoosedColor(index) {
      this.isActive = index;
      this.choosedColor = this.shoesColor[index].type;
      console.log(this.choosedColor);
    },
    //添加到购物车
    handleBuyShoe() {
      let shoeInfo = {
        name: this.shoe.name,
        price: this.shoe.price,
        url: this.shoe.url,
        color: this.choosedColor,
        size: this.choosedSize
      };
      this.$store.commit('setShoeInfos',shoeInfo)
      localStorage.setItem('shoeInfos',JSON.stringify(this.shoeInfos))
      this.$router.push({
        name: "shopcart"
        // params: this.orderInfo
      });
    }
  }
};
</script>

<style scoped>
.img-wrap {
  display: flex;
  justify-content: center;
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
  margin-bottom: 5px;
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
</style>