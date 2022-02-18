import React, { useEffect, useState } from 'react'
import CardMovie from '../components/CardMovie'
import MovieService from '../services/MovieService'
import './Movies.scss'

const Movies = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        MovieService.trendingMovie().then(value => {
            console.log(value)
            setMovies(value.results)
        })
        
    }, [])
    

    return (
        <div className='list-movies'>
            {movies.map(movie => (
                <CardMovie movie={movie} key={movie.id} />
            ))}
        </div>
    )
}

export default Movies