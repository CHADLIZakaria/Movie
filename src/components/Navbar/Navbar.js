import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='nav-movies'>
            <ul className='links'>
                <li>
                    <Link to="/">
                        Trending
                    </Link> 
                </li>
                <li>Movies</li>
                <li>Tv</li>
            </ul>
        </nav>
    )
}

export default Navbar