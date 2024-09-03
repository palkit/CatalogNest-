import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Host.css'

const Host = () => {


    //dymaically adding categories
    const categories = [
        "Electronics & Gadgets",
        "Fashion & Apparel",
        "Home & Kitchen",
        "Health & Beauty",
        "Sports & Outdoor Gear",
        "Books & Stationery",
        "Toys & Games",
        "Automotive Accessories",
        "Jewelry & Watches",
        "Baby & Kids",
        "Furniture & Decor",
        "Pet Supplies",
        "Groceries & Gourmet Food",
        "Musical Instruments",
        "Office Supplies",
        "Travel & Luggage",
        "Arts & Crafts",
        "Fitness & Wellness",
        "Garden & Outdoor"
      ];
    const selectCategory = useRef(null)
    
    const addCategory = (categories) => {
        categories.forEach((category) => {
            const option = document.createElement('option')
            option.value = category
            option.text = category
            selectCategory.current.appendChild(option)
        })
    }


    
    useEffect(() => {
        addCategory(categories)
    }, [])

    // when user clicks on create products button, call a function to make a post request to server to create products
    const createProduct = async () => {
        const productName = document.getElementById('product-name').value
        const productCategory = document.getElementById('product-category').value
        const productPrice = document.getElementById('product-price').value
        const productImage = document.getElementById('product-image').files[0]
        const productDescription = document.getElementById('Product-description').value
        

        const product = {
            name: productName,
            category: productCategory,
            price: productPrice,
            image: productImage,
            description: productDescription
        }


        const res = await axios.post('http://localhost:3000/products', product,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )

        // const data = await res.json()
        console.log(res)        
    }
    




    return (
        <div className="container">
            <div className="createproductsinfo">
                <h2>Create Catalog</h2>
                <form>
                    <div className="Fgrp">
                        <div className="in1">
                            <label htmlFor="product-name">Product Name:</label>
                            <input type="text" id="product-name" name="product-name" placeholder="Enter Product Name" />
                        </div>
                        <div className="in1">
                            <label htmlFor="product-category">Product Category:</label>
                            <select id="product-category" defaultValue={""} ref={selectCategory} name="product-category">
                                <option value="" disabled>Select Category</option>
                            </select>
                        </div>
                    
                        <div className="in1">
                            <label htmlFor="product-price">Product Price:</label>
                            <input type="number" id="product-price" name="product-price" placeholder="Enter Price" />
                        </div>
                    </div>
                    
                </form>
            </div>
            <div className="productsdescription">
                <h2>Product Description</h2>
                <form>
                    <div className="in1">
                        <label htmlFor="product-image">Product Image</label>
                        <div className="inputimg">
                            <input type="file" id="product-image" name="product-image" />
                        </div>
                    </div>
                    <div className="in1">
                        <label htmlFor="Product-description">Product Description:</label>
                        <textarea id="Product-description" name="Product-description" placeholder="Type here..."></textarea>
                    </div>
                    <Link to={"/"}  type="button" className="hostbutton" onClick={createProduct}>List Product</Link>
                </form>
            </div>

        </div>
    )
}

export default Host