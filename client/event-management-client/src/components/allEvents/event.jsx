import React, { useEffect, useState } from 'react';
import "./event.css";
import EventCard from '../Card/EventCard';

const Event = () => {
  const [weekdayFilter, setWeekdayFilter] = useState('All');
  const [eventTypeFilter, setEventTypeFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [Products,setProducts] = useState([])

  //function to fetch all events from the database
    const fetchEvents = async () => {
        const response = await fetch('http://localhost:3000/products');
        const data = await response.json();
        console.log(data)
        setProducts(data);
    };

    useEffect(() => {
        fetchEvents();
    }, []);



  const handleFilterChange = (setter) => (event) => {
    setter(event.target.value);
  };

  return (
    <div>
      <div className="event-hive-hero">
        <div className="hero-content">
          <h2>Wanna Sell in Bulk Orders to Retailers?</h2>
          <h1>Catalog <span>Nest</span> is there for you...</h1>
          <div className="stats">
            <div>
              <span>2k+</span>
              <p>Factory Sellers</p>
            </div>
            <div>
              <span>10,000+</span>
              <p>Daily Customers</p>
            </div>
          </div>
        </div>

        <img src="src/assets/event-Image.webp" alt="Event Hive Hero Image" className="hero-image" />
      </div>

      <div className="event-card-section">
        <h1><span>Products Listed</span></h1>
        <div className="filter-section">
          {/* <select onChange={handleFilterChange(setWeekdayFilter)}>
            <option value="All">Weekdays</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>

          <select onChange={handleFilterChange(setEventTypeFilter)}>
            <option value="All">All Event Types</option>
            <option value="Workshop">Workshop</option>
            <option value="Webinar">Webinar</option>
            <option value="Conference">Conference</option>
            <option value="Meetup">Meetup</option>
          </select> */}

          <select onChange={handleFilterChange(setCategoryFilter)}>
            <option value="All">All Categories</option>
            <option value="Fashion & Apparel">Fashion & Apparel</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Health & Beauty">Health & Beauty</option>
              <option value="Electronics & Gadgets">Electronics & Gadgets</option>
          </select>
        </div>
      </div>
      
      <div className="events-grid-all">
        {Products.map((product) => (
            <EventCard key={product._id} name={product.name}  image={product.image} description={product.description} price={product.price}/>
          ))}
      </div>
    </div>
  );
}

export default Event;
