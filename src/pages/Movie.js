import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Carousel from '../components/Carousel/Carousel'
import MovieService from '../services/MovieService'
import './Movie.scss'

const Movie = () => {
    const params = useParams()
    const [movieWithActors, setMovieWithActors] = useState({"movie": {'genres': []}, 'actors': [], 'video': {}})
    
    useEffect(() => {
        MovieService
            .getMovie(params.id, 'movie').then(value => {
                console.log(value)
                setMovieWithActors(value)
            })
          //  console.log(movieWithActors)
            
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
                    <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${movieWithActors.video.key}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
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