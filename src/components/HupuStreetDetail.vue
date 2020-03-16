<template>
  <div style="padding:10px">
    <Affix :offset-top="10">
      <Icon type="ios-arrow-back" @click="$router.go(-1)" style="fontSize:20px" />
    </Affix>
    <div>
      {{msg.name}}
      {{msg.time}}
    </div>
    <h3>{{msg.title}}</h3>
    <div>
      <viewer>
        <img :src="msg.img" width="100%" />
      </viewer>
    </div>
    <p style="paddingBottom:20px">{{msg.content}}</p>
    <Comment />
  </div>
</template>

<script>
import Comment from '../components/Comment';
export default {
  data() {
    return {
      msg: {}
    };
  },
  components:{
    Comment
  },
  mounted() {
    console.log(this.$route.params);
    this.msg = this.$route.params;
  }
};
</script>

<style>
</style>