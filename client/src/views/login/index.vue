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
import api from "@/api/index.js";
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
                this.$Message.warning("用户密码不能为空");
            } else {
                api.getUserByUserName(this.username).then(res => {
                    if (!res.data) return this.$Message.warning("用户不存在");
                    if (this.password != res.data.password) {
                        this.$Message.error("密码错误");
                    } else {
                        this.$Message.success("登录成功");
                        this.$store.commit("LOGIN", res.data.username);
                        sessionStorage.setItem("username", res.data.username);
                        this.$router.go(-1);
                    }
                });
            }
        }
    }
};
</script>
<style lang="less" scoped>
.login-wrap {
    display: flex;
    justify-content: center;
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
}
</style>

