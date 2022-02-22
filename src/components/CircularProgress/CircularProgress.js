import React from 'react'
import './CircularProgress.scss'

const CircularProgress = () => {
    return (
        <div class="circle-wrap">
            <div class="circle">
                <div class="mask full">
                    <div class="fill"></div>
                </div>
                <div class="mask half">
                    <div class="fill"></div>
                </div> 
                <div class="inside-circle">70%</div>
            </div>
        </div>
    )
}

export default CircularProgress