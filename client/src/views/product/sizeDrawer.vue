<template>
    <div>
        <Drawer
            title="Choose Size"
            :closable="true"
            v-model="isShow"
            @on-close="handleChooseSize"
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
                    :class="{ active: isActive == index }"
                    v-for="(item, index) in 12"
                    :key="index"
                    @click.native="handleChooseSize(index)"
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
</template>

<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            isActive: -1
        };
    },
    props: ["product", "isShow"],
    methods: {
        handleChooseSize(index) {
            if (!index) {
                this.$emit("choosedSize", this.isActive + 36);
            } else {
                this.isActive = index;
                this.$emit("choosedSize", index + 36);
            }
        }
    }
};
</script>

<style scoped>
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
.active {
    border-color: #ff4338;
}
</style>
