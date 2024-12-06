import React from "react"
import "./TeamImgStyles.css"


function TeamImg({bgImg, text}) {
    return (
        <div className = "three-services">
            <img src={bgImg} alt='/' />
            <div className = "overlay">
                <p>{text}</p>
            </div>

        </div>
    )
 }

 export default TeamImg