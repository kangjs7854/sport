const state = {
  isLogin: false,
  loginInfo: {
    //当前登录账号的信息
    username: "",
    password: ""
  },
  loginUser: [
    {
      username: "admin",
      password: "admin"
    }
  ], //注册过的用户信息
  isOpenSizeDrawer: false, //购物车尺码选择抽屉
  userInfo: {
    //该用户的具体信息
    username: "kang",
    phone: 15815841479,
    address: "仲恺路500号"
  },
  //收藏的商品
  collects: [],
  // bought items
  cart: [],
  //订单
  orders: [],
  // ajax loader
  showLoader: false,
  // selected product
  product: {},
  // all products
  products: [
    {
      _id: "5e746b9f55b2481d8c0064f1",
      name: "耐克AIR VAPORMAX FLYKNIT",
      description: "男子黑金气垫跑鞋AJ6900 AR6631 CU1926",
      image:
        "http://shihuo.hupucdn.com/Fu42hZ49Exv6qi80gMOLA9-MUT6s?imageView2/1/w/330/h/330",
      price: 385,
      manufacturer: "耐克"
    },
    {
      _id: "5e746d1b55b2481d8c0064f6",
      name: "三叶草 SAMBAROSE W",
      description: "复古 潮流 松糕鞋",
      image:
        "http://shihuo.hupucdn.com/FvOGenUcnfnyFcP8uELN2bUZbsI4?imageView2/1/w/330/h/330",
      price: 368,
      manufacturer: "阿迪达斯"
    },
    {
      _id: "5e746da755b2481d8c0064f8",
      name: "李宁2020新款937王朝篮球鞋",
      description: "AGBQ027",
      image:
        "http://shihuo.hupucdn.com/FjPaiCg07NWPNUr-arCZzkGh-KZQ?imageView2/1/w/330/h/330",
      price: 329,
      manufacturer: "李宁"
    },
    {
      _id: "5e746ef255b2481d8c0064fe",
      name: "库里 SC30",
      description: "ZER0运动篮球鞋",
      image:
        "http://shihuo.hupucdn.com/FiNN0x9eZIuyUCKDW1PWKE6qEF02?imageView2/1/w/330/h/330",
      price: 429,
      manufacturer: "安德玛"
    },
    {
      _id: "5e746e6e55b2481d8c0064fb",
      name: "安踏ANTA 汤普森四代 KT4",
      description: "闪能科技 缓震篮球鞋 11921102-1/4/2",
      image:
        "http://shihuo.hupucdn.com/FjvL05cqguKwddCgWHmatDKcFUv_?imageView2/1/w/330/h/330",
      price: 308,
      manufacturer: "安踏"
    }
  ],
  //all manufacturers
  manufacturers: [],
  jrsMsg: [],
  jrsNews: []
};
export default state;
