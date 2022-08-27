const mongoose = require('mongoose');
const Id = mongoose.Schema.Types.ObjectId


const orderSchema = new mongoose.Schema({
    userId: {
        type: Id,
        required: true,
        ref: "User"
    },
    productId: {
        type: Id,
        required: true,
        ref: "Product"
    },
    amount: Number,
    isFreeAppUser: {
        type: Boolean,
        default: false
    },
    date: String
}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema)
