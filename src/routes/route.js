const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const {authenticate,authorise}=require("../middleware/auth")
const jwt = require("jsonwebtoken");

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",authenticate,authorise, userController.getUserData)

router.post("/users/:userId/posts",authenticate,authorise, userController.postMessage)

router.put("/users/:userId",authenticate,authorise ,userController.updateUser)

router.delete('/users/:userId', authenticate,authorise,userController.deleteUser)

module.exports = router;