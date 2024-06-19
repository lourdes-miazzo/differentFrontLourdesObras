import React, { useState, useEffect } from 'react'
import "./textoInd.css"
import { RotatingSquare } from 'react-loader-spinner'
import { Link, useParams } from 'react-router-dom'
import { getOneText } from '../../api/auth.js'
import NavBar from '../../components/navBar/NavBar.jsx'
import Footer from '../../components/footer/Footer.jsx'

const TextoInd = () => {
    const id= useParams()
    const idString= id.id
    const [indiv, setIndiv]= useState(null)
    const [originalPubl, setOriginalPubl]= useState(null)
    const [textMap, setTextMap]= useState(null)

    useEffect(() => {
        const fetchIndText= async()=>{
            try {
                const res= await getOneText(idString)
                setIndiv(res.payload)
                setOriginalPubl(res.payload.link)
                setTextMap(res.payload.parag)
            } catch (error) {
                throw error
            }
        }
        fetchIndText()
    
     
    }, [id])
    

  return (
    <>
    <div className="backIndiv">
        <NavBar/>
            <div className="aroundInd">
                {
                    indiv
                    ?
                    (
                        <div>
                            <div className='cardIndiv'  style={{ backgroundImage: `url(${indiv.picture})` }}> 
                                <h2 className='titleIndiv'>{indiv.title}</h2>
                            </div>
                            <div className="allTextInd">{textMap.map((par, index)=><p className="textIndiv" key={index}>{par}</p>)}</div>
                            <p className="authorIndiv">{indiv.author}</p>
                            {
                                originalPubl
                                &&
                                (<Link to={indiv.link} className='linkIndiv' target="_blank"><p>Ver publicacion original</p></Link> )
                            }
                            <Link to="/textos/"><i className="fa-solid fa-circle-chevron-left chevronTextInd"></i></Link>
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
                            <p className="loaderText">Cargando...</p>
                        </div>
                        
                    )
                }
            </div>
        <Footer/>
    </div>
    </>
  )
}

export default TextoInd