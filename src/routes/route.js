const express = require('express');
const router = express.Router();

const CreateUser = require("../controllers/userController");
const CreateProduct = require("../controllers/productController");
const CreateOrder = require("../controllers/orderController");
const Middleware = require('../middlewares/commonMiddlewares');

router.post("/createUser", Middleware.middleware,CreateUser.createUser);
router.post("/createProduct",CreateProduct.createProduct);
router.post("/createOrder", Middleware.middleware,CreateOrder.createOrder);


module.exports = router;
