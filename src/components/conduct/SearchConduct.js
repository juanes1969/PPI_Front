import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import * as FcIcons from 'react-icons/fc';

import '../../Styles/SearchConduct.css';
import PropTypes from 'prop-types';


<<<<<<< HEAD
export const SearchConduct = ({ titleButton, icon, openModal, setSearch, setCurrentPage, setPage }) => {

    const onSearchChange = ({ target }) => {
        setCurrentPage(0)
        setPage(1)
        setSearch(target.value)
    }

=======
>>>>>>> feat/Rutas


export const SearchConduct = ({ titleButton, icon, openModal}) => {
    

    
    return (
        <>
            <nav className="navbar navbar-light bg-light" id="navbarI">
                <div className="container-fluid">
                    <div className="navbar-brand" id="buttonsActions">
                        <button type="button" className="btn btn-warning" id="buttonAdd" onClick={openModal}>{icon} {titleButton}</button>
                    </div>
<<<<<<< HEAD
                    <form className="d-flex navbar-brand" id="formSearch">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" onChange={onSearchChange} />
                        <button className="btn btn-outline-success" type="submit"><FcIcons.FcSearch /></button>
                    </form>
=======
                   
>>>>>>> feat/Rutas
                </div>
            </nav>
        </>
    )
}

SearchConduct.propTypes = {
    titleButton: PropTypes.string.isRequired,
    evento: PropTypes.string.isRequired

}

