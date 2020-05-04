<template>
    <Card>
        <!-- 顶部商店名称栏 -->
        <div class="order-header">
            <div class="order-header-shop">
                <Icon type="ios-basketball" size="20" />
                <span>识货团购</span>
                <Icon type="ios-arrow-forward" size="20" />
            </div>
            <div>待付款</div>
        </div>
        <!-- 鞋子信息栏 -->
        <div v-for="(item, index) in order" :key="index" class="order-info-wrap">
            <img :src="item.image" alt width="170px" />
            <div>
                <h4>{{ item.name }}</h4>
                <p>{{ item.description }}</p>
                <p>
                    {{ item.color }},
                    {{ item.size }}
                </p>
            </div>
            <span>X1</span>
        </div>
        <!-- 价格 -->
        <div class="order-price">
            合计￥
            <span>{{ price }}</span>.00
        </div>
        <!-- 底部菜单按钮 -->
        <div class="order-btn">
            <Poptip title="确定删除吗?" @on-ok="deleteOrder" confirm>
                <Button>删除订单</Button>
            </Poptip>
         
            <div>
                <Button type="warning" @click="pay">付款</Button>
            </div>
        </div>
    </Card>
</template>

<script>
export default {
    props: ["order"],
    computed: {
        price() {
            let price = 0;
            this.order.forEach(item => {
                price += item.price;
            });
            return price;
        }
    },
    methods: {
        deleteOrder() {
            this.$emit("delete-order", this.order);
        },
        pay(){
            this.$emit('pay',this.price)
        }
      
    }
};
</script>

<style lang="less" scoped>
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
    position: relative;
    border-bottom: 1px solid #f5f5f5;
    span {
        position: absolute;
        right: 0;
    }
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
</style>
