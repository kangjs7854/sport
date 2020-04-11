import axios from "axios";
import qs from "qs";

const API_BASE = "http://localhost:3000/api/v1";

const actions = {
  //user
  allProducts({ commit }) {
    commit("ALL_PRODUCTS");
    axios
      .get(`${API_BASE}/products`)
      .then((response) => {
        console.log("response", response);
        commit("ALL_PRODUCTS_SUCCESS", {
          products: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        commit("ALL_PRODUCTS_ERROR");
      });
  },
  productById({ commit }, payload) {
    commit("PRODUCT_BY_ID");

    const { productId } = payload;
    axios
      .get(`${API_BASE}/products/${productId}`)
      .then((response) => {
        commit("PRODUCT_BY_ID_SUCCESS", {
          product: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  //admin 管理员页面
  addProduct({ commit }, payload) {
    const { product } = payload;
    console.log(qs.parse(product));

    axios.post(`${API_BASE}/products`, product).then((res) => {
      console.log(res);

      // commit("ADD_PRODUCT", {
      //   product: res.data
      // });
    });
  },
  removeProduct({ commit }, payload) {
    const { productId } = payload;
    axios
      .delete(`${API_BASE}/products/${productId}`)
      .then(() => {
        // 返回 productId，用于删除本地对应的商品
        commit("REMOVE_PRODUCT", {
          productId,
        });
      })
      .catch(() => {
        commit("REMOVE_PRODUCT", {
          productId,
        });
      });
  },
  allJrsMsg({ commit }) {
    axios
      .get(`bxj2.json`)
      .then((response) => {
        commit("ALL_JRS_MSG", {
          data: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
  allJrsNews({ commit }) {
    axios
      .get(`hupunews.json`)
      .then((response) => {
        commit("ALL_JRS_NEWS", {
          data: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default actions;
