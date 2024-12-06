import React, {useState} from 'react'
import {BiSearch} from "react-icons/bi"
import {BsPerson} from "react-icons/bs"
import {HiOutlineMenuAlt4} from "react-icons/hi"
import {AiOutlineClose} from "react-icons/ai"
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from "react-icons/fa"
import Logo from "../../assets/HES Logo.png"

import {Link} from "react-scroll"

import "./NavbarStyles.css"

function Navbar() {
    const [nav, setNav] = useState (false)
    const handleNav = () => setNav(!nav)
    return (
        <div name = "Main" className = {nav ? "navbar navbar-bg" : "navbar"}>
            <div className= {nav ? "logo dark" : "logo"}>
                <img src={Logo} alt="/" style={{marginRight: "0.5rem", marginLeft: "0.1rem", width: 112, height: 45}}/>
            </div>
            <ul className="nav-menu">
                <div className = "mobile-nav-home" > <Link to="home" smooth={true} duration={500} ><li>Home</li></Link> </div>
                <div className = "mobile-nav-services"> <Link to="services" smooth={true} duration={500}><li>Services</li></Link> </div>
                <div className = "mobile-nav-mission"> <Link to="mission" smooth={true} duration={500}><li>Mission</li></Link> </div>
                <div className = "mobile-nav-team"> <Link to="team" smooth={true} duration={500}><li>Team</li></Link> </div>
                <div className = "mobile-nav-faq"> <Link to="faq" smooth={true} duration={500}><li>FAQ</li></Link> </div>
            </ul>
            <div className="nav-icons">
                <BiSearch className="icon" style={{marginRight: "1rem"}}/>
                <BsPerson className="icon"/>
            </div>
            <div className = "hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className = "icon" />) : (<AiOutlineClose style={{color: "#000"}} className = "icon" />)}
                
            </div>

            <div className = {nav ? "mobile-menu active" : "mobile-menu"}>
                <ul className = "mobile-nav">
                    <Link to="home" smooth={true} duration={500} ><li>Home</li></Link>
                    <Link to="services" smooth={true} duration={500}><li>Destinations</li></Link>
                    <Link to="mission" smooth={true} duration={500}><li>Travel</li></Link>
                    <Link to="team" smooth={true} duration={500}><li>Book</li></Link>
                    <Link to="faq" smooth={true} duration={500}><li>Views</li></Link>
                </ul>
                <div className = "mobile-menu-bottom">
                    <div className = "menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className = "social-icons">
                        <FaFacebook className = "icon" />
                        <FaInstagram  className = "icon" />
                        <FaTwitter className = "icon" />
                        <FaPinterest className = "icon" />
                        <FaYoutube className = "icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar