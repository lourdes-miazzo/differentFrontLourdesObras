import React, { useState, useEffect } from 'react'
import "./processIndiv.css"
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import { RotatingSquare } from 'react-loader-spinner'
import { useParams, Link } from 'react-router-dom'
import { getOnePro } from '../../api/auth'

const ProcessIndiv = () => {
    const id= useParams()
    const idString=id.id
    const [proInd, setProInd]= useState(null)
    const [arrayPics, setArrayPics]= useState(null)
    useEffect(() => {
        const fetchProInd= async()=>{
            const res= await getOnePro(idString)
            setProInd(res.payload)
            setArrayPics(res.payload.pics) 
        }
        fetchProInd()
    }, [id])
    
  return (
    <div className='backProInd'>
        <NavBar/>
        <div className="aroundProInd">
            {
            proInd
            ?
            (
            <div>
                <div className="aroundAllImgProInd">
                    {arrayPics.map((pic, index)=> <img key={index} src={pic} className='imgProInd'/>)}
                </div>
                <div className="aroundBtnProInd">
                    <Link to="/procesos/"><i className="fa-solid fa-circle-chevron-left chevronProInd"></i></Link>
                </div>
            </div>
            )
            :
            (
                <div className="aroundLoaderProInd">
                <RotatingSquare
                visible={true}
                height="100"
                width="100"
                color="#ffffff"
                ariaLabel="rotating-square-loading"
                wrapperStyle={{}}
                wrapperClass=""
                />
                <p className="loaderTextProInd">Cargando...</p>
            </div>)
            }
        </div>
        <Footer/>
    </div>
  )
}

export default ProcessIndiv