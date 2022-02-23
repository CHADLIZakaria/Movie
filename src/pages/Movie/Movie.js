import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Carousel from '../../components/Carousel/Carousel'
import CircularProgress from '../../components/CircularProgress/CircularProgress'
import MovieService from '../../services/MovieService'
import './Movie.scss'

const Movie = () => {
    const params = useParams()
    const location = useLocation();
    const [movieWithActors, setMovieWithActors] = useState({"movie": {'genres': []}, 'actors': [], 'video': {}})
    const [tv, setTv] = useState({seasons:[]})

    useEffect(() => {
        if(location.pathname.substring(1,location.pathname.lastIndexOf("/"))==='movie') {
            MovieService
            .getMovie(params.id, location.pathname.substring(1,location.pathname.lastIndexOf("/"))).then(value => {
                setMovieWithActors(value)
                console.log(value)
            })
        }
        else {
            MovieService.getTv(params.id).then(value => setTv(value.tv))
        }
    }, [])
    
    return (
        <div className='container'>
            {location.pathname.substring(1,location.pathname.lastIndexOf("/"))==='movie' ? 
            <>
                <h3 className='movie-title'>{movieWithActors.movie.title}</h3>
                <div className='movie'>
                    <div className='movie-image'>
                        <img src={`https://image.tmdb.org/t/p/w500/${movieWithActors.movie.backdrop_path}`} alt='' />
                    </div>
                    <div className='movie-content'>
                        <div className='movie-details'>
                            <p>
                                {movieWithActors.movie.release_date} {`${Math.floor(movieWithActors.movie.runtime/60)}h ${movieWithActors.movie.runtime%60}m`}
                            </p>
                        </div>
                        <div className='description'>
                            <p>
                                {movieWithActors.movie.overview}
                                <CircularProgress vote={movieWithActors.movie.vote_average}/>
                            
                            </p>
                            <p>
                            </p>
                        </div>
                        {/* <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${movieWithActors.video.key}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        /> */}
                        <ul className='categories'>
                            {movieWithActors.movie.genres.map( 
                                (element) => 
                                <li key={element.id}>{element.name}</li>
                            )}  
                        </ul>  
                    </div>
                </div>
                <Carousel data={movieWithActors.actors} />
            </> 
            : 
            <div>
                <h3 className='movie-title'>
                    {tv.name} 
                </h3>
                <div className='tvs'>
                    {tv.seasons.map(season => (
                        <div className='tv' key={season.id}>
                            <div className='tv-image'>
                                <img src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`} alt='' />
                            </div>
                            <div className='tv-content'>
                                <p>{season.name}</p>
                                <p>{season.episode_count} episodes</p>
                            </div>
                        </div>
                    ))}   
                </div>
            </div>
            }
        </div>
    )
}

export default Movie