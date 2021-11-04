import React, { useState } from 'react'
import '../../Styles/modal.css'
import * as AiIcons from 'react-icons/ai';
import { UseVehicleAvailable } from '../../hooks/UseCaseVehicle';

export const ModalRoute = ({ isOpenEditModal, closeModalEdit, titleModal }) => {

    const [state, setState] = useState({
        form: {
            id_ruta: '',
            codigo_ruta: '',
            nombre_producto: '',
            referencia: '',
            cantidad: '',
            fecha_inicio: '',
            fecha_fin: '',
            placa: '',
            flete: '',
            ciudad_origen: '',
            ciudad_destino: '',
            estado: '',
            identificacion: '',
            descripcion: '',
            nombre: '',
            
        }
    })

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    const handleSubmitRegisterRoute = (e) => {

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


    const { data: route, loading } = UseVehicleAvailable();

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
                                    <label>Codigo de Ruta *: </label>
                                    <input type="text" className="form-control" name="CodigoRuta" onChange={handleInputChange} />

                                    <label>Nombre Producto *: </label>
                                    <input type="text" className="form-control" name="nombreProducto" onChange={handleInputChange} />

                                    <label>Referencia*: </label>
                                    <input type="tex" className="form-control" name="referencia" onChange={handleInputChange} />
                                    
                                    <label>Cantidad *: </label>
                                    <input type="text" className="form-control" name="cantidad" onChange={handleInputChange} />

                                </div>
                                <div className="col">
                                    <label>Flete *: </label>
                                    <input type="text" className="form-control" name="flete" onChange={handleInputChange} />

                                    <label>Placa *: </label>
                                    <input type="text" className="form-control" name="placa" onChange={handleInputChange} />

                                    <label>Conductor *: </label>
                                    <input type="text" className="form-control" name="conductor" onChange={handleInputChange} />

                                </div>
                                <div className="col">
                                    <label>Ciudad Origen *: </label>
                                    <input type="text" className="form-control" name="ciudadOrigen" onChange={handleInputChange} />

                                    <label>Ciudad Destino *: </label>
                                    <input type="text" className="form-control" name="ciudadDestino" onChange={handleInputChange} />

                                    <label>Fecha Inicio *: </label>
                                    <input type="date" className="form-control" name="fechaInicio" onChange={handleInputChange} />

                                    <label>Fecha Fin *: </label>
                                    <input type="date" className="form-control" name="fechaFin" onChange={handleInputChange} />
                                </div>
                            </div>
                            <br /><br />

                            <button onClick={handleSubmitRegisterRoute}>Registrar Ruta</button>
                            <button>Cancelar registro</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
