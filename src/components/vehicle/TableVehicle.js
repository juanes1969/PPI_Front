import React, { useState } from 'react'
import { Pagination } from '../conduct/Pagination'
import { SearchConduct } from '../conduct/SearchConduct';
import '../../Styles/tableConduct.css'
import * as IoIcons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import { UseModal } from '../../hooks/UseModal';
import { ModalVehicle } from './ModalVehicle';
import { UseDeleteVehicle, UseEffectGetVehicles } from '../../hooks/UseCaseVehicle';
import { Loader } from '../globalComponents/Loader';

export const Vehicle = () => {

    const [isOpenModalVehicle, openModalVehicle, closeModalVehicle] = UseModal();
    const { data, loading } = UseEffectGetVehicles();
    const [vehicleData, setVehicleData] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    const handleDeleteVehicle = (placa) => {
        console.log(placa)
        UseDeleteVehicle(placa);
    }

    const getByIdEdit = (conduct) => {
        console.log(conduct)
        setVehicleData(conduct);
        setIsEdit(true);
        openModalVehicle();
    }

    return (
        <>
            <div className="container" id="contenedorInicial">
                <h1>Vehículos</h1>
                <span>
                    <SearchConduct titleButton={"Agregar Vehículos"} icon={<IoIcons.IoCarSportSharp />} openModal={openModalVehicle} />
                </span>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Placa</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Capacidad</th>
                                <th scope="col">Matrícula</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Tipo Vehículo</th>
                                <th scope="col">Estado Vehículo</th>
                                <th scope="col" colSpan="3">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {loading && <Loader />} */}
                            {data.map((vehicle) => (
                                <tr key={vehicle.placa}>
                                    <td>{vehicle.placa}</td>
                                    <td>{vehicle.marca}</td>
                                    <td>{vehicle.capacidad}</td>
                                    <td>{vehicle.matricula}</td>
                                    <td>{vehicle.modelo}</td>
                                    <td>{vehicle.tipoVehiculo}</td>
                                    <td>{vehicle.estadoVehiculo}</td>
                                    <td id="columOptions">
                                        <button className="btn btn-warning btn-sm"><BsIcons.BsFillEyeFill /></button>
                                        <button className="btn btn-info btn-sm" onClick={() => getByIdEdit(vehicle)} ><RiIcons.RiEditFill /></button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteVehicle(vehicle.placa)}><AiIcons.AiFillDelete /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </div>

            <ModalVehicle
                isOpenModal={isOpenModalVehicle}
                closeModal={closeModalVehicle}
                vehicle={vehicleData}
                setVehicleData={setVehicleData}
                isEdit={isEdit}
            />

        </>
    )
}
