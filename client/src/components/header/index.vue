<template>
    <Menu class="menu" mode="horizontal" theme="primary" active-name="1">
        <MenuItem name="1" to="/admin">HUPU</MenuItem>
        <MenuItem name="2" to="/login" v-if="!isLogin">
            <Icon type="ios-person" />LOGIN
        </MenuItem>

        <Submenu name="2" v-else>
            <template slot="title">hello! {{username}}</template>
            <MenuItem name="2-1" @click.native="$router.push('/info')">修改信息</MenuItem>
            <MenuItem name="2-2" @click.native="dialog = true">退出登录</MenuItem>
            <MenuItem name="2-3" to="/admin">Admin</MenuItem>
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
    mounted() {
        const username = sessionStorage.getItem("username");
        if (!username) return;
        this.$store.commit("LOGIN", username);
    },
    methods: {
        logout() {
            this.$store.commit("LOGOUT");
            this.$Message.success("已退出该账号");
            this.dialog = false;
        }
    },
    computed: {
        ...mapState({
            isLogin: state => state.user.isLogin,
            username: state => state.user.username
        })
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
