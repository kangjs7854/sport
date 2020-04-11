import Vue from "vue";
import VueRouter from "vue-router";

// import IndexPage from "../views/IndexPage.vue";
const IndexPage = () => import("../views/user/IndexPage.vue");
const GamePage = () => import("../views/user/GamePage.vue");
const JRsPage = () => import("../views/user/JRsPage.vue");
const VideoPage = () => import("../views/user/VideoPage.vue");
const ShopPage = () => import("../views/user/ShopPage.vue");
const LoginPage = () => import("../views/user/LoginPage.vue");
const Register = () => import("../views/user/Register.vue");
const InfoPage = () => import("../views/user/InfoPage.vue");
const UserPage = () => import("../views/user/UserPage.vue");

const AdminPage = () => import("../views/admin/AdminPage.vue");
const ProductInfo = () => import("../views/admin/ProductInfo.vue");
const ProductNew = () => import("../views/admin/ProductNew.vue");
const JrsMsgInfo = () => import("../views/admin/JrsMsgInfo.vue");
const JrsNewsInfo = () => import("../views/admin/JrsNewsInfo.vue");
const FlowInfo = () => import("../views/admin/FlowInfo.vue");

const NewsList = () => import("@/components/NewsList.vue");
const NewsDetail = () => import("@/components/NewsDetail.vue");
const HupuStreet = () => import("@/components/HupuStreet.vue");
const HupuStreetDetail = () => import("@/components/HupuStreetDetail.vue");
const HupuSelfie = () => import("@/components/HupuSelfie.vue");
const GameNewsList = () => import("@/components/GameNewsList.vue");
const GameNewsDetail = () => import("@/components/GameNewsDetail.vue");
const ShopList = () => import("@/components/ShopList.vue");
const ShopDetail = () => import("@/components/ShopDetail.vue");
const ShopCart = () => import("@/components/ShopCart.vue");
const ShopOrder = () => import("@/components/ShopOrder.vue");
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    component: UserPage,
    children: [
      {
        path: "/",
        component: IndexPage,
        children: [
          {
            path: "/",
            component: NewsList,
          },
          {
            path: "/detail",
            component: NewsDetail,
          },
        ],
      },
      {
        path: "/game",
        component: GamePage,
        children: [
          {
            path: "/game",
            component: GameNewsList,
          },
          {
            path: "/game/detail",
            name: "gameDetail",
            component: GameNewsDetail,
          },
          {
            path: "/game/video",
            component: VideoPage,
          },
        ],
      },
      {
        path: "/jrs",
        component: JRsPage,
        children: [
          {
            path: "/jrs",
            component: HupuStreet,
          },
          {
            path: "/jrs/selfie",
            component: HupuSelfie,
          },
          {
            path: "/jrs/detail",
            name: "jrsdetail",
            component: HupuStreetDetail,
          },
        ],
      },
      {
        path: "/shop",
        component: ShopPage,
        children: [
          {
            path: "/shop",
            component: ShopList,
          },
          {
            path: "/shop/detail",
            component: ShopDetail,
          },
          {
            path: "/shop/cart",
            name: "shopcart",
            component: ShopCart,
            meta: {
              requireLogin: true,
            },
          },
          {
            path: "/shop/order",
            component: ShopOrder,
            meta: {
              requireLogin: true,
            },
          },
        ],
      },
      {
        path: "/login",
        component: LoginPage,
      },
      {
        path: "/register",
        component: Register,
      },
      {
        path: "/info",
        component: InfoPage,
      },
    ],
  },
  {
    path: "/admin",
    component: AdminPage,
    children: [
      {
        path: "/admin",
        component: ProductInfo,
      },
      {
        path: "/admin/addProduct",
        component: ProductNew,
      },
      {
        path: "/admin/jrs",
        component: JrsMsgInfo,
      },
      {
        path: "/admin/news",
        component: JrsNewsInfo,
      },
      {
        path: "/admin/flow",
        component: FlowInfo,
      },
    ],
  },
  {
    path: "*",
    redirect: "/",
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes,
});

export default router;
