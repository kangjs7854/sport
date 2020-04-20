import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import ViewUI from "view-design";
import Viewer from "v-viewer";
import Video from "video.js";
import echarts from 'echarts'
import { Carousel, CarouselItem } from "element-ui";
import "./rem";

import "view-design/dist/styles/iview.css";
import "viewerjs/dist/viewer.css";
import "video.js/dist/video-js.css";

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$video = Video;

Vue.use(ViewUI);
Vue.use(Carousel);
Vue.use(CarouselItem);

//Vue.use(Viewer) 默认配置写法
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
