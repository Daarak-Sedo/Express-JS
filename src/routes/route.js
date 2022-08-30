const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const  { tokenCheck, authorisationCheck } = require('../middlewares/auth');


router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", tokenCheck, authorisationCheck, userController.getUserData)

router.put("/users/:userId", tokenCheck, authorisationCheck, userController.updateUser)

router.delete("/users/:userId", tokenCheck, authorisationCheck, userController.deleteData)

module.exports = router;