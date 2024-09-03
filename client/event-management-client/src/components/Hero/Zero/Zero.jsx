import React from 'react';
import './Zero.css';  // Make sure the path is correct

const EventHive = () => {
  return (
    <main>
      <section className="hero">
        <div className="overlay">
          <h2><span>Create, Manage, and Sell</span> Bulk Orders</h2>
        </div>
        <div className="hero-nav">
          <button className="prev">&lt;</button>
          <button className="next">&gt;</button>
        </div>
      </section>
        <section className="search">
          <div className="search-container">
            <div className="search-section">
              <h3 className="section-heading">Product Category</h3>
              <select className="category-select">
                <option value="all">All Categories</option>
                <option value="Fashion & Apparel">Fashion & Apparel</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Health & Beauty">Health & Beauty</option>
                <option value="Electronics & Gadgets">Electronics & Gadgets</option>
              </select>
            </div>
            {/* <div className="search-section">
              <h3 className="section-heading">Location</h3>
              <select className="location-select">
                <option value="all">Selling Locations</option>
                <option value="new-york">Mumbai</option>
                <option value="los-angeles">Delhi</option>
                <option value="chicago">Chandigarh</option>
              </select>
            </div> */}
            {/* <div className="search-section">
              <h3 className="section-heading">Date</h3>
              <input type="date" className="date-input" />
            </div>
            <div className="search-btn-container">
              <button className="search-btn">
                <img src="/src/assets/search.svg" alt="Search" />
              </button>
            </div> */}
          </div>
        </section>
    </main>
  );
};

export default EventHive;
