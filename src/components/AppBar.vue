<template>
  <Menu class="menu" mode="horizontal" theme="primary" active-name="1">
    <MenuItem name="1" to="/">HUPU</MenuItem>
    <MenuItem name="2" to="login" v-if="!isLogin">
      <Icon type="ios-person" />LOGIN
    </MenuItem>
    <Submenu name="2" v-else>
      <template slot="title">hello! {{username.toUpperCase()}}</template>
      <MenuItem name="2-1" @click.native="$router.push('/info')">修改信息</MenuItem>
      <MenuItem name="2-2" @click.native="dialog = true">退出登录</MenuItem>
    </Submenu>
    <Modal v-model="dialog" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="ios-information-circle"></Icon>
        <span>提示信息</span>
      </p>
      <div style="text-align:center">
        <p>确定退出登录吗？</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="logout">确定</Button>
      </div>
    </Modal>
  </Menu>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapState(["username",'isLogin'])
  },
  mounted() {
    let logininfo = JSON.parse(localStorage.getItem("isLogin"));
    this.$store.commit("login", logininfo);    
  },
  methods: {
    logout() {
      localStorage.removeItem("isLogin");
      this.$store.commit("logout");
      this.$router.push('login')
      this.$Message.success("已退出该账号")
      this.dialog = false;
    },
   
  }
};
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0px;
}
</style>