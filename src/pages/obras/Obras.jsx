import React, { useState, useEffect } from 'react'
import "./obras.css"
import NavBar from "../../components/navBar/NavBar"
import Footer from "../../components/footer/Footer"
import { RotatingSquare } from 'react-loader-spinner'
import { searchAllWorks } from '../../api/auth.js'
import { Link } from 'react-router-dom'

const Obras = () => {
  const [allWorks, setAllWorks]= useState(null)
  useEffect(() => {
    const fetchWorks= async()=>{
      try {
        const res= await searchAllWorks()
        setAllWorks(res.payload)  
      } catch (error) {
        throw error
      }
    }
    fetchWorks()
  }, [])

  return (
    <div className='backWork'>
      <NavBar/>
      <div className="spaceWork">
        {
          allWorks
          ? 
          (<div className='aroundWorks'>{allWorks.map(work=>(<div key={work._id} className='cardWork' style={{backgroundImage: `url(${work.mainPicture})`}}>
                                      
                                    
                                      <Link to={`/obras/${work._id}`} className='linkWork'>
                                      <div className="aroundTitle">
                                        <p className='titleWork'>{work.title}</p>
                                      </div>
                                      </Link>
                                    </div>))}
          </div>)
          :
          (
            <div className="aroundLoaderWork">
              <RotatingSquare
              visible={true}
              height="100"
              width="100"
              color="#ffffff"
              ariaLabel="rotating-square-loading"
              wrapperStyle={{}}
              wrapperClass=""
              />
              <p className="loaderTextWork">Cargando...</p>
            </div>
          )
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Obras