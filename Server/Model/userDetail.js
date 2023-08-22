const mongoose = require('mongoose');
const { Schema } = mongoose;

const userDetailSchema = new Schema({
    name: String,
    email: String,
    password: String,
    cart: [{ type: Schema.Types.ObjectId, ref: 'products' }]
});

module.exports = mongoose.model('users', userDetailSchema);