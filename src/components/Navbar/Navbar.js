import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='nav-movies'>
            <ul className='links'>
                <li className='link'>
                    <Link to="/">
                        Trending
                    </Link> 
                </li>
                <li className='link'>
                    <Link to="/movies">
                        Movies
                    </Link> 
                </li>
                <li className='link'>
                    <Link to="/tvs">
                        Tv
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar