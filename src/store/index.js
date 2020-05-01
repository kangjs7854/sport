// import Vue from "vue";
// import Vuex from "vuex";
// import state from "../store/state";
// import mutations from "../store/mutations";
// import actions from "../store/actions";
// import getters from "../store/getters";
// Vue.use(Vuex);

// export default new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions,
//   modules: {}
// });


import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import product from './modules/product';

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
        user,
        product
    }
})
