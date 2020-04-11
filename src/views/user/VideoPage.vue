<template>
  <div>
    <ul class="video-wrap">
      <li v-for="(item, index) in video" :key="index">
        <h3>{{ item.title }}</h3>
        <video
          id="my-player"
          class="video-js"
          controls
          preload="auto"
          :poster="item.img"
          fluid="true"
          data-setup="{}"
        >
          <source :src="item.video" type="video/mp4" />
        </video>
        <div>
          {{ item.name }}
          {{ item.time }}
        </div>
        <Divider />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      video: []
    };
  },

  mounted() {
    this.$axios.get("http://localhost:8080/video.json").then(res => {
      console.log(res.data.data);
      this.video = res.data.data;
    });
  }
};
</script>

<style scoped>
.video-wrap {
  padding: 10px;
}
</style>
