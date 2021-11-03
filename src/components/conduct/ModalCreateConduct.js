import React, { useState } from 'react'
import '../../Styles/modal.css'
import * as AiIcons from 'react-icons/ai';
import { UseTypeVehicle } from '../../hooks/UseEfect';

export const ModalCreateConduct = ({ isOpenEditModal, closeModalEdit, titleModal }) => {

    const [state, setState] = useState({
        form: {
            identificacion: '',
            nombre: '',
            primerApellido: '',
            segundoApellido: '',
            telefono: '',
            fechaNacimiento: '',
            licenciaConduccion: '',
            fechaCursoSeguridad: '',
            fechaCursoIndustrial: '',
            examenesMedicos: '',
            tipoVehiculo: '',
        }
    })

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    const handleSubmitRegisterConduct = (e) => {

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


    const { data: vehicle, loading } = UseTypeVehicle();

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
                                    <label>Identificación: </label>
                                    <input type="text" className="form-control" name="identificacion" onChange={handleInputChange} />

                                    <label>Segundo apellido: </label>
                                    <input type="text" className="form-control" name="segundoApellido" onChange={handleInputChange} />

                                    <label>Licencia conducción: </label>
                                    <input type="text" className="form-control" name="licenciaConduccion" onChange={handleInputChange} />

                                    <label>Exámenes médicos: </label>
                                    <input type="date" className="form-control" name="examenesMedicos" onChange={handleInputChange} />

                                </div>
                                <div className="col">
                                    <label>Nombre: </label>
                                    <input type="text" className="form-control" name="nombre" onChange={handleInputChange} />

                                    <label>Telefono contacto: </label>
                                    <input type="text" className="form-control" name="telefono" onChange={handleInputChange} />

                                    <label>Fecha curso seguridad: </label>
                                    <input type="date" className="form-control" name="fechaCursoSeguridad" onChange={handleInputChange} />

                                    <label>Vehículos disponibles: </label>
                                    <select className="form-control" name="tipoVehiculo" onChange={handleInputChange}>
                                        <option value="0">Seleccionar</option>
                                        {vehicle.map((vehcl) => (
                                            <option value={vehcl.id_vehiculo}>{vehcl.placa}</option>
                                        ))}
                                    </select>

                                </div>
                                <div className="col">
                                    <label>Primer apellido: </label>
                                    <input type="text" className="form-control" name="primerApellido" onChange={handleInputChange} />

                                    <label>Fecha nacimiento: </label>
                                    <input type="date" className="form-control" name="fechaNacimiento" onChange={handleInputChange} />

                                    <label>Fecha curso industrial: </label>
                                    <input type="date" className="form-control" name="fechaCursoIndustrial" onChange={handleInputChange} />
                                </div>
                            </div>
                            <br /><br />

                            <button onClick={handleSubmitRegisterConduct}>Registrar conductor</button>
                            <button>Cancelar registro</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
