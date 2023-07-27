const mongoose = require('mongoose');

const userDetailSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

module.exports = mongoose.model("users",userDetailSchema);