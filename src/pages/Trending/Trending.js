import React, { useEffect, useState } from 'react'
import CardMovie from '../../components/CardMovie/CardMovie'
import Pagination from '../../components/Pagination/Pagination'
import Title from '../../components/Title/Title'
import MovieService from '../../services/MovieService'

const Trending = () => {
    const [trending, setTrending] = useState({results: []})
    const [isLoaded, setIsLoaded] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    
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
                            <CardMovie movie={movie} key={movie.id} />
                            ))}
                    </div>
                    <Pagination totalPages = {trending.total_pages} handleClick={handleClick} page={currentPage} />
                </>
            }
        </div>
    )
}

export default Trending