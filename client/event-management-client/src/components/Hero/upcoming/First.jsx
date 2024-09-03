import React, { useEffect, useState } from 'react';
import './First.css'; // Assuming this CSS file styles the component
import EventCard from '../../Card/EventCard';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {

  const [Products,setProducts] = useState([])

  //function to fetch all events from the database
    const fetchEvents = async () => {
        const response = await fetch('http://localhost:3000/Products');
        const data = await response.json();
        console.log(data)
        //save only first six events
        // data.length = 6;
        setProducts(data);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

  return (
    <div className="upcoming-events">
      <h1>Products <span>Listed</span> </h1>

      <div className="events-grid">
        {Products.map((product) => (
          <EventCard key={product._id} category={product.category} name={product.name} image={product.image} description={product.description} price={product.price}/>
        ))}
      </div>

      <div className="loadbutton">
        <Link to={"./events"} className="load-more">See more</Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;