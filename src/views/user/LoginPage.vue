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
      <div class="mayun">
        <p>使用第三方账号登录</p>
        <img :src="logo" alt="" width="20px" />
        码云
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      logo:
        "https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1081188092,2818074614&fm=26&gp=0.jpg"
    };
  },
  computed: {
    ...mapState(["loginUser"])
  },
  mounted() {
    this.$store.commit("GET_LOGIN_USER_FROM_LOCAL");
  },
  methods: {
    login() {
      if (!this.username || !this.password) {
        this.$Message.warning("用户密码不能为空");
      } else {
        let temp = this.loginUser.some(item => {
          return (
            item.username == this.username && item.password == this.password
          );
        });
        if (temp) {
          this.$Message.success("登录成功");
          let loginInfo = {
            username: this.username,
            password: this.password
          };
          this.$store.commit("UPDATA_LOGIN_INFO", loginInfo);
          this.$router.push("/");
        } else {
          this.$Message.error("账号密码错误");
        }
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
.login-btn {
  margin-bottom: 10px;
}
.mayun {
  display: flex;
  align-items: center;
  padding: 10px;
}
.mayun p {
  color: #999;
}
</style>
