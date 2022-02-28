import React from 'react'
import CircularProgress from '../CircularProgress/CircularProgress'
import './CardWithTitle.scss'

const CardWithTitle = ({title, subtitle, note, image, onClick}) => {
    return (
        <div className='card-movie' onClick={onClick}>
            <CircularProgress vote={note}  />
            <img src={image} alt='' />
            <div className='card-movie-content'>
                <p className='title'>
                    {title}
                </p>
                <p className='description'>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

export default CardWithTitle