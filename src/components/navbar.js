import React from 'react';
import myLogo from "../logo.png";
//REACT FONTAWESOME IMPORTS

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className = "container"> 

        <a className="navbar-brand" href="#"> <img className = "logo" src = {myLogo} alt = "Beyza Madenoglu"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon = {faBars} />
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About me</a>
            </li>  
           
            <li className="nav-item">
              <a className="nav-link" href="#">Contact me</a>
            </li>
            
          </ul>
    
        </div>

        </div>
      </nav>
    )
}

export default Navbar