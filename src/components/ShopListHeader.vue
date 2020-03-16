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
      <CarouselItem v-for="(item,index) in imgs " :key="index">
        <img :src="item" width="100%" />
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
      },
      imgs: [
        "http://shihuo.hupucdn.com/youhuiIndex/202003/0309/acf41b50c26a94a5b8cb39e50e26e06d.jpg",
        "http://shihuo.hupucdn.com/youhuiIndex/202002/1709/b3d0ef903d979fc0c2b734f036dc6029.png",
        "http://shihuo.hupucdn.com/youhuiIndex/201908/2009/82f18e529e6d7ce56721f5e91ee57d61.png",
        " http://shihuo.hupucdn.com/youhuiIndex/202002/0318/72d3a563f8dcac2724daff7304570ea7.jpg"
      ],
      
    };
  },
  mounted(){
    this.imgs.sort(()=>0.5-Math.random())
  }
};
</script>

<style scoped>
</style>