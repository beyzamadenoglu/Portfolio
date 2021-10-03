import React from "react";
import author from "../ben1.png";

const aboutme = () => {
    return (
        <div className = "container py-5">
            <div className = "row"> 
              <div className = "col-lg-6 col-xm-12"> 
              <div className = "photo-wrap  mb-5"> 
              <img className = "profile-img" src = {author} alt = "author-bm" />
              </div>
              </div>
            <div className = "col-lg-6 col-xm-12"> 
            <h1 className = "about-heading"> about me </h1>
            <p>
            Hello, I’m Beyza. I graduated from Istanbul Aydın University, Computer Engineering Department in 2021. 
            I studied English Prep School for a year and successfully completed my 100% English department. 
            During the pandemic, I did an internship at my university's online education center for a semester. 
            Then, a few months before graduating, I started working as an Assistant Software Test Specialist at Testinium company, and received various trainings. 
            During this time, I was trained in various fields such as ISTQB, Agile, Selenium, Postman-SoapUI and BDD. Later, 
            I worked as a Software Quality Assurance Engineer in VodafoneTR project in July and I still continue. 
            In addition to my full-time job, I am trying to advance myself in the Web field and I am trying to develop projects in the field of JavaScript (React) and Java.
            </p>
            </div>
            </div>
        </div>
    )
}

export default aboutme
