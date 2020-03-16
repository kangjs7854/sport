const mutations = {
  login(state, payload) {
    Object.assign(state, payload);
  },
  logout(state) {
    state.isLogin = false;
    state.username = "";
  },
  updateUsername(state, username) {
    state.username = username;
  },
  saveUserInfo(state, payload) {
    state.userInfo = payload;
  },
  //尺码选择抽屉
  openSizeDrawer(state) {
    state.isOpenSizeDrawer = true;
  },
  closeSizeDrawer(state) {
    state.isOpenSizeDrawer = false;
  },
  //shopinfo页面的数据
  setShoe(state, shoe) {
    state.shoe = shoe;
  },
  //购物车订单详情
  setShoeInfos(state,shoeInfo){
    state.shoeInfos.push(shoeInfo)
  },
  //订单
  setOrders(state,data){
    state.orders = [...state.orders,...data]
  }
};

export default mutations;
