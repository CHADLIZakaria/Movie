import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardWithTitle from '../../components/CardWithTitle/CardWithTitle'
import Pagination from '../../components/Pagination/Pagination'
import MovieService from '../../services/MovieService'
const Movies = () => {
    const [movies, setMovies] = useState({results: []})
    const [categories, setCategories]= useState([])
    const [selectedGenre, setSelectedGenre] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [formChange, setFormChange] = useState({keyword:''})
    const navigate = useNavigate()
    
    const handleClick = (number) => {
        setCurrentPage(number)
    }
    
    const setCurrentChange = (e) => {
        setFormChange({...formChange, [e.target.name]: e.target.value})
    } 

    useEffect(() => {
        window.scroll(0, 0)
        if(formChange.keyword !== '') {
            MovieService.searchMovie('movie', formChange.keyword, currentPage).then(
                value => setMovies(value)
            )
        }
        else {
            MovieService.getMovies(selectedGenre.join(','), currentPage)
            .then(value => {
                setMovies(value)
            })
            .then(() => 
            MovieService.getCategories('movie').then(data => {
                setCategories(data.genres)
            }))
        }
    }, [selectedGenre, currentPage])
    
    const filterMovies = (id) => {
        setCurrentPage(1)
        setFormChange({...formChange, keyword: ''})
        setSelectedGenre(
            selectedGenre.includes(id) ? 
                selectedGenre.filter(genreId => genreId !== id) : 
                [...selectedGenre, id])
    }
    const searchMovie = (e)  => {
        e.preventDefault()
        setSelectedGenre([])
        MovieService.searchMovie('movie', formChange.keyword, currentPage).then(value => {
            setMovies(value)
        })
    }

    return (
        <div className='container'>
            <header className='header'>
                <h3 className='movies-title'>MOVIES</h3>
                <form onSubmit={searchMovie} className='form-search'>
                    <input  type="text" 
                            name="keyword" 
                            onChange={setCurrentChange} 
                            value={formChange.keyword} />
                    <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /> </button>
                </form>
            </header>
            <div className='wrapper-content'>
                <div className='categories'>
                    {categories.map(category => 
                        <button key={category.id} className={`category  ${selectedGenre.includes(category.id) && 'active'}`} onClick={() => filterMovies(category.id)}>{category.name}</button>    
                    )}
                </div>
                <div className='list-movies'>
                    {movies.results.map(movie => (
                        <CardWithTitle 
                        key={movie.id}
                        title={movie.title == null ? movie.name : movie.title} 
                        image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                        note={movie.vote_average}
                        subtitle={movie.overview} 
                        onClick={() => navigate(`/movie/${movie.id}`)}
                        />
                        ))}
                </div>
            </div>
            <Pagination totalPages = {movies.total_pages} handleClick={handleClick} page={currentPage} />
        </div>
    )
}

export default Movies