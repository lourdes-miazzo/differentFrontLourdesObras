import React, { useState } from 'react'
import {Link} from "react-router-dom"
import logo from "../../assets/icoLouBlan.png"
import "./navBar.css"

const NavBar = () => {
  const [hambMenu, setHambMenu]= useState(false)

  return (
    <> 
    <nav className='orgNav'>
          <div className="itemArea">
            <Link to="/bio" className='itemNav'>bio</Link>
            <Link to="/textos" className='itemNav'>textos</Link>
            <Link to="/obras" className='itemNav'>obras</Link>
            <Link to="/videos" className='itemNav'>videos</Link>
            <Link to="/procesos" className='itemNav'>procesos</Link>
          </div>

          <div className="hambNav">
            <div className="aroundImg">
              <Link to="/">
                <img src={logo} alt="" className='logoImg'/>
              </Link>
            </div>
            <div className="hambArea">
              <i className="fa-solid fa-bars hambButton" onClick={()=> setHambMenu(true)}></i>
            </div>
          </div>
            {
              hambMenu
              &&
              (
              <div className='itemHambArea'>
                <i className="fa-solid fa-xmark closeDropDown" onClick={()=> setHambMenu(false)}></i>
                <Link to="/bio" className='itemHamb'>bio</Link>
                <Link to="/textos" className='itemHamb'>textos</Link>
                <Link to="/obras" className='itemHamb'>obras</Link>
                <Link to="/videos" className='itemHamb'>videos</Link>
                <Link to="/procesos" className='itemHamb'>procesos</Link>
              </div>
              )
            }
   
    </nav>
    </>
  )
}

export default NavBar



