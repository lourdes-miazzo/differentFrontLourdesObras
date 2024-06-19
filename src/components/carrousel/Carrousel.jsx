import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./carrousel.css"


const Carrousel = ({data}) => {
    const picMaps= data.pictures
    return (
    <>
        <Carousel className="carrousel-container">
            {
                picMaps.map((pic, index)=>  <Carousel.Item key={index}>
                                                <img src={pic} className="carrousel-image" alt={`Slide ${index}`} />
                                            </Carousel.Item>)
            }
        </Carousel>
    </>
    )
}

export default Carrousel