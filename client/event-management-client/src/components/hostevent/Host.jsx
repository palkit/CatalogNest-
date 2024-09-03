import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Host.css'

const Host = () => {

    const [venues, setVenues] = useState([])

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
    const selectVenue = useRef(null)
    
    const addCategory = (categories) => {
        categories.forEach((category) => {
            const option = document.createElement('option')
            option.value = category
            option.text = category
            selectCategory.current.appendChild(option)
        })
    }

    // function to fetch venues from server
    const fetchVenues = async () => {
        const res = await fetch('http://localhost:3000/venues')
        const data = await res.json()
        setVenues(data)
    }

    // function to add venues as options in select tag
    const addVenues = async () => {
        console.log(venues)
        venues.forEach((venue) => {
            const option = document.createElement('option')
            option.value = venue._id
            option.text = venue.name
            selectVenue.current.appendChild(option)
        })
    }
    
    useEffect(() => {
        addCategory(categories)
        fetchVenues()
    }, [])

    useEffect(() => {
        addVenues()
    }, [venues])
    // when user clicks on create event button, call a function to make a post request to server to create event
    const createEvent = async () => {
        const productName = document.getElementById('product-name').value
        const productCategory = document.getElementById('product-category').value
        const eventVenue = document.getElementById('event-venue').value
        const productPrice = document.getElementById('product-price').value
        const startTime = document.getElementById('start-time').value
        const endTime = document.getElementById('end-time').value
        const startDate = document.getElementById('start-date').value
        const endDate = document.getElementById('end-date').value
        const productImage = document.getElementById('product-image').files[0]
        const productDescription = document.getElementById('Product-description').value

        const event = {
            title: productName,
            category: productCategory,
            venue: eventVenue,
            price: productPrice,
            startTime: startTime,
            endTime: endTime,
            startDate: startDate,
            endDate: endDate,
            image: productImage,
            description: productDescription
        }

        const res = await axios.post('http://localhost:3000/events', event,
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
            <div className="createeventinfo">
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
                            <label htmlFor="event-venue">Event Venue:</label>
                            <select name="event-venue" defaultValue={""} ref={selectVenue} id="event-venue">
                                <option value="" disabled>Select Venue</option>
                            </select>
                        </div>
                        <div className="in1">
                            <label htmlFor="product-price">Product Price:</label>
                            <input type="number" id="product-price" name="product-price" placeholder="Enter Price" />
                        </div>
                    </div>
                    <div className="mainformgroup">
                        <div className="form-group">
                            <div>
                                <label htmlFor="start-time">Start Time:</label>
                                <input type="time" id="start-time" name="start-time" placeholder="Enter your mail" />
                            </div>
                            <div>
                                <label htmlFor="end-time">End Time:</label>
                                <input type="time" id="end-time" name="end-time" placeholder="Enter your mail" />
                            </div>
                        </div>

                        <div className="form-group">
                            <div>
                                <label htmlFor="start-date">Start Date:</label>
                                <input type="date" id="start-date" name="start-date" placeholder="Enter your mail" />
                            </div>
                            <div>
                                <label htmlFor="end-date">End Date:</label>
                                <input type="date" id="end-date" name="end-date" placeholder="Enter your mail" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="eventdescription">
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
                    <Link to={"/"}  type="button" className="hostbutton" onClick={createEvent}>List Product</Link>
                </form>
            </div>

        </div>
    )
}

export default Host