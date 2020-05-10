<template>
    <div class="post-page">
        <p>发表帖子</p>
        <div class="post-content">
            <Input v-model="post.title" placeholder="输入标题" />
            <Input class="textarea" v-model="post.content" type="textarea" placeholder="输入内容" :rows="5" />
            <Button type="success" long @click="addPost" v-if="!postId">发表</Button>
            <Button type="success" long @click="updatePost" v-else>修改</Button>

        </div>
        <goBack />
    </div>
</template>

<script>
import api from "@/api/index.js";
const goBack = () => import("@/components/goBack/index.vue");
export default {
    data() {
        return {
            post: {
                title: "",
                content: ""
            },
            postId:""
        };
    },
    components: {
        goBack
    },
    mounted() {
        let id = this.$route.query.id
        if(id){
            this.postId = id
            this.getPostById()
        }
        
    },
    methods: {
        addPost() {
            return api.addPost(this.post).then(res => {
                if(res.data){
                    this.$Message.success("发表成功")
                }
            });
        },
        getPostById(){
            api.getPostById(this.postId).then(res=>{
                if(res.data){
                    this.post = res.data
                }                
            })
        },
        updatePost(){
            api.updatePost(this.postId,this.post).then(res=>{
                console.log(res);
                if(res.data){
                    this.$Message.success("修改成功")
                }
                
            })
        }
    }
};
</script>

<style lang="less" scoped>
.post-page {
    padding: 0.5rem;
    p {
        text-align: center;
    }
    .post-content {
        width: 80%;
        min-width: 300px;
        margin: 0.2rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        .textarea {
            margin: 0.2rem 0;
        }
    }
}
</style>