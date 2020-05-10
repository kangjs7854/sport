import axios from "axios";
const newsApi =
  "/api/nc/article/headline/data/10-20.html?from=toutiao&passport=&devId=OPdeGFsVSojY0ILFe6009pLR%2FMsg7TLJv5TjaQQ6Hpjxd%2BaWU4dx4OOCg2vE3noj&size=20&version=5.5.3&spever=false&net=wifi&lat=&lon=&ts=1456985878&sign=oDwq9mBweKUtUuiS%2FPvB015PyTDKHSxuyuVq2076XQB48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore";

let API_BASE;
if (process.env.NODE_ENV == "development") {
  API_BASE = "http://localhost:3000/api/v1";
} else {
  API_BASE = "/api/v1";
}
const manufacturersApi = API_BASE+'/manufacturers'
const productApi = API_BASE + "/products";
const userApi = API_BASE + "/user";
const postApi = API_BASE + '/post'

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
  getManufacturers(){
    return axios.get(manufacturersApi)
  },
  addManufacturers(parms){
    return axios.post(manufacturersApi,parms)
  },
  deleteManufacturers(manufacturerId){
    return axios.delete(API_BASE + `/manufacturers/${manufacturerId}`)
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
  updateUser(username, parms) {
    return axios.put(API_BASE + `/user/${username}`, parms);
  },
  deleteUser(userId) {
    return axios.delete(API_BASE + `/user/${userId}`);
  },
  getPost(){
    return axios.get(postApi)
  },
  getPostById(postId){
    return axios.get(API_BASE + `/post/${postId}`)
  },
  addPost(parms){
    return axios.post(postApi,parms)
  },
  updatePost(postId,params){
    return axios.put(API_BASE+`/post/${postId}`,params)
  },
  deletePost(postId){
    return axios.delete(API_BASE+`/post/${postId}`)
  }
};
