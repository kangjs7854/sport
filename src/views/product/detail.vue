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
                <span @click="openSizeDrawer">
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
                <Button v-if="choosedSize === ''" long type="error" @click="openSizeDrawer">查看尺码价格</Button>
                <Button v-else long type="error" @click="handleBuyShoe">立即购买</Button>
            </div>
        </div>

        <!-- <size-drawer :isShow="isShowDrawer" :product="product" @choosedSize="handleChoosedSize" /> -->

        <Drawer
            class="drawer-wrap"
            title="选择尺码"
            :closable="true"
            v-model="isShowDrawer"
            width="100%"
        >
            <div class="shoe-img">
                <img :src="product.image" alt />
            </div>
            <div class="shoe-name">
                <p>{{ product.name }}</p>
            </div>
            <div class="size-wrap">
                <Card
                    class="size-item"
                    :class="{ sizeActive: sizeActive == index }"
                    v-for="(item, index) in 12"
                    :key="index"
                    @click.native="handleChoosedSize(index)"
                    :dis-hover="false"
                >
                    <div class="size-box">
                        <span>{{ 36 + index }}</span>
                        <span>￥{{ product.price }}</span>
                    </div>
                </Card>
            </div>
        </Drawer>
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
            choosedSize: "", //选择的尺码
            isShowDrawer: false,
            sizeActive: 0
        };
    },
    components: {
        "size-drawer": sizeDrawer
    },
    computed: {
        ...mapState({
            product: state => state.product.product,
            isLogin: state => state.user.isLogin
        })
    },
    mounted() {
        this.$store.dispatch("getProductById", {
            productId: this.$route.query.id
        });
    },
    methods: {
        collect() {
            if (!this.isLogin) return this.$Message.warning("未登录");
            this.isCollect = !this.isCollect;
        },
        handleChoosedSize(index) {
            this.sizeActive = index;
            this.choosedSize = index + 36;
            this.isShowDrawer = false;

        },

        openSizeDrawer() {
            this.isShowDrawer = true;
        },
        handleChoosedColor(index) {
            this.isActive = index;
            this.choosedColor = this.shoesColor[index].type;
        },
        async handleBuyShoe() {
            if (!this.isLogin) return this.$Message.warning("未登录");
            this.$set(this.product, "color", this.choosedColor);
            this.$set(this.product, "size", this.choosedSize);
            await this.$store.commit("ADD_TO_CART", this.product);
            console.log("此时的购物车数据：", this.$store.state.cart);
            this.$Message.success("添加成功");
            this.$router.push("/cart");
        },
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
.drawer-wrap {
    .shoe-img {
        display: flex;
        justify-content: center;
    }
    .shoe-name {
        display: flex;
        justify-content: center;
        padding: 10px;
    }
    .size-wrap {
        display: flex;
        flex-wrap: wrap;
    }
    .size-item {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .size-box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .sizeActive {
        border-color: #ff4338;
    }
}
</style>
