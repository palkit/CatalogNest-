import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar(){
    return (
        <>
           <nav className="navbar">
            <Link to={"/"} className="logo">
                <h1>Catalog<span>Nest</span></h1>
            </Link>
            <div className="buttons">
                <button className="login">Login</button>
                <button className="sign-up">Signup</button>
            </div>
           </nav>
        </>
    )
}