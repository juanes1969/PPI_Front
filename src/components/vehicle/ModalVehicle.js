import React, { useState } from 'react'
import '../../Styles/modal.css'
import * as AiIcons from 'react-icons/ai';
import { UseVehicleAvailable } from '../../hooks/UseCaseVehicle';

export const ModalVehicle = ({ isOpenEditModal, closeModalEdit, titleModal }) => {

    const [state, setState] = useState({
        form: {
            placa: '',
            matricula: '',
            r_trailer: '',
            capacidad: '',
            fecha_soat: '',
            fecha_poliza: '',
            modelo: '',
            fecha_tecnomecanica: '',
            id_marca: '',
            id_tipo: '',
        }
    })

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    const handleSubmitRegisterVehicle = (e) => {

        e.preventDefault();

    }

    const handleInputChange = async (e) => {
        await setState({
            form: {
                ...state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(e.target.value)
    }


    const { data: vehicle, loading } = UseVehicleAvailable();

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
                                    <label>Placa *: </label>
                                    <input type="text" className="form-control" name="identificacion" onChange={handleInputChange} />

                                    <label>Placa Trailer: </label>
                                    <input type="text" className="form-control" name="segundoApellido" onChange={handleInputChange} />

                                    <label>Fecha Poliza *: </label>
                                    <input type="date" className="form-control" name="examenesMedicos" onChange={handleInputChange} />
                                    
                                    <label>Capacidad (Toneladas) *: </label>
                                    <input type="text" className="form-control" name="examenesMedicos" onChange={handleInputChange} />

                                </div>
                                <div className="col">
                                    <label>Marca *: </label>
                                    <input type="text" className="form-control" name="nombre" onChange={handleInputChange} />

                                    <label>Modelo *: </label>
                                    <input type="text" className="form-control" name="telefono" onChange={handleInputChange} />

                                    <label>Fecha SOAT *: </label>
                                    <input type="date" className="form-control" name="fechaCursoSeguridad" onChange={handleInputChange} />

                                </div>
                                <div className="col">
                                    <label>Tipo vehículo *: </label>
                                    <input type="text" className="form-control" name="primerApellido" onChange={handleInputChange} />

                                    <label>Matrícula *: </label>
                                    <input type="text" className="form-control" name="fechaNacimiento" onChange={handleInputChange} />

                                    <label>Fecha Técnico Mecánica *: </label>
                                    <input type="date" className="form-control" name="fechaCursoIndustrial" onChange={handleInputChange} />
                                </div>
                            </div>
                            <br /><br />

                            <button onClick={handleSubmitRegisterVehicle}>Registrar Vehículo</button>
                            <button>Cancelar registro</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
