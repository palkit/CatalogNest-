const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: {
        type: String,
    },
    image: {
        type: String,
        default: null
    },
    price: {
        type: Number,
        default: 0
    }
})

const Products = mongoose.model('Products', ProductSchema);

module.exports = Products;