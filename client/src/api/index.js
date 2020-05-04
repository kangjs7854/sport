import axios from "axios";
const newsApi =
  "/api/nc/article/headline/data/10-20.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore";

let API_BASE;
if (process.env.NODE_ENV == "development") {
  console.log("这是开发环境");
  API_BASE = "http://localhost:3000/api/v1";
} else {
  console.log("产品环境");
  API_BASE = "/api/v1";
}
const productApi = API_BASE + "/products";
const userApi = API_BASE + "/user";
export default {
  getNews() {
    return axios.get(newsApi);
  },
  getNewsDetail(id) {
    return axios.get(`/api/nc/article/${id}/full.html`);
  },
  getGame() {
    return axios.get(`/hupunews.json`);
  },
  getJrs() {
    return axios.get(`/bxj2.json`);
  },
  getProducts() {
    return axios.get(productApi);
  },
  getProductById(productId) {
    return axios.get(API_BASE + `/products/${productId}`);
  },
  addProduct(parms) {
    return axios.post(productApi, parms);
  },
  deleteProduct(productId) {
    return axios.delete(API_BASE + `/products/${productId}`);
  },
  getUser() {
    return axios.get(userApi);
  },
  getUserByUserName(username) {
    return axios.get(API_BASE + `/user/${username}`);
  },
  addUser(parms) {
    return axios.post(userApi, parms);
  },
  updateUser(username, pamrs) {
    return axios.put(API_BASE + `/user/${username}`, pamrs);
  },
  deleteUser(userId) {
    return axios.delete(API_BASE + `/user/${userId}`);
  },
};
