const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    orderId: String,
    product: String,
    quantity: Number,
    category: String,
    payment: Number,
    paymentstatus: String,
    orderstatus: String,
})

module.exports = mongoose.model("Orders", OrderSchema);