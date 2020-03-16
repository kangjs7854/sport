<template>
  <div>
    <Upload multiple type="drag" action="/upload/posts/" :on-success="uploadSuccess">
      <div style="padding: 20px 0">
        <Avatar size="60">
          <img :src="avatar" />
        </Avatar>
      </div>
    </Upload>
    <ul>
      <li class="list-item">
        <span>用户名：</span>
        <Input style="width: 80%" type="text" v-model="user" clearable />
      </li>
      <li class="list-item">
        <span>手机号：</span>
        <Input style="width: 80%" type="number" v-model="phone" placeholder="请输入手机号" clearable />
      </li>
      <li class="list-item">
        <span>邮箱：</span>
        <Input style="width: 80%" type="email" v-model="email" placeholder="请输入邮箱号" clearable />
      </li>
      <li class="list-item">
        <span>性别：</span>
        <Input
          style="width: 80%"
          type="text"
          v-model="sex"
          placeholder="请输入性别"
          @on-focus="visible=true"
          clearable
        />
      </li>
      <!-- <li class="list-item">
        <span>地址：</span>
        <Input style="width: 80%" type="text" v-model="user" clearable />
      </li> -->
      <li class="list-item">
        <span>地址：</span>
        <Input style="width: 80%" type="text" v-model="address" placeholder="请输入地址" clearable />
      </li>
    </ul>
    <div class="btn">
      <Button type="primary" long @click="edit">修改</Button>
    </div>
    <Drawer
      placement="bottom"
      :closable="false"
      @close="visible = false"
      :visible="visible"
      height="180px"
    >
      <div class="sex-drawer">
        <Button type="text" long @click=" sex ='男',visible = false">男</Button>
      </div>
      <Divider />
      <div class="sex-drawer">
        <Button type="text" long @click=" sex ='女',visible = false">女</Button>
      </div>
    </Drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VDistpicker from "v-distpicker";
export default {
  data() {
    return {
      gender: ["男", "女"],
      user: "666",
      phone: "",
      email: "",
      address: "",
      sex: "",
      visible: false,
      select: { province: "广东省", city: "广州市", area: "海珠区" }
    };
  },
  computed: {
    ...mapState(["username", "userInfo", "avatar"])
  },
  components: {
    VDistpicker
  },
  mounted() {
    this.user = this.username;
    let res = JSON.parse(localStorage.getItem("user"));
    this.$store.commit("saveUserInfo", res);
    console.log(res);
    this.phone = this.userInfo.phone;
    this.email = this.userInfo.email;
    this.sex = this.userInfo.sex;
    this.address = this.userInfo.address.slice(9);
  },
  methods: {
    edit() {
      if (
        !this.user ||
        !this.phone ||
        !this.email ||
        !this.address ||
        !this.sex
      )
        return this.$Message.warning("不能为空");
      this.$store.commit("updateUsername", this.user);
      let { province, city, area } = this.select;
      let user = {
        user: this.user,
        phone: this.phone,
        email: this.email,
        sex: this.sex,
        address: province + city + area + this.address
      };
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
    },
    uploadSuccess(response, file, fileList) {
      console.log(response);
      console.log(file);
      console.log(fileList);
      // this.picurl = response.data[0];
    }
  }
};
</script>

<style scoped>
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.list-item {
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btn {
  padding: 10px;
}
.sex-drawer {
  display: flex;
  justify-content: center;
}
</style>