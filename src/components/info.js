import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileCode, faBug, faGraduationCap} from "@fortawesome/free-solid-svg-icons";

const services = () => {
    return (
        <div className = "services">
            <div className = "py-5" > 
            <div className = "container">
                <div className = "row">
                    <div className = "col order-first">
                        <div className = "box b1">
    <div className = "circle"> <FontAwesomeIcon className = "icon" icon = {faGraduationCap} size = "2px" /> </div>    
                        <h3> Computer Engineer</h3> 
                            <p>I graduated from Istanbul Aydın University, Computer Engineering Department in 2021. </p>   
                         </div>    
                     </div>
                     {/* - */}
                     <div className = "col">
                        <div className = "box b1">
                        <div className = "circle"> <FontAwesomeIcon className = "icon " icon = {faBug} size = "2px" /> </div> 
                            <h3> Software QA Engineer</h3> 
                            <p>I work as QAE
                            at <a href="https://www.vodafone.com.tr/" target = "_blank" rel="noreferrer">VodafoneTR</a>, reporting to <a href="https://www.amdocs.com/" target = "_blank" rel="noreferrer">Amdocs </a> via <a href="https://www.testinium.com/" target = "_blank" rel= "noreferrer"> Testinium</a> Company. </p>   
                         </div>    
                     </div>
                    {/* - */}
                    <div className = "col order-last">
                        <div className = "box">
                       < div className = "circle"> <FontAwesomeIcon className = "icon"icon = {faFileCode} size = "2px" /> </div> 
                            <h3> Web Developer</h3>   
                            <p>I develop projects with JS frameworks such as React/Vue alongside my full-time job.</p> 
                         </div>    
                     </div>
                    {/* - */}
                     
                </div>
            </div>
            </div>
        </div>
    )
}

export default services;
