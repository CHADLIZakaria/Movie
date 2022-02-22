import React, { useEffect, useState } from 'react'
import CardMovie from '../../components/CardMovie/CardMovie'
import MovieService from '../../services/MovieService'
import './Tv.scss'

const Tv = () => {
    const [movies, setMovies] = useState([])
    const [categories, setCategories]= useState([])
    const [selectedGenre, setSelectedGenre] = useState([])

    useEffect(() => {
        MovieService.getTvs(selectedGenre.join(',')).then(value => {
            setMovies(value.tvs.results)
            setCategories(value.genres)
        })
        
    }, [selectedGenre])
    
    const filterMovies = (id) => {
        setSelectedGenre(
            selectedGenre.includes(id) ? 
                selectedGenre.filter(genreId => genreId !== id) : 
                [...selectedGenre, id])
    }

    return (
        <div className='container'>
            <h3 className='movies-title'>Tv</h3>
            <div className='categories'>
                {categories.map(category => 
                    <button key={category.id} className={`category  ${selectedGenre.includes(category.id) && 'active'}`} onClick={() => filterMovies(category.id)}>{category.name}</button>    
                )}
            </div>
            <div className='list-movies'>
                {movies.map(movie => (
                    <CardMovie movie={movie} key={movie.id} />
                    ))}
            </div>
        </div>
    )
}

export default Tv