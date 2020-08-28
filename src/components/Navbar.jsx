import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import Cartbutton from './Cartbutton'

const Navbar = () => {
    return (
        <section className="navbar">
           <div className="company-name">
               <h1><Link to="/">This <span>&</span> That</Link></h1>
           </div>

           <Cartbutton name="Leia"/>

           <Searchbar />
           
           <ul>
               <li><Link to="/Furniture">Furniture</Link></li>
               <li><Link to="/Plants">Plants</Link></li>
               <li><Link to="/Stationary">Stationary</Link></li>
           </ul>
        </section>
    )
}

export default Navbar