<template>
  <div class="login-wrap">
    <div class="login-content">
      <Input v-model="username" placeholder="账号" style="width:80%" />
      <Input
        class="login-password"
        v-model="password1"
        type="password"
        placeholder="密码"
        style="width:80%"
      />
      <Input
        v-model="password2"
        type="password"
        placeholder="确认密码"
        style="width:80%"
      />
      <div class="button">
        <Button class="login-btn" type="primary" @click="register">注册</Button>
        <Button class="login-btn" type="primary" @click="goBack">取消</Button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js';
export default {
  data() {
    return {
      username: "",
      password1: "",
      password2: "",
    };
  },
  methods: {
    register() {
      if (!this.username || !this.password1 || !this.password2) {
        this.$Message.warning("账号密码不能为空");
      } else if (this.password1 != this.password2) {
        this.$Message.error("两次密码不一致");
      } else {
        api.addUser({
          username:this.username,
          password:this.password1
        }).then(res=>{
          if(!res.data) return this.$Message.warning("改账号已经被注册")
          this.$Message.success('注册成功')
          this.goBack()
        })
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.login-wrap {
  display: flex;
  justify-content: center;
}
.login-content {
  border: 1px #dedede solid;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  padding: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.login-password {
  padding: 10px 0;
}
.button {
  display: flex;
  justify-content: space-between;
}
.login-btn {
  margin: 10px;
}
</style>
