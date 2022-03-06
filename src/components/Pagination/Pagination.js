import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Pagination.scss'
const Pagination = ({totalPages, handleClick, page}) => {

    return (
            <ul className='pagination'>
                <li className='page-item' onClick={() => { if(page!==1) {handleClick(page-1)}}}>
                    <FontAwesomeIcon icon={faChevronLeft } />
                </li>
                {[...Array(totalPages).keys()]
                    .filter(paginate =>  
                        ((paginate >= ((page%5 !==0 ? (page) : (page-1)) -page%5) && paginate < (page%5 !== 0 ? page : page-1) - page % 5 + 5) || (paginate >= totalPages-5)))
                        .map(paginate => <li className={`page-item ${page===paginate+1 && 'active'}`} key={paginate} onClick={() => {handleClick(paginate+1)}}>{paginate+1}</li>)
                }
                <li className='page-item' onClick={() => {handleClick(page+1)}}>
                    <FontAwesomeIcon icon={faChevronRight } />
                </li>
            </ul>
        
    )
}

export default Pagination