import React from 'react'
import '../../Styles/pagination.css'

export const Pagination = ({ nextPage, prevPage, page, setPerPage, setCurrentPage, setPage }) => {


    const handleInputChange = (e) => {                            
        setPerPage(e.target.value)        
        setPage(1);
        setCurrentPage(0);        
    }

    return (
        <>
            <nav className="navbar navbar-light bg-light" id="navbarPaginationItems">
                <div className="container-fluid">
                    <div className="navbar-brand" id="showNumberItems">
                        <select className="form-select form-select-sm mb-3" name='pageQuantity' onChange={handleInputChange}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                        </select>
                    </div>
                    <form className="d-flex navbar-brand" id="paginationItems">
                        <ul className="pagination justify-content-end pagination-sm">
                            <li className="page-item">
                                <button className='page-link' onClick={prevPage}>Previous</button>
                            </li>
                            <span className="page-link disabled">{page}</span>
                            <li className="page-item">
                                <button className='page-link' onClick={nextPage}> Next</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>
        </>
    )
}
