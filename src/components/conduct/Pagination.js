import React from 'react'
import '../../Styles/pagination.css'

export const Pagination = () => {
    return (
        <>        
            <nav className="navbar navbar-light bg-light" id="navbarPaginationItems">                
                <div className="container-fluid">
                    <div className="navbar-brand" id="showNumberItems">                    
                        <select className="form-select form-select-sm mb-3">                                            
                            <option value="1" defaultValue>5</option>
                            <option value="2">10</option>
                            <option value="3">15</option>
                            <option value="3">20</option>
                        </select>
                    </div>
                    <form className="d-flex navbar-brand" id="paginationItems">
                        <ul className="pagination justify-content-end pagination-sm">
                            <li className="page-item disabled">
                                <a className="page-link">Anterior</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Siguiente</a>
                            </li>
                        </ul>
                    </form>
                </div>
            </nav>           
        </>
    )
}
