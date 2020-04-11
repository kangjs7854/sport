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
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$video = Video;
Vue.prototype.$echarts = echarts

Vue.use(ViewUI);
Vue.use(Carousel);
Vue.use(CarouselItem);

//Vue.use(Viewer) 默认配置写法
Vue.use(Viewer, {
  defaultOptions: {
    zIndex: 9999
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/registerServiceWorker.js", { scope: "/" })
      .then(function(registration) {
        // 注册成功
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      })
      .catch(function(err) {
        // 注册失败:(
        console.log("ServiceWorker registration failed: ", err);
      });
  });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
