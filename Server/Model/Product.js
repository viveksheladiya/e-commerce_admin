const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    title: String,
    brand: String,
    category: String,
    price: Number,
    image: String,
})

module.exports = mongoose.model('products', ProductSchema);