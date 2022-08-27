const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const mongoose = require('mongoose');

const createOrder = async function (req, res) {
    let data = req.body;
    let userId = data.userId;
    let productId = data.productId


    // for validation of data recived from body 
    if (!userId) {
        return res.send({ msg: "userId is mandatory in this request" })
    } else if (!productId) {
        return res.send("plese enter valid productId")
    }

    
    //  to get data (userid & productid ) from DB which was post from Body/frontend
    let UserId = await userModel.findById(userId)
    let ProductId = await productModel.findById(productId)


    // for validation  of recived id,s from D.B
    if (!UserId) {
        return res.send("this user id is not found in user database")
    } else if (!ProductId) {
        return res.send("this product id is not found in product database")
    } else { }


    if (UserId.balance >= ProductId.price) {

        await userModel.findOneAndUpdate({_id: userId },{ $set:{balance: UserId.balance - ProductId.price } })   // user document me net balance automatically update ho jayega 

        data.amount = ProductId.price;   //  hme jo amount body se mil rha h ,ab vo change hokar ProduId vale amount ke barbar/replace ho jayega....  Bcz Gitne ka Product hoga utna hi to Creat Order hoga...

        data.isFreeAppUser = req.headers.isFreeAppUser;   //isFreeAppUser value will be taken from custom Header (of Body/postman)

        let savedData = await orderModel.create(data)
        res.send({ msg: savedData })

    } else if (UserId.balance < ProductId.price) {
        res.send("Insufficient Balance!")
    }
}

module.exports.createOrder= createOrder;
