import Vue from "vue";
import VueRouter from "vue-router";

// import IndexPage from "../views/IndexPage.vue";
const IndexPage = ()=>import("../views/IndexPage.vue")
const GamePage = ()=>import("../views/GamePage.vue")
const JRsPage = ()=>import("../views/JRsPage.vue")
const VideoPage = ()=>import("../views/VideoPage.vue")
const ShopPage = ()=>import("../views/ShopPage.vue")
const LoginPage = ()=>import("../views/LoginPage.vue")
const Register = ()=>import("../views/Register.vue")
const InfoPage = ()=>import("../views/InfoPage.vue")

const NewsList = ()=>import("../components/NewsList.vue")
const NewsDetail = ()=>import("../components/NewsDetail.vue")
const HupuStreet = ()=>import("../components/HupuStreet.vue")
const HupuStreetDetail = ()=>import("../components/HupuStreetDetail.vue")
const HupuSelfie = ()=>import("../components/HupuSelfie.vue")
const GameNewsList = ()=>import("../components/GameNewsList.vue")
const GameNewsDetail = ()=>import("../components/GameNewsDetail.vue")
const ShopList = ()=>import("../components/ShopList.vue")
const ShopInfo = ()=>import("../components/ShopInfo.vue")
const ShopCart = ()=>import("../components/ShopCart.vue")
const ShopOrder = ()=>import("../components/ShopOrder.vue")


Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path: "/",
    component: IndexPage,
    children: [
      {
        path: "/",
        component: NewsList
      },
      {
        path: "/detail",
        component: NewsDetail
      }
    ]
  },
  {
    path: "/game",
    component: GamePage,
    children: [
      {
        path: "/game",
        component: GameNewsList
      },
      {
        path: "/game/detail",
        name: "gameDetail",
        component: GameNewsDetail
      },
      {
        path: "/game/video",
        component: VideoPage
      }
    ]
  },
  {
    path: "/jrs",
    component: JRsPage,
    children: [
      {
        path: "/jrs",
        component: HupuStreet
      },
      {
        path: "/jrs/selfie",
        component: HupuSelfie
      },
      {
        path: "/jrs/detail",
        name: "jrsdetail",
        component: HupuStreetDetail
      }
    ]
  },
  {
    path: "/shop",
    component: ShopPage,
    children: [
      {
        path:'/shop',
        component:ShopList
      },
      {
        path: "/shop/info",
        name: "shopinfo",
        component: ShopInfo,
      
      },
      {
        path:'/shop/cart',
        name:'shopcart',
        component:ShopCart
      },{
        path:'/shop/order',
        component:ShopOrder
      }
    ]
  },
 
  {
    path: "/login",
    component: LoginPage
  },
  {
    path: "/register",
    component: Register
  },

  {
    path: "/info",
    component: InfoPage
  },
  {
    path: "*",
    redirect: "/"
  }
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
  routes
});

export default router;
