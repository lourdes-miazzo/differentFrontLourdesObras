import React, {useState} from 'react'
import './bio.css'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import bioImg from "../../assets/colorLou.jpg"
import imgCV from "../../assets/bioLou.jpg"



const Bio = () => {
  const [bioInfo, setBioInfo]= useState(true)
  const [ind, setInd]= useState(false)
  const [group, setGroup]= useState(false)
  const [colab, setColab]= useState(false)
  const indAction=()=>{
    setInd(!ind)
    setGroup(false)
    setColab(false)
  }
  const groupAction=()=>{
    setInd(false)
    setGroup(!group)
    setColab(false)
  }
  const colabAction=()=>{
    setInd(false)
    setGroup(false)
    setColab(!colab)
  }
  return (
    
    <div className='backBio'>
      <NavBar/>
      <div className="spaceBio">
        <div className="aroundBio">
          {
            bioInfo
            ?
              (
                <div className='orgBio'>
                  <div className="aroundBioImgText">
                    <img src={bioImg} className='bioImg'/>
                    <div className="aroundBioText">
                      <span className="bioText">
                        Lourdes Miazzo nació en Sampacho (Córdoba) en 1985. Estudió Licenciatura en Pintura en la Facultad de Artes de la Universidad Nacional de Córdoba y Desarrollo Full Stack en CoderHouse (2023). Realizó las muestras individuales “Mini Muestra” en Galería Marchiaro (2020) “El límite infinito” en Museo de las Mujeres (2019) “Transiciones” en Visuales Famaf (2018), “Cromofilia” en Alianza Francesa (2015) y Galería Bastón del Moro (2014), “Doce artistas emergentes” en Casona Municipal (2011). Participó en las muestras colectivas "Concierto" en 220cc, “Abstracciones/9 Abordajes” en Galería Marchiaro, “Pulso” en Buen Pastor, “Re-Creo Experiencias artísticas” en Casa Naranja; "Éter" en Galería Nodo 940, entre otras. “Me interesa trabajar con la forma y el color de una manera científica y experimental, pensando instrucciones, órdenes o formulas simples que al ser ejecutadas sobre el bastidor generen resultados estéticos interesantes y a la vez sorpresivos”
                      </span>
                    </div>
                  </div>
                  <div className="aroundButtonBio">
                    <i onClick={()=> {setBioInfo(false)}} className="fa-solid fa-circle-plus buttonBio"></i>
                  </div>
                </div>
              )
            :
              (
                <div>
                  <div className="aroundCvImgText">
                    <div className="acordiones">
                      <div className="acordion">
                        <div className="titleAcord">
                          individual
                          <i className={`chevron fa-solid ${ind ? "fa-circle-chevron-up" : "fa-circle-chevron-down"}`} onClick={indAction}></i>
                        </div>
                          {
                            ind
                            &&
                            (
                              <div className='bodyAcord'>
                                <p className='textCv'>-Lourdes Miazzo, Galería Marchiaro en Panorama galerías, ARTE BA, 2020</p>
                                <p className='textCv'>-Ciclo Mini Muestras, Galería Marchiaro, 2020</p>
                                <p className='textCv'>-El límite infinito, Museo de las Mujeres (MUMU), 2019</p>
                                <p className='textCv'>-Transiciones, VisualesFaMAF UNC, 2018</p>
                                <p className='textCv'>-Cromofilia, Alianza Francesa Córdoba, 2015</p>
                                <p className='textCv'>-Cromofilia, Galería Bastón de Moro, 2014</p>
                                <p className='textCv'>-12 artistas emergentes, Casona Municipal Córdoba, 2011</p>
                              </div>
                            )
                          }
                      </div>
                      <div className="acordion">
                        <div className="titleAcord">
                          grupal
                          <i className={`chevron fa-solid ${group ? "fa-circle-chevron-up" : "fa-circle-chevron-down"}`} onClick={groupAction}></i>
                        </div>
                          {
                            group
                            &&
                            (
                              <div className='bodyAcord'>
                                <p className='textCv'>-Orquesta, 220 centro cultural, 2021</p>
                                <p className='textCv'>-Feria de Arte Cordoba, Galería Marchiaro, 2021</p>
                                <p className='textCv'>-Abstracciones/ 9 Abordajes, Galería Marchiaro, 2019</p>
                                <p className='textCv'>-Pulso 33 artistas, Muestra itinerante: Córdoba, Rio Cuarto, Las Varillas, Villa María, Buenos Aires, 2019</p>
                                <p className='textCv'>-Éter, Galería NODO 940, 2018</p>
                                <p className='textCv'>-Mini Contemporáneo, Museo de Arte de La Pampa, 2016</p>
                                <p className='textCv'>-Otoño, NODO 940, 2016</p>
                                <p className='textCv'>-Una muestra de las chicas de Mini, Galería ESAA, Unquillo, 2016</p>
                                <p className='textCv'>-Proyecto Cofre, galería El pasaje, Tucumán, 2015</p>
                                <p className='textCv'>-Pictas: FaMAF UNC, 2014</p>
                              </div>
                            )
                          }
                      </div>

                      <div className="acordion">
                        <div className="titleAcord">
                          selección
                          <i className={`chevron fa-solid ${colab ? "fa-circle-chevron-up" : "fa-circle-chevron-down"}`} onClick={colabAction}></i>
                        </div>
                          {
                            colab
                            &&
                            (
                              <div className='bodyAcord'>
                                <p className='textCv'>-Premio Banco de Córdoba, Museo Arquitecto Francisco Tamburini, 2017</p>
                                <p className='textCv'>-MUAJ, Muestra arte joven, Sociedad Española de Cosquín, 2017</p>
                                <p className='textCv'>-XXXV edición Salón y Premio Ciudad de Córdoba, Cabildo de Córdoba, 2016</p>
                              </div>
                            )
                          }
                      </div>
                    </div>
                    <img src={imgCV} alt="" className='imgCv' />
                  </div>
                  <div className="aroundButtonCv">
                    <i onClick={()=> {setBioInfo(true)}} className="fa-solid fa-circle-minus buttonBio"></i>
                  </div>

                </div>
              )
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Bio