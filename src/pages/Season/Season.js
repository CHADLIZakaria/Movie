import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CardWithTitle from '../../components/CardWithTitle/CardWithTitle'
import MovieService from '../../services/MovieService'
import './Season.scss'

const Season = () => {
    const params = useParams()
    const [season, setSeason] = useState({episodes: []})
    const navigate = useNavigate()

    useEffect(() => {
        console.log(params.id+" "+params.seasonNumber)
        MovieService.getSeason(params.id, params.seasonNumber).then(value => {setSeason(value); console.log(value)})
    }, [])
    
    return (
        <div className='container'>
            <div className='episodes'>
                {season.episodes.map(episode => (
                    <CardWithTitle 
                        title={`Episode ${episode.episode_number} ${episode.name==='Episode '+episode.episode_number ? '': episode.name}`}
                        subtitle={episode.overview}
                        note={episode.vote_average}
                        image={`https://image.tmdb.org/t/p/w300/${episode.still_path}`}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default Season