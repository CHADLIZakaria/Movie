import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CardMovie from '../components/CardMovie/CardMovie'
import MovieService from '../services/MovieService'
import './Movies.scss'

const Movies = () => {
    const [movies, setMovies] = useState([])
    const {pathname} = useLocation()

    useEffect(() => {
        if(pathname==='/')
            MovieService.trendingMovie().then(value => {
                setMovies(value.results)
            })
        else if(pathname==='/movies') {
            MovieService.getMovies().then(value => {
                setMovies(value.results)
            })
        }
        else if(pathname==='/tvs') {
            MovieService.getTvs().then(value => {
                setMovies(value.results)
            })
        }
    }, [pathname])
    

    return (
        <div className='container'>
            <h3 className='movies-title'>{`All ${pathname==='/' ? 'TRENDING' : pathname.substring(1).toLocaleUpperCase()}`}</h3>
            <div className='list-movies'>
                {movies.map(movie => (
                    <CardMovie movie={movie} key={movie.id} />
                    ))}
            </div>
        </div>
    )
}

export default Movies