import React, { useState, useEffect, useRef } from 'react'
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import * as FcIcons from 'react-icons/fc';

import '../../Styles/SearchConduct.css';
import PropTypes from 'prop-types';
import {
    exportComponentAsJPEG,
    exportComponentAsPDF,
    exportComponentAsPNG
} from "react-component-export-image";


export const SearchConduct = ({ titleButton, icon, openModal, setSearch, setCurrentPage, setPage, onDownload, componentRef }) => {

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

                        <button type="button" className="btn btn-success" onClick={onDownload} data-toggle="tooltip" data-placement="top" title="Descargar Excel"><AiIcons.AiFillFileExcel /></button>
                        <button type="button" className="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Descargar PDF" onClick={() => exportComponentAsPDF(componentRef, { fileName: "Información Tabla", pdfOptions: { w: 300, h: 100, x: 0, y: 0 } })}><AiIcons.AiFillFilePdf /></button>

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

