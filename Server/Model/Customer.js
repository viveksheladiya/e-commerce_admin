const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    cid:String,
    name: String,
    email: String,
    phone: String,
    address: String,
    image:String,
})

module.exports = mongoose.model('customers', CustomerSchema);