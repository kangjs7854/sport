<template>
    <div class="my-post">
        <p>我的帖子</p>
        <List>
            <ListItem v-for="(item,index) in post " :key="index">
                <ListItemMeta
                    avatar="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2536832087,236377184&fm=26&gp=0.jpg"
                    :title="item.title"
                    :description="item.content"
                />
                <template slot="action">
                    <Button type="primary" @click="editPost(item)">修改</Button>
                    <Button type="error" @click="deletePost(item)">删除</Button>
                </template>
            </ListItem>
        </List>
        <goBack />
    </div>
</template>

<script>
const goBack = () => import("@/components/goBack/index.vue");

import api from "@/api/index.js";
export default {
    data() {
        return {
            post: []
        };
    },
    mounted() {
        this.getPost();
    },
    components: {
        goBack
    },
    methods: {
        deletePost(item) {
            console.log(item);
            let id = item._id;

            api.deletePost(id).then(res => {
                console.log(res);
                if (res.data) {
                    this.$Message.success("删除成功");
                    this.getPost();
                }
            });
        },
        getPost() {
            api.getPost().then(res => {
                console.log(res);
                if (res.data) {
                    this.post = res.data;
                }
            });
        },
        editPost(item){
            let id = item._id;
            this.$router.push({
                path:"/post",
                query:{id}
            })
        }
    }
};
</script>

<style lang="less" scoped>
.my-post {
    padding: 0.5rem;
    p {
        text-align: center;
    }
    li {
        list-style: none;
    }
}
</style>