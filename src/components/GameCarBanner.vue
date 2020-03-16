<template>
  <div>
    <Carousel
      v-model="value3"
      :autoplay="setting.autoplay"
      :autoplay-speed="setting.autoplaySpeed"
      :dots="setting.dots"
      :radius-dot="setting.radiusDot"
      :trigger="setting.trigger"
      :arrow="setting.arrow"
    >
      <CarouselItem v-for="(item,index) in 3" :key="index">
        <div ref="card" class="card">
          <Card class="card-item" style="width:160px" v-for="(item,index) in 8" :key="index">
            <div class="title">
              <span>NBA常规赛</span>
              <span>直播中</span>
            </div>
            <div class="content">
              <div class="content-item">
                <span>马刺</span>
                <span>19</span>
              </div>
              <div class="content-item">
                <span>黄蜂</span>
                <span>36</span>
              </div>
            </div>
            <div class="footer">
              <Icon type="ios-play" />
              <span>集锦</span>
            </div>
          </Card>
        </div>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value3: 0,
      setting: {
        autoplay: false,
        autoplaySpeed: 2000,
        dots: "inside",
        radiusDot: false,
        trigger: "click",
        arrow: "hover"
      }
    };
  }
};
</script>

<style scoped>

.card {
  display: flex;
  margin: 10px 0;
}
.card-item {
  margin: 5px;
  border-top: 3px #f15b5b solid;
  flex-shrink: 0;
}
.title {
  display: flex;
  justify-content: space-between;
  color: #f15b5b;
}
.content {
  padding: 5px 0;
}
.content-item {
  display: flex;
  justify-content: space-between;
}
.footer {
  display: flex;
  justify-content: center;
  color: #f15b5b;
  align-items: center;
}
.left,
.right {
  height: 120px;
  width: 20px;
  background-color: #dcdcdc;
  margin: 10px 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  z-index: 10;
}
.left:hover,
.right:hover {
  background-color: #408ed6;
}
</style>