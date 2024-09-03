const express = require('express');
const router = express.Router();
const Products = require('../models/Products');
const upload = require('../config/multerconfig');
const { default: mongoose } = require('mongoose');

// get all Products sorted according to the start date such that the event with the earliest start date comes first
router.get('/', async (req, res) => {
    try {
        const products = await Products.find();
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }
});

// get details of a particular event by id
router.get('/:productId', async (req, res) => {
    try {
        const event = await Products.findById(req.params.eventId);
        //send both event and venue details
        res.json({products}); 
    } catch (err) {
        res.json({ message: err });
    }
});

// endpoint to create new event
router.post('/',upload.single('image'), async (req, res) => {
    const imageUrl = `/uploads/${req.file.filename}`

    const products = new Products({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        image: 'http://localhost:3000'+imageUrl,
        price: req.body.price,
    });

    try {
        const savedProducts = await event.save();
        res.status(200).json(savedProducts);
    } catch (err) {
        console.log(err)    
        res.status(500).json({ message: err });
    }
});

module.exports = router;