const express = require("express");
const router = express.Router();

const productController = require("../../controllers/product");
const manufacturerController = require("../../controllers/manufacturer");
const userController = require("../../controllers/user");

//获取所有的制造商（manufacturers）
router.get("/manufacturers", manufacturerController.all);
//获取单个制造商，这里 :id 代表动态路由，用于匹配任意字符
router.get("/manufacturers/:id", manufacturerController.byId);
//用户创建单个制造商
router.post("/manufacturers", manufacturerController.create);
//用于修改单个制造商
router.put("/manufacturers/:id", manufacturerController.update);
//用于删除单个制造商
router.delete("/manufacturers/:id", manufacturerController.remove);

//获取所有的产商品（products）
router.get("/products", productController.all);
//获取单个商品，这里 :id 代表动态路由，用于匹配任意字符
router.get("/products/:id", productController.byId);
//用户创建单个商品
router.post("/products", productController.create);
// 用于修改单个商品
router.put("/products/:id", productController.update);
//用于删除单个商品
router.delete("/products/:id", productController.remove);

router.get("/user", userController.all);
router.get("/user/:username", userController.byUserName);
router.post("/user", userController.create);
router.put("/user/:username", userController.update);
router.delete("/user/:id", userController.remove);

module.exports = router;
