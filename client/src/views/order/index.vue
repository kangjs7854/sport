<template>
    <div class="order-page">
        <Icon size="20" type="ios-arrow-back" @click="$router.go(-1)" />
        <ul>
            <li v-for="(item, index) in orders" :key="index" class="order-item">
                <item :order="item" @delete-order="deleteOrder" @pay="pay" />
            </li>
        </ul>

        <Modal v-model="modal1" title="扫描二维码付款">
            <canvas id="msg" ref="msg"></canvas>
        </Modal>
        <div class="space"></div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import QRCode from "qrcode";
const item = () => import("./item");
export default {
    data() {
        return {
            message: "",
            modal1: false
        };
    },
    components: {
        item
    },
    mounted() {
        this.orders.reverse();
    },
    methods: {
        deleteOrder(item) {
            this.$store.commit("DELETE_ORDERS", {
                order: item
            });
        },
        pay(price) {
            this.modal1 = true;
            this.message = `${price}元`;
            QRCode.toCanvas(this.$refs.msg, this.message, err => {
                console.log(err);
            });
        }
    },
    computed: {
        ...mapState({
            orders: state => state.product.orders
        })
    }
};
</script>

<style  lang="less" scoped>
.order-page {
    padding: 0.1rem;
    .order-wrap {
        border: 1px #dcdee2 solid;
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 10px;
    }
    .order-item {
        list-style: none;
        margin: 10px;
    }

    .space {
        padding: 30px;
    }
    #msg {
        width: 200px;
        height: 200px;
        margin: 0 auto;
    }
}
</style>
