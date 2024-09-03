import React from 'react'
import "./Second.css"
import { Link } from 'react-router-dom'

const second = () => {
    return (
        <div className="create">
            <div className="createbox">
                <div className="createimg">
                    <img src="/src/assets/image 3.svg" alt="" />
                </div>
                <div className="createEvent">
                    <h1><img src="/src/assets/event.svg" alt="" /></h1>
                    <p>Create your Own Catalog on CatalogNest and Start Selling your Products to Retailers in bulk all across India.</p>
                    <Link to={"./create"}><button>Create Catalog</button></Link>
                </div>
            </div>
        </div>
    )
}

export default second