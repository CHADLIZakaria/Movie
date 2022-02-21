import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './CardMovie.scss'
const CardMovie = ({movie}) => {
    const navigate = useNavigate()
    const location = useLocation()
    let type=''
    if(location.pathname==='/') {
        if(movie.media_type==='movie') type='movie'
        else type='tv'
    }
    else {
        type=location.pathname.substring(1, location.pathname.length-1)
    }
    
    return (
        <div className='card-movie' onClick={() => navigate(`/${type}/${movie.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <div className='card-movie-content'>
                <p className='title'>
                    {movie.title == null ? movie.name : movie.title}
                </p>
                <p className='description'>
                    {movie.overview}
                </p>
            </div>
        </div>
    )
}

export default CardMovie