import React from 'react'
import './ActorCarousel.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
const ActorCarousel = ({actors}) => {
    return (
        <div className='actors'>
            
            {actors.map(actor =>
                <div className='actor'>
                    <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} />
                    <p>{actor.name}</p>
                </div>
            )}
            <div className='carousel-control-prev'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div className='carousel-control-next'>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>

        </div>
    )
}

export default ActorCarousel