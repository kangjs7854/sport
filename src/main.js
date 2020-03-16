import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
// import MuseUI from 'muse-ui';
import ViewUI from 'view-design';
import Viewer from 'v-viewer'
import Video from 'video.js'
import VDistpicker from 'v-distpicker'
import './rem';

// import 'muse-ui/dist/muse-ui.css';
import 'view-design/dist/styles/iview.css';
import 'viewerjs/dist/viewer.css'
import 'video.js/dist/video-js.css'


Vue.component('v-distpicker', VDistpicker)


Vue.config.productionTip = false;

Vue.prototype.$axios = axios 
Vue.prototype.$video = Video

// Vue.use(MuseUI);
Vue.use(ViewUI);


//Vue.use(Viewer) 默认配置写法
Vue.use(Viewer, {
    defaultOptions: {
        zIndex: 9999
    }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
