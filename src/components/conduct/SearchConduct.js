import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import * as FcIcons from 'react-icons/fc';

import '../../Styles/SearchConduct.css';
import PropTypes from 'prop-types';




export const SearchConduct = ({ titleButton, icon, openModal}) => {
    

    
    return (
        <>
            <nav className="navbar navbar-light bg-light" id="navbarI">
                <div className="container-fluid">
                    <div className="navbar-brand" id="buttonsActions">
                        <button type="button" className="btn btn-warning" id="buttonAdd" onClick={openModal}>{icon} {titleButton}</button>
                    </div>
                   
                </div>
            </nav>
        </>
    )
}

SearchConduct.propTypes = {
    titleButton: PropTypes.string.isRequired,
    evento: PropTypes.string.isRequired

}

