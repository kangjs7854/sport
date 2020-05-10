const mongoose = require("mongoose");
//Schema 接收一个 JavaScript 对象来描述我们需要的数据结构和对应的数据类型
const Schema = mongoose.Schema;
const model = mongoose.model.bind(mongoose);
//ObjectId 是一个特殊的数据类型，我们用它来定义我们的单个 MongoDB 文档的主键，
//用于标志存储数据的唯一性。
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = Schema({
  id: ObjectId,
  name: String,
  image: String,
  price: Number,
  description: String,
  hot:Number,
  manufacturer: { type: ObjectId, ref: "Manufacturer" },
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: {
    type:String,
    unique:true
  },
});

const userSchema = Schema({
  id: ObjectId,
  username: {
    type: String,
    unique: true,
  },
  password: Number,
  age: Number,
  sex: String,
  phone: Number,
  address: String,
  avatar: String,
});

const postSchema = Schema({
  id:ObjectId,
  title:String,
  content:String,
  // username:
})

const Product = model("Product", productSchema);
const Manufacturer = model("Manufacturer", manufacturerSchema);
const User = model("User", userSchema);

module.exports = { Product, Manufacturer, User };
