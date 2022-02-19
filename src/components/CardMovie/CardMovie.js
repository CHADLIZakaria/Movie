import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CardMovie.scss'
const CardMovie = ({movie}) => {
    const naviagate = useNavigate()
    return (
        <div className='card-movie' onClick={() => naviagate(`/${movie.media_type==='movie' ? 'movie': 'tv'}/${movie.id}`)}>
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