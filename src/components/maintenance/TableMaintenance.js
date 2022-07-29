import React, { useEffect, useRef, useState } from 'react'
import { Pagination } from '../conduct/Pagination'
import { SearchConduct } from '../conduct/SearchConduct';
import '../../Styles/tableConduct.css'
import * as IoIcons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import { UseModal } from '../../hooks/UseModal';
import { ModalMaintenance } from './ModalMaintenance';
import { UseDeleteMaintenance, UseEffectGetMaintenances } from '../../hooks/UseCaseMaintenance';
import { getAllMaintenances } from "../../helpers/MaintenanceHelper";
import { UsePage } from '../../hooks/UsePage';
import { useDownloadExcel } from "table-to-excel-react";
import { Loader } from '../globalComponents/Loader';

export const Maintenance = () => {

    const { onDownload } = useDownloadExcel({
        fileName: "Rutas",
        table: "tbl_mantenimiento",
        sheet: "sheet 1",
    });

    const [isOpenModalMaintenance, openModalMaintenance, closeModalMaintenance] = UseModal();
    const { data, loading } = UseEffectGetMaintenances();
    const [maintenances, setMaintenances] = useState([]);
    const [maintenanceEdit, setMaintenanceEdit] = useState(null);
    const maintenanceRef = useRef();
    const [perPage, setPerPage] = useState(5);
    const [search, setSearch] = useState('');
    const { filterMaintenance, nextPage, prevPage, setCurrentPage, setPage, page } = UsePage(data, perPage, search);

    maintenanceRef.current = maintenances;

    const handleDeleteMaintenance = (placa) => {
        UseDeleteMaintenance(placa);
        refreshList();
    }

    const getByIdEdit = (maintenance) => {
        setMaintenanceEdit(maintenance);
        openModalMaintenance();
    }

    const retrieveMaintenances = () => {
        getAllMaintenances()
            .then((maintenance) => {
                setMaintenances(maintenance);
            }).catch((e) => {
                console.log(e);
            });
    }

    const refreshList = () => {
        retrieveMaintenances();
    };

    useEffect(() => {
        retrieveMaintenances();
    }, []);

    return (
        <>
            <div className="container" id="contenedorInicial">
                <h1 className="title-h1">Mantenimiento Vehículos</h1>
                <span>
                    <SearchConduct
                        titleButton={"Agregar Mantenimiento"}
                        icon={<IoIcons.IoCarSportSharp />}
                        openModal={openModalMaintenance}
                        setSearch={setSearch}
                        setCurrentPage={setCurrentPage}
                        setPage={setPage}
                        onDownload={onDownload}
                    />
                    {/* <button className="btn btn-warning btn-sm" onClick={() => newMaintenance()}><IoIcons.IoCarSportSharp /> Agregar Vehículos</button> */}
                </span>

                {loading
                    ?

                    (<Loader />) :
                    <div className="row">
                        {data.length === 0 ?
                            (<h1>No hay Mantenimientos registrados...</h1>) :
                            <table className="table table-striped table-bordered" id='tbl_mantenimiento'>
                                <thead>
                                    <tr>
                                        <th scope="col">Placa Vehículo</th>
                                        <th scope="col">Fecha Mantenimiento</th>
                                        <th scope="col">Valor</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col" colSpan="3">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {loading && <Loader />} */}
                                    {filterMaintenance().map((maintenance) => (
                                        <tr key={maintenance.id_mantenimiento}>
                                            <td>{maintenance.id_vehiculo}</td>
                                            <td>{maintenance.fecha_realizado}</td>
                                            <td>{maintenance.valor_mantenimiento}</td>
                                            <td>{maintenance.descripcion}</td>
                                            <td id="columOptions">
                                                <button className="btn btn-info btn-sm" data-toggle="tooltip" data-placement="top" title="Editar" onClick={() => getByIdEdit(maintenance)} ><RiIcons.RiEditFill /></button>
                                                <button className="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Eliminar" onClick={() => handleDeleteMaintenance(maintenance.placa)}><AiIcons.AiFillDelete /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        }

                        <Pagination
                            nextPage={nextPage}
                            prevPage={prevPage}
                            page={page}
                            setPerPage={setPerPage}
                            setCurrentPage={setCurrentPage}
                            setPage={setPage}
                        />
                    </div>}
            </div>

            <ModalMaintenance
                isOpenModal={isOpenModalMaintenance}
                closeModal={closeModalMaintenance}
                maintenanceEdit={maintenanceEdit}
                setMaintenanceEdit={setMaintenanceEdit}
                maintenances={maintenances}
                setMaintenances={setMaintenances}
            />

        </>
    )
}
