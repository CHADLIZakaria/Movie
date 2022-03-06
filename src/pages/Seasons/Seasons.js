import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BasicCard from '../../components/BasicCard/BasicCard'
import MovieService from '../../services/MovieService'
import './Seasons.scss'


const Seasons = () => {
    const params = useParams()
    const [tv, setTv] = useState({seasons:[]})
    const navigate = useNavigate()

    useEffect(() => {
        MovieService.getTv(params.id).then(value => setTv(value.tv)) 
    }, [])
    
    return (
        <div className='container'>
            <div>
                <h3 className='movie-title'>
                    {tv.name} 
                </h3>
                <div className='seasons'>
                    {tv.seasons.map(season => (
                        <BasicCard 
                            key={season.id}
                            title={season.name}
                            subtitle={`Nombre d'épisode ${season.episode_count}`}
                            image={`https://image.tmdb.org/t/p/w300/${season.poster_path}`}
                            onClick={() => navigate(`/tv/${params.id}/season/${season.season_number}`)}
                        />
                    ))}   
                </div>
            </div>
        </div>
    )
}

export default Seasons