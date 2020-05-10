const Model = require("../model");
const { Post } = Model;

const postController = {
  all(req, res) {
    Post.find({}).exec((err, post) => res.json(post));
  },
  byId(req, res) {
    Post.findOne({ _id: req.params.id }).exec((err, post) => res.json(post));
  },
  create(req, res) {
    const newPost = new Post(req.body);
    newPost.save((err, saved) => {
      Post.findOne({ _id: newPost._id }).exec((err, post) => {
        res.json(post);
      });
    });
  },
  update(req, res) {
    Post.updateOne({ _id: req.params.id }, { ...req.body }, (err, updated) => {
      res.json(updated);
    });
  },
  remove(req, res) {
    const idParams = req.params.id;
    Post.findOne({ _id: idParams }).remove((err, removed) => {
      res.json(idParams);
    });
  },
};
module.exports = postController;
