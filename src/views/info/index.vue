<template>
  <div class="info-wrap">
    <Card class="info-card">
      <ul>
        <li class="list-item">
          <span>用户名：</span>
          <Input
            style="width: 80%"
            type="text"
            v-model="userInfo.username"
            clearable
          />
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
            placeholder="placement请输入地址"
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
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    editUserInfo() {
      this.$store.commit("EDIT_USER_INFO", this.userInfo);
      this.$Message.success("修改成功");
      this.goBack();
    },
    goBack() {
      this.$router.go(-1);
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
