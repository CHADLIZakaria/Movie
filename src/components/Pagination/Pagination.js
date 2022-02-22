import React from 'react'
import './Pagination.scss'
const Pagination = ({totalPages, handleClick, page}) => {
    console.log(page)
    return (
            <ul className='pagination'>
                {
                    (page % 5 === 0) ?
                        [...Array(totalPages).keys()]
                            .filter(paginate =>  
                                (paginate >= page-1 && paginate < page + 4))
                                .map(paginate => <li className={`page-item ${page===paginate+1 && 'active'}`} key={paginate} onClick={() => {handleClick(paginate+1)}}>{paginate+1}</li>)
                        :
                        [...Array(totalPages).keys()]
                            .filter(paginate =>  
                                (paginate >= page-1 && paginate < page + 4))
                                .map(paginate => <li className={`page-item ${page===paginate+1 && 'active'}`} key={paginate} onClick={() => {handleClick(paginate+1)}}>{paginate+1}</li>)
                }
            </ul>
        
    )
}

export default Pagination