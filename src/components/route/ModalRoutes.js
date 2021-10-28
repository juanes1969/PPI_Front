import React from 'react'
import '../../Styles/modal.css'
import * as AiIcons from 'react-icons/ai';

export const ModalRoutes = ({ isOpen, closeModal, title }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            <div className={`modalInicial ${isOpen && 'modal-abierta'}`} onClick={closeModal}>
                <div className="contenido__modal" onClick={handleModalDialogClick}>
                    <button id="btnCloseModalRoutes" onClick={closeModal}>
                        <AiIcons.AiOutlineClose />
                    </button>
                    <h1>{title}</h1>                    
                </div>
            </div>
        </>
    )
}

