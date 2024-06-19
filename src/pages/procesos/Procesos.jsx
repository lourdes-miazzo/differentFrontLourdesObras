import React, {useEffect, useState}from 'react'

import "./procesos.css"
import NavBar from '../../components/navBar/NavBar'
import Footer from "../../components/footer/Footer"
import { RotatingSquare } from 'react-loader-spinner'
import { allProcess } from '../../api/auth'
import { Link } from 'react-router-dom'

const Procesos = () => {
  const [allPro, setAllPro]= useState(null)
  useEffect(() => {
    const fetchPro= async()=>{
      try {
        const res= await allProcess()
        setAllPro(res.payload)
      } catch (error) {
        throw error
      }
    }
    fetchPro()
  }, [])

  return (
    <>

    <div className='backProc'>
      <NavBar/>
      <div className="aroundPro">
        {
          allPro
          ?
          ( 
              
              <div className='aroundAllImgPro'>
                {allPro.map((pro, index)=>
                  <div key={index} style={{backgroundImage: `url(${pro.mainPicture})`}} className='cardPro'>
                    <h3 className='titlePro'><Link to={`/procesos/${pro._id}`} style={{textDecoration: "none", color: "inherit"}}>{pro.title}</Link></h3>
                  </div>)}
              </div>
          )
          :
          ( 
            <div className="aroundLoaderPro">
              <RotatingSquare
                visible={true}
                height="100"
                width="100"
                color="#ffffff"
                ariaLabel="rotating-square-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
              <p className="loaderTextPro">Cargando...</p>
            </div>
        )
        }
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Procesos