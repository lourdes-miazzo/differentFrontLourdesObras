import React from 'react'
import { Link } from 'react-router-dom'
import "./error.css"
import NavBar from "../../components/navBar/NavBar"
import Footer from "../../components/footer/Footer"

const Error = () => {
  return (
    <div className='backError'>
        <NavBar/>
        <div className="aroundError">
            <div className="cardError">
                <p className="textError">
                    Error 404, página no encontrada
                </p>
                <div className="aroundChevronError">
                    <Link to="/"><i className="fa-solid fa-circle-chevron-left chevronError"></i></Link>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Error