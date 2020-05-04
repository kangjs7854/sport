import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ViewUI from "view-design";
import Viewer from "v-viewer";
import { Carousel, CarouselItem } from "element-ui";
import "./util/rem";


import "view-design/dist/styles/iview.css";
import "viewerjs/dist/viewer.css";

Vue.config.productionTip = false;


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
