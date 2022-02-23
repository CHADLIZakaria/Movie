import React, { useEffect, useState } from 'react'
import CardMovie from '../../components/CardMovie/CardMovie'
import Pagination from '../../components/Pagination/Pagination'
import Title from '../../components/Title/Title'
import MovieService from '../../services/MovieService'

const Tv = () => {
    const [movies, setMovies] = useState({results: []})
    const [categories, setCategories]= useState([])
    const [selectedGenre, setSelectedGenre] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    
    const handleClick = (number) => {
        setCurrentPage(number)
    }

    useEffect(() => {
        window.scroll(0, 0)
        MovieService.getTvs(selectedGenre.join(',')).then(value => {
            setMovies(value.tvs)
            setCategories(value.genres)
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
            <Title title={'Emission téléviser'}/>
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

export default Tv