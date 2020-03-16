<template>
  <div class="game-warp">
    <Menu mode="horizontal"  active-name="1">
      <MenuItem name="1" to="/game"> 
        NBA
      </MenuItem>
      <MenuItem name="2" to="/game/video">
        视频
      </MenuItem>
    </Menu>
    <router-view />
    <BackTop :bottom="70"></BackTop>
  </div>
</template>

<script>
export default {
  methods: {
    linkto() {
      console.log(111);
    }
  }
};
</script>

<style scoped>
.game-warp {
  padding: 20px;
}
</style>