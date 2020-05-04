<template>
  <div class="btn-nav-wrap">
    <Menu class="btm-nav" mode="horizontal" theme="light" active-name="0">
      <MenuItem
        v-for="(item, index) in channels"
        :key="index"
        :name="index"
        :to="item.router"
      >
        <Icon :type="item.icon" size="16" />{{ item.name }}
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      channels: [
        { name: "推荐", router: "/", icon: "md-home" },
        { name: "赛事", router: "/game", icon: "md-basketball" },
        { name: "社区", router: "/hupu", icon: "ios-chatbubbles" },
        { name: "装备", router: "/product", icon: "ios-cart" }
      ]
    };
  }
};
</script>

<style scoped>
.btm-nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.btm-nav li {
  padding: 0;
  margin: 0;
}
.btn-nav-wrap {
  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
}
</style>
