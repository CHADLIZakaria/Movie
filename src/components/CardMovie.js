import React, { useEffect, useState } from 'react'
import './CardMovie.scss'
const CardMovie = ({movie}) => {
    return (
        <div className='card-movie'>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <div className='card-movie-content'>
                {movie.title == null ? movie.name : movie.title}
            </div>
        </div>
    )
}

export default CardMovie