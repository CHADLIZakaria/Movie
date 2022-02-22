import React from 'react'
import './Pagination.scss'
const Pagination = ({totalPages, handleClick, page}) => {
    return (
            <ul className='pagination'>
                {[...Array(totalPages).keys()]
                    .filter(paginate =>  
                        ((paginate >= ((page%5 !==0 ? (page) : (page-1)) -page%5) && paginate < (page%5!==0 ? page : page-1) - page % 5 + 5) || (paginate >= totalPages-5)))
                        .map(paginate => <li className={`page-item ${page===paginate+1 && 'active'}`} key={paginate} onClick={() => {handleClick(paginate+1)}}>{paginate+1}</li>)
                }
            </ul>
        
    )
}

export default Pagination