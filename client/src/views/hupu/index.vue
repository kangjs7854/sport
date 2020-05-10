<template>
    <div class="hupu">
        <h3 class="title">步行街热帖</h3>
        <ul class="jrs-wrap">
            <li class="jrs-item" v-for="(item,index) in jrs " :key="index" @click="jumpTo(item)">
                <div>
                    <p>
                        {{item.title}}
                        <span v-if="item.like">{{item.like}}亮</span>
                    </p>
                    <span class="right-title">步行街主干道</span>
                </div>
                <div class="divider"></div>
            </li>
        </ul>
        <div class="menu">
            <Icon class="menu-item" type="ios-add-circle" />
        </div>

        <div class="menu" @click="swich">
            <Icon class="menu-item" type="ios-add-circle" />
        </div>
        <div class="dialog" v-show="isShow">
            <span @click="publish">发表帖子</span>
            <span @click="checkMine">查看我的</span>
        </div>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data() {
        return {
            jrs: [],
            isShow: false
        };
    },
    mounted() {
        this.getJrs();
        setTimeout(() => {
          this.getPost()
        }, 500);
    },
    methods: {
        getJrs() {
            api.getJrs().then(res => {
                console.log(res.data.data);
                this.jrs = res.data.data;
            });
        },
        getPost() {
            api.getPost().then(res => {
                if (res.data) {
                    this.jrs = [...res.data, ...this.jrs];
                }
            });
        },
        jumpTo(item) {
            console.log(item);
            this.$router.push({
                name: "hupudetail",
                params: item
            });
        },
        swich() {
            console.log("增加帖子");
            this.isShow = !this.isShow;
        },
        publish() {
            this.isShow = false;
            this.$router.push("/post");
        },
        checkMine() {
            this.isShow = false;
            this.$router.push("/myPost");
        }
    }
};
</script>

<style lang="less" scoped>
.hupu {
    padding: 0.5rem;
    .title {
        font-size: 20px;
        text-align: center;
        margin-bottom: 0.1rem;
        overflow: hidden;
    }
    .jrs-wrap {
        display: flex;
        flex-direction: column;
        .jrs-item {
            list-style: none;
            padding: 0.1rem;
            cursor: pointer;
            div:nth-child(1) {
                display: flex;
                justify-content: space-between;
                span {
                    padding-left: 0.2rem;
                    color: #989da2;
                }
            }

            .divider {
                border: 1px dashed #ccc;
                opacity: 0.3;
            }
        }
    }
    .menu {
        height: 0.6rem;
        width: 0.6rem;
        background-color: #2d8cf0;
        position: fixed;
        right: 0.6rem;
        bottom: 1.4rem;
        opacity: 0.5;
        border-radius: 0.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            background-color: #fff;
            opacity: 0.8;
            .menu-item {
                transform: scale(3.5) rotate(90deg);
                transition: 0.3s;
            }
        }
    }
    .dialog {
        width: 2.3rem;
        height: 1.3rem;
        background-color: #515a6e;
        position: fixed;
        border-radius: 0.1rem;
        right: 1rem;
        bottom: 1.8rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        color: #fff;
        cursor: pointer;
    }
}
@media only screen and (max-width: 540px) {
    .right-title {
        display: none;
    }
}
</style>