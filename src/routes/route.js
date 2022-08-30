const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const { authenticate, authorise } = require('../middleware/auth');


router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", authenticate, authorise, userController.getUserData)

router.put("/users/:userId", authenticate, authorise, userController.updateUser)

router.delete("/users/:userId", authenticate, authorise, userController.deleteData)

module.exports = router;