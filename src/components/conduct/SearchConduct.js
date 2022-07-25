import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import * as FcIcons from 'react-icons/fc';

import '../../Styles/SearchConduct.css';
import PropTypes from 'prop-types';


export const SearchConduct = ({ titleButton, icon, openModal, setSearch, setCurrentPage, setPage,onDownload }) => {

    const onSearchChange = ({ target }) => {
        setCurrentPage(0)
        setPage(1)
        setSearch(target.value)
    }


    return (
        <>
            <nav className="navbar navbar-light bg-light" id="navbarI">
                <div className="container-fluid">
                    <div className="navbar-brand" id="buttonsActions">
                        <button type="button" className="btn btn-success" onClick={onDownload} ><AiIcons.AiFillFileExcel /></button>
                        <button type="button" className="btn btn-danger"><AiIcons.AiFillFilePdf /></button>
                       
                        <button type="button" className="btn btn-warning" id="buttonAdd" onClick={openModal}>{icon} {titleButton}</button>
                    </div>
                    <form className="d-flex navbar-brand" id="formSearch">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" onChange={onSearchChange} />
                        <button className="btn btn-outline-success" type="submit"><FcIcons.FcSearch /></button>
                    </form>
                </div>
            </nav>
        </>
    )
}

SearchConduct.propTypes = {
    titleButton: PropTypes.string.isRequired    

}

