import React, { useEffect, useRef, useState } from 'react'
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
import { getAllVehicles } from "../../helpers/VehicleHelper";
import { UsePage } from '../../hooks/UsePage';
import { useDownloadExcel } from "table-to-excel-react";


export const Vehicle = () => {

    const { onDownload } = useDownloadExcel({
        fileName: "Vehiculos",
        table: "tbl_vehiculos",
        sheet: "sheet 1",
    });

    const [isOpenModalVehicle, openModalVehicle, closeModalVehicle] = UseModal();
    const { data, loading } = UseEffectGetVehicles();
    const [vehicles, setVehicles] = useState([]);
    const [vehicleEdit, setVehicleEdit] = useState(null);
    const vehicleRef = useRef();
    const [perPage, setPerPage] = useState(5);
    const [search, setSearch] = useState('');
    const { filterVehicle, nextPage, prevPage, setCurrentPage, setPage, page } = UsePage(data, perPage, search);

    vehicleRef.current = vehicles;

    const handleDeleteVehicle = (placa) => {
        UseDeleteVehicle(placa);
        refreshList();
    }

    const getByIdEdit = (vehicle) => {
        debugger
        console.log(vehicle)
        setVehicleEdit(vehicle);
        openModalVehicle();
    }

    // const newVehicle = () => {
    //     setVehicles([]);
    //     openModalVehicle();
    // }

    const retrieveVehicles = () => {
        getAllVehicles()
        .then((vehicle) => {
            setVehicles(vehicle);
        }).catch((e) => {
            console.log(e);
        });
    }

    const refreshList = () => {
        retrieveVehicles();
      };

    useEffect(() => {
        retrieveVehicles();
    }, []);

    return (
        <>
            <div className="container" id="contenedorInicial">
                <h1 className="title-h1">Veh??culos</h1>
                <span>
                    <SearchConduct 
                        titleButton={"Agregar Veh??culos"} 
                        icon={<IoIcons.IoCarSportSharp />} 
                        openModal={openModalVehicle}
                        setSearch={setSearch}
                        setCurrentPage={setCurrentPage}
                        setPage={setPage}
                        onDownload={onDownload}
                         />
                    {/* <button className="btn btn-warning btn-sm" onClick={() => newVehicle()}><IoIcons.IoCarSportSharp /> Agregar Veh??culos</button> */}
                </span>

                <div className="row">
                    <table className="table table-striped table-bordered" id="tbl_vehiculos">
                        <thead>
                            <tr>
                                <th scope="col">Placa</th>
                                <th scope="col">Marca</th>
                                <th scope="col">Capacidad</th>
                                <th scope="col">Matr??cula</th>
                                <th scope="col">Modelo</th>
                                <th scope="col">Tipo Veh??culo</th>
                                <th scope="col">Estado Veh??culo</th>
                                <th scope="col" colSpan="3">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {loading && <Loader />} */}
                            {filterVehicle().map((vehicle) => (
                                <tr key={vehicle.placa}>
                                    <td>{vehicle.placa}</td>
                                    <td>{vehicle.marca}</td>
                                    <td>{vehicle.capacidad}</td>
                                    <td>{vehicle.matricula}</td>
                                    <td>{vehicle.modelo}</td>
                                    <td>{vehicle.tipoVehiculo}</td>
                                    <td>{vehicle.estadoVehiculo}</td>
                                    <td id="columOptions">
                                        <button className="btn btn-info btn-sm" onClick={() => getByIdEdit(vehicle)} ><RiIcons.RiEditFill /></button>
                                        
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteVehicle(vehicle.placa)}><AiIcons.AiFillDelete /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination
                            nextPage={nextPage}
                            prevPage={prevPage}
                            page={page}
                            setPerPage={setPerPage}
                            setCurrentPage={setCurrentPage}
                            setPage={setPage}
                        />
                </div>
            </div>

            <ModalVehicle
                isOpenModal={isOpenModalVehicle}
                closeModal={closeModalVehicle}
                vehicleEdit={vehicleEdit}
                setVehicleEdit={setVehicleEdit}
                vehicles={vehicles}
                setVehicles={setVehicles}
            />

        </>
    )
}
