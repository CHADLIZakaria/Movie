import React, { useEffect, useState } from 'react'
import CardMovie from '../../components/CardMovie/CardMovie'
import Pagination from '../../components/Pagination/Pagination'
import MovieService from '../../services/MovieService'
const Movies = () => {
    const [movies, setMovies] = useState({results: []})
    const [categories, setCategories]= useState([])
    const [selectedGenre, setSelectedGenre] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    
    const handleClick = (number) => {
        setCurrentPage(number)
    }
    

    useEffect(() => {
        window.scroll(0, 0)
        MovieService.getMovies(selectedGenre.join(','), currentPage).then(value => {
            setMovies(value.movies)
            setCategories(value.categories.genres)
        })
    }, [selectedGenre, currentPage])
    
    const filterMovies = (id) => {
        setCurrentPage(1)
        setSelectedGenre(
            selectedGenre.includes(id) ? 
                selectedGenre.filter(genreId => genreId !== id) : 
                [...selectedGenre, id])
    }

    return (
        <div className='container'>
            <h3 className='movies-title'>MOVIES</h3>
            <div className='categories'>
                {categories.map(category => 
                    <button key={category.id} className={`category  ${selectedGenre.includes(category.id) && 'active'}`} onClick={() => filterMovies(category.id)}>{category.name}</button>    
                )}
            </div>
            <div className='list-movies'>
                {movies.results.map(movie => (
                    <CardMovie movie={movie} key={movie.id} />
                ))}
            </div>
            <Pagination totalPages = {movies.total_pages} handleClick={handleClick} page={currentPage} />
        </div>
    )
}

export default Movies