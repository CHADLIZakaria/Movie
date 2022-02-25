import React from 'react'
import './CircularProgress.scss'

const CircularProgress = ({vote}) => {
    return (
        <div className="circle-wrap">
            <div className="circle">
                <div className="mask half">
                    <div className={`fill ${vote >= 5 ? 'good' : 'bad'}`} style={{transform: `rotate(${vote * 10 * 180 / 100}deg)`}}></div>
                </div>
                <div className="mask full" style={{transform: `rotate(${vote * 10 * 180 / 100}deg)`}}>
                    <div className={`fill ${vote >= 5 ? 'good' : 'bad'}`} style={{transform: `rotate(${vote * 10 * 180 / 100}deg)`}}></div>
                </div>
                <div className="inside-circle">{vote*10}%</div>
            </div>
        </div>
    )
}

export default CircularProgress