const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    }
});

module.exports = cart = mongoose.model('shopping_cart',cartSchema);