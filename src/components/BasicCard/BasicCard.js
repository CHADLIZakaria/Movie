import React from 'react'
import './BasicCard.scss'

const BasicCard = ({title, subtitle, image, onClick}) => {
    return (
        <div className='basic-card' onClick={onClick}>
            <div className='card-image'>
                <img src={image} alt='' />
            </div>
            <div className='card-content'>
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

export default BasicCard