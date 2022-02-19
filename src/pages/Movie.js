import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel/Carousel'
import MovieService from '../services/MovieService'
import './Movie.scss'

const Movie = () => {
    const params = useParams()
    const [movieWithActors, setMovieWithActors] = useState({"movie": {'genres': []}, 'actors': []})
    
    useEffect(() => {
        MovieService
            .getMovie(params.id, 'movie').then(value => {
                setMovieWithActors(value)
            })
            
    }, [])
    
    return (
        <div className='container'>
            <h3 className='movie-title'>{movieWithActors.movie.title}</h3>
            <div className='movie'>
                <div className='movie-image'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movieWithActors.movie.poster_path}`} alt='' />
                </div>
                <div className='movie-content'>
                    <div>
                        {movieWithActors.movie.overview}
                    </div>
                    <Carousel data={movieWithActors.actors} />
                    <ul className='categories'>
                        {movieWithActors.movie.genres.map( 
                            (element) => 
                            <li key={element.id}>{element.name}</li>
                            )}  
                    </ul>  
                </div>
            </div>
        </div>
    )
}

export default Movie