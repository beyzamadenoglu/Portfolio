import React from "react";
import Typed from "react-typed";

export const header = () => {
    return (
       <div className = "header-wrapper">
           <div className = "main-info">
               
             
               <Typed className = "typed-text" strings = {["Software QA Engineer","Web Developer", "Computer Engineer"]} 
               typeSpeed = {70}
               backSpeed = {40}
               loop
               />

               <a href = "#" className = "btn-main-offer"> contact me </a>

                </div>
       </div>
    
    )
}

export default header