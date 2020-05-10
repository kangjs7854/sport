<template>
  <div class="post-page">
      <p >发表帖子</p>
      <div class="post-content">
          <Input v-model="title" placeholder="输入标题"  />
          <Input class="textarea" v-model="content" type="textarea" 
          placeholder="输入内容" :rows=5 />
          <Button type="success" long>发表</Button>
      </div>
      <goBack />
  </div>
</template>

<script>
const goBack = ()=>import("@/components/goBack/index.vue");
export default {
    data(){
        return{
            title:'',
            content:""
        }
    },
    components:{
        goBack
    },
    mounted(){
    }

}
</script>

<style lang="less" scoped>
.post-page{
    padding: .5rem;
    p{
        text-align: center;
    }
    .post-content{
        width: 80%;
        min-width: 300px;
        margin: 0.2rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        .textarea{
            margin: 0.2rem 0;
        }
    }

}
</style>