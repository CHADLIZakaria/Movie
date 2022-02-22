import React, { useState } from 'react'
import './Carousel.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
const Carousel = ({data}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const updateCurrentIndex = (index) => {
        if(index >= Math.ceil(data.length / 3))
            setCurrentIndex(0)
        else if(index===-1)
            setCurrentIndex(data.length-1)
        else 
            setCurrentIndex(index)
    }
    return (
        <div className='carousel'>
            <div className='carousel-inner' style={{transform: `translateX(${-100 * currentIndex}%)`}}>
                {data.map(actor => (
                    <div key={actor.id} className='carousel-item'>
                        <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt='' />
                    </div>
                ))}
            </div>
            <div className='carousel-control-prev' onClick={() =>  updateCurrentIndex(currentIndex-1)}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className='carousel-control-next' onClick={() => updateCurrentIndex(currentIndex+1)}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    )
}

export default Carousel