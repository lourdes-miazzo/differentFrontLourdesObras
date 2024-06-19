import React, { useState, useEffect } from 'react'
import "./obraInd.css"
import { RotatingSquare } from 'react-loader-spinner'
import { Link, useParams } from 'react-router-dom'
import { oneWork } from '../../api/auth.js'

import NavBar from '../../components/navBar/NavBar.jsx'
import Footer from '../../components/footer/Footer.jsx'
import Carrousel from "../../components/carrousel/Carrousel.jsx"

const ObraInd = () => {
    const id= useParams()
    const idString= id.id
    const [infoOneWork, setInfoOneWork]= useState(null)

    useEffect(() => {
        const fetchOneWork= async()=>{
            try {
                const res= await oneWork(idString)
                setInfoOneWork(res.payload)  
            } catch (error) {
                throw error
            }
            
        }
        fetchOneWork()
    }, [id])

  return (
    <div className='backWorkInd'>
        <NavBar/>
        <div className="spaceWorkInd">
            <div className="aroundWorkInd">
                {
                    infoOneWork
                    ? 
                    (
                        <div> 
                            <Carrousel data={infoOneWork} className="carrouselInd"/>
                            <div className="aroundInfoText">
                                <h4 className="titleWorkInd">{infoOneWork.title}</h4>
                                <p className="infoWorkInd">{infoOneWork.year}</p>
                                <p className="infoWorkInd">{infoOneWork.size}</p>
                                <p className="infoWorkInd">{infoOneWork.style}</p>
                                <span className="buttonWorkInd">
                                    <Link to="/obras/" style={{textDecoration: "none", color: "inherit"}} >
                                        <i className="fa-solid fa-circle-chevron-left chevronInd"></i>
                                    </Link> 
                                </span>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="aroundLoaderIndWork">
                            <RotatingSquare
                            visible={true}
                            height="100"
                            width="100"
                            color="#ffffff"
                            ariaLabel="rotating-square-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            />
                            <p className="loaderTextIndWork">Cargando...</p>
                        </div>
                    )
                }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ObraInd