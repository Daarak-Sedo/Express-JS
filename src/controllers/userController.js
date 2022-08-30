const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const tokenCheck = require("../middlewares/auth");


const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length > 0) {
      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData })
    }

    else { res.status(400).send("BAD REQUEST") }
  }
  catch (error) {
    res.status(500).send({ msg: "Error", error: err.message })
  }
};


const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(400).send({
        status: false,
        msg: "username or the password is not corerct",
      });
    let token = jwt.sign(
      { userId: user._id.toString(), batch: "thorium", organisation: "FUnctionUp", }, "functionup-thorium");
    res.status(201).send({ status: true, data: token });
  }
  catch (error) {
    res.status(500).send({ msg: "Error", error: err.message })
  }
};


const getUserData = async function (req, res) {
  try {
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
      return res.status(403).send({ status: false, msg: "token is invalid" });

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(400).send({ status: false, msg: "No such user exists" });

    res.status(200).send({ status: true, data: userDetails });
  }
  catch (error) {
    res.status(500).send({ msg: "Error", error: err.message })
  }
};


const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);

    if (!user) {
      return res.status(400).send("No such user exists");
    }

    let userData = req.body;
    if (Object.keys(userData).length = 0) {
      res.status(400).send("BAD REQUEST")
    }
    else {
      let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { $new: true });
      res.status(201).send({ data: updatedUser });
    }
  }
  catch {
    res.status(500).send({ msg: "Error", error: err.message })
  }

};


const deleteData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } }, { $new: true });
    res.status(201).send({ data: deletedUser });
  }
  catch (error) {
    res.status(500).send({ msg: "Error", error: err.message })
  }
};


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteData = deleteData;
