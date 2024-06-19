import React, { useEffect, useState } from 'react'
import { RotatingSquare } from 'react-loader-spinner'
import "./textos.css"
import NavBar from '../../components/navBar/NavBar.jsx'
import Footer from "../../components/footer/Footer.jsx"
import { getAllTexts } from '../../api/auth.js'
import { Link } from 'react-router-dom'

const Textos = () => {
  const [texts, setTexts]= useState([])
  
  useEffect(() => {
  const fetch=async()=>{
    try{
      const res= await getAllTexts()
      setTexts(res.payload)    
    }
    catch(e){
      throw(e)
    }
  }
  fetch()
  }, [])


  return (
    <div className='backText'>
      <NavBar/>
      <div className='spaceText'>
      <div className="aroundText">
        {
          texts.length > 0
          ? 
          (
            <div className="aroundText2">
            {texts.map(data=> (
                            <div className='cardText'  style={{ backgroundImage: `url(${data.picture})` }} key={data._id}> 
                              <h2 className='titleText'><Link to={`/textos/${data._id}`} style={{textDecoration: "none", color: "inherit"}}>{data.title}</Link></h2>
                            </div>
                          ))}
            </div>
          )
          : 
          (
            <div className="aroundLoaderText">
              <RotatingSquare
                visible={true}
                height="100"
                width="100"
                color="#ffffff"
                ariaLabel="rotating-square-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
              <p className="loaderTextText">Cargando...</p>
            </div>
          )
        }
        </div>
      </div> 
      <Footer/>
    </div>
  )
}

export default Textos