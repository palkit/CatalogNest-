import React from 'react'
import './Third.css';
import EventCard from '../../Card/EventCard';




const TrendingColleges=()=>{
    const events=[
        {
            title:'Black Premium Sweatshirt',
            date:'Saturday,March 18, 12:00PM',
            location: 'Surat',
            image: '/src/assets/blackPremium.webp', 
            isFree: false,
        },
        {
            title:'white Premium Sweatshirt',
            date:'Saturday,March 18, 12:00PM',
            location: 'Surat',
            image: '/src/assets/whitePremium.webp', 
            isFree: false,
        }
       
        
    ];
    return(
        <div className="upcoming-events  Trending">
            <h1> Trending <span>Products</span> </h1>
            
            <div className="events-grid">
                {events.map((event)=>(
                    <EventCard key ={event.title} {...event}/>
                ))}
            </div >
            <div className="loadbutton">
            <button className="load-more">See more</button>
            </div>
            
        </div>
    );
};

export default TrendingColleges;