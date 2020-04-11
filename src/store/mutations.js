const mutations = {
  ADD_LOGIN_USER(state, payload) {
    state.loginUser.push(payload);
    localStorage.setItem("loginUser", JSON.stringify(state.loginUser));
  },
  GET_LOGIN_USER_FROM_LOCAL(state) {
    let temp = localStorage.getItem("loginUser");
    if (temp) {
      state.loginUser = JSON.parse(temp);
    }
  },
  LOGIN(state, payload) {
    state.loginInfo = payload;
  },
  LOGOUT(state) {
    state.loginInfo.username = "";
    state.loginInfo.password = "";
    state.isLogin = false;
    localStorage.setItem("loginInfo", JSON.stringify(state.loginInfo));
  },
  UPDATA_LOGIN_INFO(state, payload) {
    Object.assign(state.loginInfo, payload);
    state.isLogin = true;
    localStorage.setItem("loginInfo", JSON.stringify(state.loginInfo));
  },
  GET_LOGIN_INFO_FROM_LOCAL(state) {
    let temp = localStorage.getItem("loginInfo");
    if (temp) {
      state.loginInfo = JSON.parse(temp);
      state.isLogin = true;
    }
  },
  //尺码选择抽屉
  OPEN_SIZE_DRAWER(state) {
    state.isOpenSizeDrawer = true;
  },
  CLOSE_SIZE_DRAWER(state) {
    state.isOpenSizeDrawer = false;
  },
  EDIT_USER_INFO(state, payload) {
    state.userInfo = payload;
  },
  //后台get请求全部商品
  ALL_PRODUCTS(state) {
    state.showLoader = true;
  },
  ALL_PRODUCTS_SUCCESS(state, payload) {
    const { products } = payload;

    state.showLoader = false;
    state.products = products;
    state.products.forEach(
      (item) => (item.hot = Math.floor(Math.random() * 100000))
    );
  },
  ALL_PRODUCTS_ERROR(state) {
    state.products.forEach(
      (item) => (item.hot = Math.floor(Math.random() * 100000))
    );
  },
  SELECTE_PRODUCT(state, payload) {
    console.log("进入商品详情：", payload);
    state.product = payload;
  },
  //后台get请求单个商品
  PRODUCT_BY_ID(state) {
    state.showLoader = true;
  },
  PRODUCT_BY_ID_SUCCESS(state, payload) {
    state.showLoader = false;

    const { product } = payload;
    state.product = product;
  },

  //购物车
  ADD_TO_CART(state, payload) {
    console.log("添加到购物车的商品：", payload);
    state.cart.push(payload);
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  REMOVE_FROM_CART(state, payload) {
    state.cart = state.cart.filter((item) => !payload.includes(item));
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },
  GET_CART_FROM_LOCAL(state) {
    let temp = localStorage.getItem("cart");
    if (temp) {
      state.cart = JSON.parse(temp);
    }
  },
  //订单
  ADD_TO_ORDERS(state, payload) {
    state.orders.push(payload);
    state.cart = state.cart.filter((item) => !payload.includes(item));
    localStorage.setItem("orders", JSON.stringify(state.orders));
  },
  GET_ORDERS_FROM_LOCAL(state) {
    let temp = localStorage.getItem("orders");
    if (temp) {
      state.orders = JSON.parse(temp);
    }
  },
  REMOVE_FROM_ORDERS(state, payload) {
    state.orders = state.orders.filter((item) => item !== payload);
    localStorage.setItem("orders", JSON.stringify(state.orders));
  },
  /* 管理员页面 */
  //后台post请求增加商品
  ADD_PRODUCT(state, payload) {
    const { product } = payload;
    console.log(product);

    // state.products.push(payload);
  },
  //后台delet请求删除商品
  REMOVE_PRODUCT(state, payload) {
    const { productId } = payload;
    state.products = state.products.filter(
      (product) => product._id !== productId
    );
  },
  //获取管理员页面新闻和社区内容
  ALL_JRS_MSG(state, payload) {
    const { data } = payload;
    data.forEach((item, index) => {
      item.id = "5e746b9f55b2481d8c0064f1" + index;
    });
    state.jrsMsg = data;
  },
  REMOVE_JRS_MSG(state, payload) {
    const { id } = payload;
    state.jrsMsg = state.jrsMsg.filter((item) => item.id != id);
  },
  ALL_JRS_NEWS(state, payload) {
    const { data } = payload;
    data.forEach((item, index) => {
      item.id = "5e746b9f55b2481d8c0064f1" + index;
    });
    state.jrsNews = data;
  },
  REMOVE_JRS_NEWS(state, payload) {
    const { id } = payload;
    state.jrsNews = state.jrsNews.filter((item) => item.id != id);
  },
};

export default mutations;
