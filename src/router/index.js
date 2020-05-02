import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    component: () => import("@/views/user/index.vue"),
    children: [
      {
        path: "/product",
        component: () => import("../views/product/index.vue"),
      },
      {
        path: "/product/detail",
        component: () => import("../views/product/detail.vue"),
      },
      {
        path: "/cart",
        component: () => import("../views/cart/index.vue"),
      },
      {
        path: "/order",
        component: () => import("../views/order/index.vue"),
      },
      {
        path: "/login",
        component: () => import("../views/login/index.vue"),
      },
      {
        path: "/register",
        component: () => import("../views/register/index.vue"),
      },
      {
        path: "/",
        component: () => import("../views/news/index.vue"),
      },
      {
        path: "/news/detail",
        component: () => import("../views/news/detail.vue"),
      },
      {
        path: "/game",
        component: () => import("@/views/game/index.vue"),
      },
      {
        path: "/game/detail",
        name: "gameDetail",
        component: () => import("@/views/game/detail.vue"),
      },
      {
        path: "/hupu",
        component: () => import("@/views/hupu/index.vue"),
      },
      {
        path: "/hupu/detail",
        name: "hupudetail",
        component: () => import("@/views/hupu/detail.vue"),
      },
      {
        path: "/info",
        component: () => import("@/views/info/index.vue"),
      },

      // {
      //   path: "*",
      //   redirect: "/news",
      // },
    ],
  },
  {
    path: "/admin",
    component: () => import("@/views/admin/index.vue"),
    children: [
      {
        path: "/admin/product",
        component: () => import("../views/admin/product/index.vue"),
      },
      {
        path: "/admin/addproduct",
        component: () => import("../views/admin/product/addProduct.vue"),
      },
      {
        path: "/admin/user",
        component: () => import("../views/admin/user/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
