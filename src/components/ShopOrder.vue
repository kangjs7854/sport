<template>
  <div>
    <Icon size="20" type="ios-arrow-back" @click="$router.go(-1)" />
    <Tabs defaultActiveKey="1" size="small">
      <TabPane tab="全部" key="1">
        <div v-for="(item,index) in orders" :key="index" class="order-wrap">
          <!-- 顶部商店名称栏 -->
          <div class="order-header">
            <div class="order-header-shop">
              <a-icon type="appstore" />
              <span>识货团购</span>
              <a-icon type="right" />
            </div>
            <div>待付款</div>
          </div>
          <!-- 鞋子信息栏 -->
          <div class="order-info-wrap">
            <img :src="item.url" alt />
            <div class="order-info">
              <div>
                <div>{{item.name}}</div>
              </div>
              <div>
                {{item.color}},
                {{item.size}}
              </div>
              <div>发货时间 付款后15天内发货</div>
            </div>
          </div>
          <!-- 价格 -->
          <div class="order-price">
            合计￥
            <span>{{item.price}}</span>.00
          </div>
          <!-- 底部菜单按钮 -->
          <div class="order-btn">
            <div>
              <Poptip
                title="确定删除吗?"
                @on-ok="deleteOrder(index)"
                confirm
              >
                <Button>删除订单</Button>
              </Poptip>
            </div>
            <div>
              <Button>查看订单</Button>
            </div>
            <div>
              <Button type="warning">付款</Button>
            </div>
          </div>
        </div>
        <div class="space"></div>
      </TabPane>
      <TabPane tab="待付款" key="2" forceRender></TabPane>
      <TabPane tab="待发货" key="3"></TabPane>
    </Tabs>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["orders"])
  },
  mounted() {
    console.log(this.orders);

    if (this.orders.length == 0) {
      //如果vuex的订单数据为空，就从本地获取数据存储到vuex里
      this.$store.commit(
        "setOrders",
        JSON.parse(localStorage.getItem("orders"))
      );
      console.log(this.orders);
    } else {
      //如果不为空，就把vuex的数据更新到本地
      localStorage.setItem("orders", JSON.stringify(this.orders));
    }
  },
  methods: {
    deleteOrder(index) {
      console.log(index);
      this.orders.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.order-wrap {
  border: 1px #dcdee2 solid;
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
}
.order-header {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}
.order-header-shop {
  display: flex;
  align-items: center;
}
.order-header-shop span {
  padding: 0 5px;
}
.order-header div:last-child {
  color: #ff4338;
}
.order-info-wrap {
  display: flex;
  align-items: center;
}
.order-info div:nth-child(1) {
  font-size: 16px;
}
.order-info div:nth-child(2) {
  color: #dcdee2;
  padding: 5px 0;
}
.order-info div:nth-child(3) {
  font-size: 12px;
  color: #bbb36b;
}
.order-price {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
  align-items: center;
}
.order-price span {
  font-size: 18px;
  font-weight: 500;
}
.order-btn {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
}
.order-btn div:nth-child(2) {
  margin: 0 5px;
}

.space {
  padding: 30px;
}
</style>