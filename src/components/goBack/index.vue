<template>
  <div
    class="go-back"
    @click="$router.go(-1)"
    :class="{touch:isTouch}"
    @touchstart="isTouch = true"
    @touchend="isTouch=false"
  >
    <Icon class="icon" type="ios-arrow-back" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTouch: false
    };
  }
};
</script>
<style lang="less" scoped>
.go-back {
  height: 0.6rem;
  width: 0.6rem;
  background-color: #ccc;
  position: sticky;
  bottom: 1.2rem;
  opacity: 0.2;
  border-radius: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    font-size: 25px;
    color: #888;
  }
  &:hover {
    opacity: 0.8;
  }
  &.touch {
    opacity: 0.8;
  }
}
</style>