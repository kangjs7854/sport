const Model = require("../model");
const { User } = Model;

const userController = {
  all(req, res) {
    User.find({}).exec((err, user) => res.json(user));
  },
  byUserName(req, res) {
    User.findOne({ username: req.params.username }).exec((err, user) =>
      res.json(user)
    );
  },
  create(req, res) {
    const newUser = new User(req.body);

    newUser.save((err, saved) => {
      User.findOne({ _id: newUser._id }).exec((err, user) => res.json(user));
    });
  },
  update(req, res) {
    User.updateOne(
      { username: req.params.username },
      { ...req.body },
      (err, updated) => {
        res.json(updated);
      }
    );
  },
  remove(req, res) {
    const idParams = req.params.id;
    User.findOne({ _id: idParams }).remove((err, removed) =>
      res.json(idParams)
    );
  },
};

module.exports = userController;
