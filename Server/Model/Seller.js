const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    sid: String,
    image:String,
})

module.exports = mongoose.model("seller", sellerSchema);