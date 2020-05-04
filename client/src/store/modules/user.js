const state = {
  isLogin: false,
  username: "",
  sex: "",
  age: "",
  phone: "",
  address: "",
};

const mutations = {
  LOGIN(state, params) {
    state.isLogin = true;
    state.username = params;
  },
  LOGOUT(state) {
    state.isLogin = false;
    state.username = "";
  },
};

export default {
  state,
  mutations,
};
