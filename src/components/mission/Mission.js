import React from "react"
import "./MissionStyles.css"

import Gold from "../../assets/gold.png"
import magazineNumber from "../../assets/file.png"
import Earlham_Logo from "../../assets/Earlham_Logo.png"

function Mission() {
    return (
        <div name = "mission" className = "mission"> 
            <div className = "container">
                <div className = "left">
                    <h2>Our Missions</h2>
                    <p>Health for Every Students (HES) is dedicated to empowering college students in the U.S. with the tools and knowledge to navigate the complexities of the American healthcare system. Our platform provides personalized resources, including an insurance tracker and simulator, a community-based healthcare provider search engine, and interactive educational content. By focusing on transparency, accessibility, and tailored support, HFIS aims to simplify healthcare management and promote well-informed, proactive healthcare decisions among students.</p>
                <div className = "mission-col-2">
                    <div className = "box">
                        <div>
                            <img src={Gold} alt="/" style={{marginRight: "1rem"}}/>
                        </div>
                        <div> 
                            <h3>WORLD'S LEADING </h3>
                            <p>Awarded Best Beach Resort company for 20 years in a row</p>
                        </div>
                    </div>
                    <div className = "box">
                        <div>
                            <img src={magazineNumber} alt="/" style={{marginRight: "1rem", marginLeft: "0.5rem", width: 100, height: 36}}/>
                        </div>
                        <div>
                            <h3>MOST POPULAR VACATION SITE</h3>
                            <p>Recognized by over 150 travel magazines</p>
                            <button>View Packages</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className = "right">
                    <div className = "promo">
                        <h4 className = "save">Sign Up for FREE Now!</h4>
                        
                    </div>
                    <form>
                        <div className = "sign_buttons">
                            <button>SIGN UP</button>
                            <button>SIGN IN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Mission 