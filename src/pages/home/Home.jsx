import React from 'react'
import "./home.css"
import videoMp4 from "../../assets/finalblanconegro.mp4"
import NavBarHome from '../../components/navBarHome/NavBarHome'
import Footer from '../../components/footer/Footer'



const Home = () => {
  return (
    <>
    <div className='backHome'>
      
      <NavBarHome className="navHome"/>

      <div className="spaceHome">
      <video src={videoMp4} autoPlay loop muted className='videoHome'></video>
      <video src={videoMp4} autoPlay loop muted className='videoHome'></video>
      <video src={videoMp4} autoPlay loop muted className='videoHome'></video>
   
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Home