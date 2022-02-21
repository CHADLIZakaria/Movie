import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CardMovie from '../../components/CardMovie/CardMovie'
import MovieService from '../../services/MovieService'
import './Tv.scss'

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [categories, setCategories]= useState([])
    const [selectedGenre, setSelectedGenre] = useState([])
    
    const {pathname} = useLocation()

    useEffect(() => {
        if(pathname==='/')
            MovieService.trendingMovie().then(value => {
                setMovies(value.results)
            })
            else if(pathname==='/movies') {
                MovieService.getMovies(selectedGenre.join(',')).then(value => {
                    setMovies(value.movies.results)
                    setCategories(value.categories.genres)
            })
        }
        else if(pathname==='/tvs') {
            MovieService.getTvs(selectedGenre.join(',')).then(value => {
                setMovies(value.tvs.results)
                setCategories(value.genres)
            })
        }
    }, [pathname, selectedGenre])
    
    const filterMovies = (id) => {
        setSelectedGenre(
            selectedGenre.includes(id) ? 
                selectedGenre.filter(genreId => genreId != id) : 
                [...selectedGenre, id])
    }

    return (
        <div className='container'>
            <h3 className='movies-title'>{`${pathname==='/' ? 'TRENDING' : pathname.substring(1).toLocaleUpperCase()}`}</h3>
            {pathname !=='/' && 
            <div className='categories'>
                {categories.map(category => 
                    <button key={category.id} className={`category  ${selectedGenre.includes(category.id) && 'active'}`} onClick={() => filterMovies(category.id)}>{category.name}</button>    
                )}
            </div>
            }
            <div className='list-movies'>
                {movies.map(movie => (
                    <CardMovie movie={movie} key={movie.id} />
                    ))}
            </div>
        </div>
    )
}

export default Movies