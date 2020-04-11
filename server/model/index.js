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
  manufacturer: { type: ObjectId, ref: "Manufacturer" }
});

const manufacturerSchema = Schema({
  id: ObjectId,
  name: String
});

const Product = model('Product', productSchema);
const Manufacturer = model('Manufacturer', manufacturerSchema);

module.exports = { Product, Manufacturer };