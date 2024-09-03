const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
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

const Events = mongoose.model('Events', eventSchema);

module.exports = Events;