import React from 'react'
import '../../Styles/modal.css'
import * as AiIcons from 'react-icons/ai';

export const ModalCreateConduct = ({ isOpenEditModal, closeModalEdit, titleModal }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <>
            <div className={`modalInicial ${isOpenEditModal && 'modal-abierta'}`} onClick={closeModalEdit}>
                <div className="contenido__modal" onClick={handleModalDialogClick}>
                    <button id="btnCloseModalRoutes" onClick={closeModalEdit}>
                        <AiIcons.AiOutlineClose />
                    </button>

                    <h1>{titleModal}</h1>


                    <div className="container">
                        <form className="form-modal">
                            <div className="row align-items-start">
                                <div className="col">
                                    <label>Identificacion: </label>
                                    <input type="text" className="form-control"/>

                                    <label>Identificacion: </label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col">
                                    One of three columns
                                </div>
                                <div className="col">
                                    One of three columns
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
