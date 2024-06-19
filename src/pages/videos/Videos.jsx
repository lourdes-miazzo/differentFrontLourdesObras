import React, { useState } from 'react'
import "./videos.css"
import NavBar from '../../components/navBar/NavBar.jsx'
import Footer from '../../components/footer/Footer.jsx'

const Videos = () => {
  const [myVideos, setMyVideos]= useState(true)
  return (
    <div className='backVideo'>
      <NavBar/>

        
          {
            myVideos
            ?
            (
              <div className='aroundVideo'>
                  <iframe className='videoInd' src="https://www.youtube.com/embed/mZYVySvlopM?si=PFF3sVMvlhBHwvm1" title="transición2. balncoynegro." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
                  <iframe className='videoInd' src="https://www.youtube.com/embed/obM_u5LnLUs?si=Bcr802GBKtl5a8i_" title="transición. color." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  <iframe className='videoInd' src="https://www.youtube.com/embed/0x6bQ6Hgbao?si=trMkFzK8HmsKRNAa" title="transición3." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  <iframe className='videoInd' src="https://www.youtube.com/embed/d6GRM6MazuE?si=sVpvmCJhDm7fcDJm" title="transición. rainbow." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  <iframe className='videoInd' src="https://www.youtube.com/embed/bDXiNwvS6s0?si=HvhqTbEA5wBb8Nxm" title="recorrido de obra" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  <iframe className='videoInd' src="https://www.youtube.com/embed/oz6Ej4b4s6k?si=Ppv9OA2K7bNG-CW8" title="experimental" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  <iframe className='videoInd' src="https://www.youtube.com/embed/idWy4NKhKVQ?si=iIelcegmhHsk0dTG" title="morfología" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  <iframe className='videoInd' src="https://www.youtube.com/embed/dpEK3Ln57r8?si=wj4vuna9Hh9mnNsO" title="stopmotion de piezas de papel" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  <iframe className='videoInd2' src="https://www.youtube.com/embed/dSBgUQ7LxuQ?si=F_7OdwjTxH6uzde-" title="transición. versión analógica" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  <div className="aroundVideoPlus">
                    <i onClick={()=> {setMyVideos(false)}} className="fa-solid fa-circle-plus buttonVideo"></i>
                  </div>
              </div>
            )
            :
            (
              <div className='aroundVideo'>
                <iframe className='videoInd3' src="https://www.youtube.com/embed/Qj6Yqi85cQE?si=evnf0lQNFLbEFKDQ" title="Teresa Maluf y Lourdes Miazzo // nodo 00 // 2016" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe className='videoInd3' src="https://www.youtube.com/embed/4uk4IOhYwws?si=i1ahhTLqJXE9x70I" title="Lourdes Miazzo y Marcos Di Mattia" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe className='videoInd4' src="https://www.youtube.com/embed/k6XlwVAauXA?si=0_het-Bvh6WFTYve" title="PLEGADOS - Capítulo LOURDES MIAZZO" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <div className="aroundVideoLess">
                  <i onClick={()=> {setMyVideos(true)}} className="fa-solid fa-circle-minus buttonVideo"></i>
                </div>
              </div>
            )
          }
       
  

      <Footer/>
    </div>
  )
}

export default Videos