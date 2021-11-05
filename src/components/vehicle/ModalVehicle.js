import React, { useState } from 'react'
import '../../Styles/modal.css'
import * as AiIcons from 'react-icons/ai';
import { UseTypeVehicle, UseMarca } from '../../hooks/UseCaseVehicle';
import {insertVehicle} from "../../helpers/VehicleHelper"

export const ModalVehicle = ({ isOpenEditModal, closeModalEdit, titleModal }) => {

    const initialVehicleState = {
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
      };

    const [vehicle, setVehicle] = useState(initialVehicleState);
    const [submitted, setSubmitted] = useState(false);


    const handleInputChange = event => {
        const { name, value } = event.target;
        setVehicle({ ...vehicle, [name]: value });
      };
    
      const saveVehicle = () => {
        var data = {
            placa:vehicle.placa,
            matricula: vehicle.matricula,
            r_trailer: vehicle.r_trailer,
            capacidad: vehicle.capacidad,
            fecha_soat: vehicle.fecha_soat,
            fecha_poliza: vehicle.fecha_poliza,
            modelo: vehicle.modelo,
            fecha_tecnomecanica: vehicle.fecha_tecnomecanica,
            id_marca: vehicle.id_marca,
            id_tipo: vehicle.id_tipo,
            id_estado_vehiculo: 1
        };
    
        insertVehicle(data)
          .then(response => {
            setVehicle({
              placa: response.data.placa,
              matricula: response.data.matricula,
              r_trailer: response.data.r_trailer,
              capacidad: response.data.capacidad,
              fecha_soat: response.data.fecha_soat,
              fecha_poliza: response.data.fecha_poliza,
              modelo: response.data.modelo,
              fecha_tecnomecanica: response.data.fecha_tecnomecanica,
              id_marca: response.data.id_marca,
              id_tipo: response.data.id_tipo
            });
            setSubmitted(true);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
   
    // const [state, setState] = useState({
    //     form: {
    //         placa: '',
    //         matricula: '',
    //         r_trailer: '',
    //         capacidad: '',
    //         fecha_soat: '',
    //         fecha_poliza: '',
    //         modelo: '',
    //         fecha_tecnomecanica: '',
    //         id_marca: '',
    //         id_tipo: '',
    //     }
    // })

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    const handleSubmitRegisterVehicle = (e) => {

        e.preventDefault();

    }

    // const handleInputChange = async (e) => {
    //     await setState({
    //         form: {
    //             ...state.form,
    //             [e.target.name]: e.target.value
    //         }
    //     });
    //     console.log(e.target.value)
    // }

    const { data:type} = UseTypeVehicle()

    const { data: marcas, loading } = UseMarca();

    return (
        <>
            <div className={`modalInicial ${isOpenEditModal && 'modal-abierta'}`}  onClick={closeModalEdit}>
                <div className="modal-dialog">
                    <div className="modal-content contenido__modal" onClick={handleModalDialogClick}>
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">{titleModal}</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModalEdit}></button>
                        </div>
                    
                        <div className="modal-body">
                            <div className="container">
                                <form className="form-modal">
                                    <div className="row align-items-start">
                                        <div className="col">
                                            <label>Placa *: </label>
                                            <input type="text" className="form-control" name="placa" value={vehicle.placa} onChange={handleInputChange} required/>

                                            <label>Placa Trailer: </label>
                                            <input type="text" className="form-control" name="r_trailer" value={vehicle.r_trailer} onChange={handleInputChange} />

                                            <label>Fecha Poliza *: </label>
                                            <input type="date" className="form-control" name="fecha_poliza" value={vehicle.fecha_poliza} onChange={handleInputChange} required/>
                                            
                                            <label>Capacidad (Toneladas) *: </label>
                                            <input type="text" className="form-control" name="capacidad" value={vehicle.capacidad} onChange={handleInputChange} required/>

                                        </div>
                                        <div className="col">
                                            <label>Marca *: </label>
                                            <select className="form-control" name="id_marca" value={vehicle.id_marca} onChange={handleInputChange} required>
                                                <option value="0">Seleccionar</option>
                                                {marcas.map((marca) => (
                                                    <option key={marca.id_marca} value={marca.id_marca}>{marca.marcaVehiculo}</option>
                                                ))}
                                            </select>


                                            <label>Modelo *: </label>
                                            <input type="text" className="form-control" name="modelo" value={vehicle.modelo} onChange={handleInputChange} required/>

                                            <label>Fecha SOAT *: </label>
                                            <input type="date" className="form-control" name="fecha_soat" value={vehicle.fecha_soat} onChange={handleInputChange} required/>

                                        </div>
                                        <div className="col">

                                            <label>Tipo Vehículo *: </label>
                                            <select className="form-control" name="id_tipo" value={vehicle.id_tipo} onChange={handleInputChange} required>
                                                <option value="0">Seleccionar</option>
                                                {type.map((type) => (
                                                    <option key={type.id_tipo} value={type.id_tipo}>{type.tipoVehiculo}</option>
                                                ))}
                                            </select>

                                            <label>Matrícula *: </label>
                                            <input type="text" className="form-control" name="matricula" value={vehicle.matricula} onChange={handleInputChange} required/>

                                            <label>Fecha Técnico Mecánica *: </label>
                                            <input type="date" className="form-control" name="fecha_tecnomecanica" value={vehicle.fecha_tecnomecanica} onChange={handleInputChange} required/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer modal-btn">
                                <button type="button" className="btn btn-info" onClick={saveVehicle}>Registrar Vehículo</button>
                                <button type="button" className="btn  btn-danger" onClick={closeModalEdit}>Cancelar registro</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
