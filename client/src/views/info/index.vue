<template>
    <div class="info-wrap">
        <Card class="info-card">
            <ul>
                <li class="list-item">
                    <span>用户名：</span>
                    <Input style="width: 80%" type="text" v-model="username" disabled />
                </li>
                <li class="list-item">
                    <span>年龄</span>
                    <Input
                        style="width: 80%"
                        type="number"
                        v-model="userInfo.age"
                        placeholder="请输入年龄"
                        clearable
                    />
                </li>
                <li class="list-item">
                    <span>性别：</span>
                    <Input style="width: 80%" v-model="userInfo.sex" placeholder="请输入性别" clearable />
                </li>
                <li class="list-item">
                    <span>手机号：</span>
                    <Input
                        style="width: 80%"
                        type="number"
                        v-model="userInfo.phone"
                        placeholder="请输入手机号"
                        clearable
                    />
                </li>
                <li class="list-item">
                    <span>地址：</span>
                    <Input
                        style="width: 80%"
                        type="text"
                        v-model="userInfo.address"
                        placeholder="请输入地址"
                        clearable
                    />
                </li>
            </ul>
            <div class="btn">
                <Button type="primary" @click="editUserInfo">修改</Button>
                <Button type="primary" @click="goBack">取消</Button>
            </div>
        </Card>
    </div>
</template>

<script>
import api from "@/api/index.js";
export default {
    data() {
        return {
            userInfo: {}
        };
    },
    created() {
        const username = sessionStorage.getItem("username");
        if (!username) return;
        api.getUserByUserName(username).then(res => {
            this.userInfo = res.data;
        });
    },
    methods: {
        editUserInfo() {
            this.$set(this.userInfo, "username", this.username);
            api.updateUser(this.username, this.userInfo).then(res => {
                if (res.data.ok === 1) {
                    this.$Message.success("修改成功");
                } else {
                    this.$Message.success("修改失败");
                }
            });
            this.goBack();
        },
        goBack() {
            this.$router.go(-1);
        }
    },
    computed: {
        username() {
            return this.$store.state.user.username;
        }
    }
};
</script>

<style scoped>
.info-wrap {
    display: flex;
    justify-content: center;
    padding: 10px;
}
.info-card {
    width: 350px;
}
.list-item {
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.btn {
    margin: 10px;
    display: flex;
    justify-content: space-between;
}
</style>
