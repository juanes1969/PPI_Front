import React from 'react'
import "../../Styles/modal.css";

export const ModalVisualize = ({ isOpenModalVisualize, closeModalVisualize }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            <div
                className={`modalInicial ${isOpenModalVisualize && "modal-abierta"}`}
                onClick={closeModalVisualize}
            >
                <div className="modal-dialog">
                    <div
                        className="modal-content modal-conduct contenido__modal"
                        onClick={handleModalDialogClick}
                    >
                        <div className="modal-header">
                            <img className="logo-form" alt="logo" />
                            <h3 className="modal-title" id="exampleModalLabel">



                            </h3>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={closeModalVisualize}
                            ></button>
                        </div>

                        <div className="modal-body">
                            <div className="container">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
