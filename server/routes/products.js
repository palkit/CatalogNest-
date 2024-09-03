const express = require('express');
const router = express.Router();
const Products = require('../models/Products');
const upload = require('../config/multerconfig');
const { default: mongoose } = require('mongoose');

// get all Products sorted according to the start date such that the products with the earliest start date comes first
router.get('/', async (req, res) => {
    try {
        const products = await Products.find().sort({ _id: -1 });
        res.json(products);
    } catch (err) {
        res.json({ message: err });
    }
});

// get details of a particular products by id
router.get('/:productsId', async (req, res) => {
    try {
        const products = await Products.findById(req.params.productsId);
        //send products details
        res.json({products}); 
    } catch (err) {
        res.json({ message: err });
    }
});

// endpoint to create new products
router.post('/',upload.single('image'), async (req, res) => {
    const imageUrl = `/uploads/${req.file.filename}`

    console.log(req.body)

    const products = new Products({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        image: 'http://localhost:3000'+imageUrl,
        price: req.body.price,
    });

    try {
        const savedProducts = await products.save();
        res.status(200).json(savedProducts);
    } catch (err) {
        console.log(err)    
        res.status(500).json({ message: err });
    }
});

module.exports = router;