const mongoose = require('mongoose');

const userDetailSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }]
});

module.exports = mongoose.model('users', userDetailSchema);