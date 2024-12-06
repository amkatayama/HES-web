import React from "react"
import "./HomeStyles.css"


import Video from "../../assets/page_1_1.mp4"

function Home () { 
    return (
        <div name = "home" className = "home">
            <video autoPlay loop muted id = "video">
                <source src= {Video} type = "video/mp4"/> 
            </video>
            <div className = "overlay"></div>
            <div className = "content">
                <h1>Health for <span style={{ color: '#87233b' }}>Every</span>  Student</h1>
                <h2 style={{ fontStyle: 'italic' }}> Healthcare at our Fingertips</h2>
                
            </div>

        </div>
    )
}

export default Home