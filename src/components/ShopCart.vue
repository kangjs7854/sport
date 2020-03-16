<template>
  <div class="body">
    <div class="title">
      <Icon size="20" type="ios-arrow-back" @click="$router.go(-1)" />
      <span @click="$router.push({path:'/shop/order'})">查看全部订单</span>
    </div>
    <!-- 用户信息 -->
    <Card to="/info" class="info">
      <div class="info-wrap">
        <Icon size="30" type="ios-pin-outline" />
        <div class="info-box">
          <div>
            {{userInfo.user}}
            {{userInfo.phone}}
          </div>
          <div>{{userInfo.address}}</div>
        </div>
        <Icon size="20" type="ios-arrow-forward" />
      </div>
    </Card>
    <br />
    <!-- 购物车信息 -->
    <div
      class="order-info-wrap"
      :class="{active:isActive.includes(item)}"
      v-for="(item,index) in orders"
      :key="index"
      @click="onClickItem(index,item)"
    >
      <img :src="item.url" alt />
      <div>
        <div>
          <h3>{{item.name}}</h3>
        </div>
        <div>{{item.color}};{{item.size}}</div>
        <div>￥{{item.price}}</div>
      </div>
    </div>
    <div class="space"></div>
    <!-- 底部菜单栏 -->
    <div class="bottom-bar-wrap">
      <div class="bottom-bar">
        <!-- 提交订单 -->
        <div>
          <span>共{{isActive.length}}件</span>
          <span>
            合计：
            <span>￥{{totalPrice}}</span>
          </span>
        </div>
        <div class="btn" v-if="isActive.length>0">
          <a-popconfirm title="确定删除?" @confirm="deleteItem" okText="Yes" cancelText="No">
            <a-button type="danger">删除</a-button>
          </a-popconfirm>
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
      orders: [],
      isActive: []
    };
  },
  computed: {
    ...mapState(["userInfo"]),
    totalPrice() {
      let init = 0;
      this.isActive.forEach(item => (init += +item.price));
      return init;
    }
  },
  methods: {
    //选中鞋子时高亮
    onClickItem(index, item) {
      if (this.isActive.includes(item)) {
        this.isActive.splice(this.isActive.indexOf(item), 1);
      } else {
        this.isActive.push(item);
      }
    },
    //删除选择的鞋子
    deleteItem(index) {
      this.orders.splice(index, 1);
      localStorage.setItem("shoeInfos", JSON.stringify(this.orders));
    },
    submitOrder() {
      if (this.isActive.length == 0) {
        return this.$message.warning("请选择商品");
      }

      this.$Spin.show();
      setTimeout(() => {
        this.$Spin.hide();
        this.$store.commit("setOrders", this.isActive); //保存订单数据到vuex
        localStorage.setItem(
          "orders",
          JSON.stringify(this.$store.state.orders)
        );
        this.orders = this.orders.filter(item => !this.isActive.includes(item)); //过滤剩下的订单
        localStorage.setItem("shoeInfos", JSON.stringify(this.orders)); //同步到本地
        this.$message.success("添加订单成功，待付款");
        this.$router.push({ path: "/shop/order" });
      }, 1000);
    }
  },
  mounted() {
    this.$store.commit(
      "saveUserInfo",
      JSON.parse(localStorage.getItem("user"))
    );
    this.orders = JSON.parse(localStorage.getItem("shoeInfos"));
    console.log(this.orders);
  }
};
</script>

<style scoped>
.body {
  padding: 10px;
}
.title{
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
}
.info-box {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}
.info-box-title {
  display: flex;
  justify-content: space-between;
}
.space {
  padding: 30px;
}
/* 鞋子的item样式 */
.order-info-wrap {
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