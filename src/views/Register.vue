<template>
  <div class="login-wrap">
    <div class="login-content">
      <Input v-model="username" placeholder="账号" style="width:80%"/>
      <Input class="login-password" v-model="password1" type="password" placeholder="密码" style="width:80%"/>
      <Input v-model="password2" type="password" placeholder="确认密码" style="width:80%"/>
      <Button class="login-btn" type="primary"  @click="register">注册</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password1: "",
      password2: "",
      infoArr: []
    };
  },
  methods: {
    register() {
      if (!this.username || !this.password1 || !this.password2) {
        this.$Message.warning("账号密码不能为空");
      } else if (this.password1 !== this.password2) {
        this.$Message.error("两次密码不一致");
      } else {
        this.infoArr = JSON.parse(localStorage.getItem("userInfo"));
        let info = {
          username: this.username,
          password: this.password1
        };
        let flag = this.infoArr.some(item => item.username == info.username);
        if (flag) return this.$Message.warning("该账号已经注册");
        this.infoArr.push(info);
        localStorage.setItem("userInfo", JSON.stringify(this.infoArr));
        this.$Message.success("注册成功").then(this.$router.go(-1));
      }
    }
  }
};
</script>

<style scoped>
.login-wrap {
  display: flex;
  justify-content: center;
}
.login-content{
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
.login-btn {
  margin-top: 10px;
}
</style>