import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/icoLouBlan.png"
import "./footer.css"

const Footer = () => {
    return (
        <div className='backFooter'>
            <Link to="/" ><img src={logo} className='logo'/></Link>
            <div className="socialArea">
                <Link to="https://www.instagram.com/lourdesmiazzo/" target="_blank"><i className="fa-brands fa-instagram logoSoc"></i></Link>
                <p className="emailSoc">lourdesmiazzo@gmail.com</p>
            </div>
        </div> 
    )
}

export default Footer