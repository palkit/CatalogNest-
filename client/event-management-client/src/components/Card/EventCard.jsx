// import React from 'react'
// import './EventCard.css';

// const EventCard = (category, name, description, image, price) => {
//     return (
//         <div className='firstbox'>
//             <div className="event-card">
                
//                 <img src={image?image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qdvtT10hehHKT30f62OgC4o-EgLI39bSuNZVx5WTjy_UFI_xVUQZ_4yX05ZfBMPx5gE&usqp=CAU'} alt={name} />

//                 <div className="event-info">
//                     <h3>{name?name:'No Name'}</h3>
//                     <p>
//                         {location ? location : 'India'}
//                     </p>
//                     <p>{category}</p>
//                     <p>{price?price:"Ask for Price"}</p>
//                     <p>
//                         {description}
//                     </p>
//                     <h6>Currently Available </h6>
//                 </div>

//             </div>
//         </div>


//     )
// };

// export default EventCard;




import React from 'react';
import './EventCard.css';

const EventCard = ({ category, name, description, image, price }) => {
    return (
        <div className='firstbox'>
            <div className="event-card">
                <img 
                    src={image ? image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6qdvtT10hehHKT30f62OgC4o-EgLI39bSuNZVx5WTjy_UFI_xVUQZ_4yX05ZfBMPx5gE&usqp=CAU'} 
                    alt={name ? name : 'No Name'} 
                />

                <div className="event-info">
                    <h3>{name ? name : 'No Name'}</h3>
                    <p>{category ? category : 'No Category'}</p>
                    <p>{price ? price : 'Ask for Price'}</p>
                    <p>{description}</p>
                    <h6>Currently Available</h6>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
