<template>
  <div class="login-wrap">
    <div class="login-content">
      <Input v-model="username" placeholder="账号" style="width:80%" />
      <Input
        class="login-password"
        v-model="password"
        type="password"
        placeholder="密码"
        style="width:80%"
      />
      <Button class="login-btn" type="primary" @click="login">登录</Button>
      <Button type="text" @click="$router.push('/register')">注册</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        this.$Message.warning("账号密码不能为空");
      } else {
        let infoArr = JSON.parse(localStorage.getItem("userInfo"));
        let flag = infoArr.some(item => item.username == this.username);
        if (!flag) return this.$Message.warning("账号密码不存在");
        let res = infoArr.find(item => item.username == this.username);
        console.log(res);
        if (res.password !== this.password)
          return this.$Message.error("密码错误");
        this.$Spin.show();
        setTimeout(() => {
          this.$Message.success("登陆成功");
          this.$Spin.hide();
          let loginInfo = {
            isLogin: true,
            username: res.username
          };
          localStorage.setItem("isLogin", JSON.stringify(loginInfo));
          this.$store.commit("login", loginInfo);
          this.$router.push("/");
        }, 3000);
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
  margin-bottom: 10px;
}
</style>