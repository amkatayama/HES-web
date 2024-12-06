import React from "react"
import "./ServicesStyles.css"

import Search_Engine_Banner from "../../assets/Search_Engine.png"
import Insurance_Banner from "../../assets/Insurance_calc.png"
import Educational_Banner from "../../assets/Educational_Content.png"


function Services() {
    return (
        <div name = "services" className = "services">
            <div className = "container">
                <h1>What We Provide</h1>
                <p>Services to support college students navigate healthcare</p>
                <div className="overlay"></div>
                <div className="img-container">
                <div className="img-wrapper">
                    <img className="SearchEngine" src={Search_Engine_Banner} alt="Healthcare Provider Search Engine Banner" />
                    <p className="text-overlay">Search Local Healthcare Providers</p>
                </div>

                <div className="img-wrapper">
                    <img className="InsuranceCalculation" src={Insurance_Banner} alt="Insurance Calculation Banner" />
                    <p className="text-overlay">Track, Calculate, and Estimate Hospital Costs</p>
                </div>

                <div className="img-wrapper">
                    <img className="EducationalContent" src={Educational_Banner} alt="Educational Content Banner" />
                    <p className="text-overlay">Healthcare System Educational Content</p>
                </div>
                </div>


            </div>
    
        </div>

    )
    
}

export default Services