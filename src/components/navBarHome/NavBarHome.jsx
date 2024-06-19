import React, { useState } from 'react'
import {Link} from "react-router-dom"
import logo from "../../assets/icoLouBlan.png"
import "./navBarHome.css"

const NavBarHome = () => {
    const [hambMenu, setHambMenu]= useState(false)

    return (
      <> 
      <nav className='orgNav'>
            <div className="itemArea">
              <Link to="/bio" className='itemNavHome'>bio</Link>
              <Link to="/textos" className='itemNavHome'>textos</Link>
              <Link to="/obras" className='itemNavHome'>obras</Link>
              <Link to="/videos" className='itemNavHome'>videos</Link>
              <Link to="/procesos" className='itemNavHome'>procesos</Link>
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

export default NavBarHome