<template>
  <div class="body">
    <div class="title">
      <Icon size="20" type="ios-arrow-back" @click="$router.go(-1)" />
      <span @click="$router.push({ path: '/order' })">查看全部订单</span>
    </div>
    <!-- 用户信息 -->
    <Card to="/info" class="info">
      <div class="info-wrap">
        <div>
          <Icon size="30" type="ios-pin-outline" />
          {{ userInfo && userInfo.username }}
          {{ userInfo && userInfo.phone }}
          {{ userInfo && userInfo.address }}
        </div>
        <Icon size="20" type="ios-arrow-forward" />
      </div>
    </Card>
    <br />
    <!-- 购物车信息 -->
    <div
      class="cart-wrap"
      :class="{ active: isSelected.includes(item) }"
      v-for="(item, index) in cart"
      :key="index"
      @click="onClickItem(item)"
    >
      <img :src="item.image" alt width="170px" />
      <div>
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <h4>{{ item.color }};{{ item.size }}</h4>
        <h3>￥{{ item.price }}</h3>
      </div>
    </div>
    <div class="space"></div>
    <!-- 底部菜单栏 -->
    <div class="bottom-bar-wrap">
      <div class="bottom-bar">
        <!-- 提交订单 -->
        <div>
          <span>共{{ isSelected.length }}件</span>
          <span>
            合计：
            <span>￥{{ totalPrice }}</span>
          </span>
        </div>
        <div class="btn" v-if="isSelected.length > 0">
          <Poptip confirm title="确定删除?" @on-ok="deleteItem" ok-text="yes" cancel-text="no">
            <Button type="warning">删除</Button>
          </Poptip>
        </div>
        <div class="btn">
          <Button type="primary" @click="submitOrder">提交订单</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isSelected: [] //被选中的鞋子
    };
  },
  computed: {
    ...mapState(["cart", "userInfo"]),
    totalPrice() {
      let init = 0;
      this.isSelected.forEach(item => (init += +item.price));
      return init;
    }
  },
  mounted() {
    this.$store.commit("GET_CART_FROM_LOCAL");
  },
  methods: {
    //选中鞋子时高亮
    onClickItem(item) {
      if (this.isSelected.includes(item)) {
        this.isSelected.splice(this.isSelected.indexOf(item), 1);
      } else {
        this.isSelected.push(item);
      }
    },
    //删除选择的商品
    deleteItem() {
      console.log("删除选择的商品", this.isSelected);
      this.$store.commit("REMOVE_FROM_CART", this.isSelected);
    },
    async submitOrder() {
      if (this.isSelected.length == 0) {
        return this.$Message.warning("请选择商品");
      }
      console.log(this.isSelected);
      await this.$store.commit("ADD_TO_ORDERS", this.isSelected);
      this.deleteItem();
      this.$router.push({ path: "/order" });
    }
  }
};
</script>

<style scoped>
.body {
  padding: 10px;
}
.title {
  display: flex;
  justify-content: space-between;
}
.info {
  margin-top: 10px;
  color: #444;
  border-radius: 10px;
}
.info-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.space {
  padding: 30px;
}
/* 鞋子的item样式 */
.cart-wrap {
  display: flex;
  align-items: center;
  border: 1px solid #dcdee2;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
}
/* 鞋子点击后的样式 */
.active {
  border: 1px #ff4338 solid;
}

/* 底部菜单栏的样式 */
.bottom-bar-wrap {
  position: fixed;
  bottom: 0;
  height: 40px;
  width: 100%;
  background-color: #ffffff;
  z-index: 10;
}
.bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom-bar .btn {
  margin-right: 20px;
}
.bottom-bar span:nth-child(2) > span {
  font-size: 18px;
  font-weight: 500;
}
</style>
