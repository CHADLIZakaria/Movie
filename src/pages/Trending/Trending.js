import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CardWithTitle from '../../components/CardWithTitle/CardWithTitle'
import Pagination from '../../components/Pagination/Pagination'
import Title from '../../components/Title/Title'
import MovieService from '../../services/MovieService'

const Trending = () => {
    const [trending, setTrending] = useState({results: []})
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const navigate = useNavigate()
    
    const handleClick = (number) => {
        setCurrentPage(number)
    }
    
    useEffect(() => {
        window.scroll(0, 0)
        MovieService.trendingMovie(currentPage).then(value => {
            setTrending(value)
            setIsLoaded(true)
        })
    }, [currentPage])
    
    return (
        <div className='container'>
            <Title title={'Populaire'} />
            {isLoaded && 
                <>
                    <div className='list-movies'>
                        {trending.results.map(movie => (
                            <CardWithTitle 
                                title={movie.title == null ? movie.name : movie.title} 
                                image={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                note={movie.vote_average}
                                subtitle={movie.overview} 
                                onClick={() => navigate(`/${movie.media_type==='movie' ? 'movie':'tv'}/${movie.id}`)}
                            />
                            ))}
                    </div>
                    <Pagination totalPages = {trending.total_pages} handleClick={handleClick} page={currentPage} />
                </>
            }
        </div>
    )
}

export default Trending