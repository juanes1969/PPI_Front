import React, { useEffect, useRef, useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import { getAllRoute, getDetailByRoute } from '../../helpers/RouteHelper';
import { UseDeleteRoute, UseEffectGetRoutes, UseGetDetailByRoute } from '../../hooks/UseCaseRoute';
import { UseModal } from '../../hooks/UseModal';
import { UsePage } from '../../hooks/UsePage';
import '../../Styles/tableConduct.css';
import { SearchConduct } from '../conduct/SearchConduct';
import { Loader } from '../globalComponents/Loader';
import { ModalRoutes } from './ModalRoute';
import { Pagination } from '../conduct/Pagination';
import { useDownloadExcel } from "table-to-excel-react";

export const Route = () => {

    const { onDownload } = useDownloadExcel({
        fileName: "Rutas",
        table: "tbl_rutas",
        sheet: "sheet 1",
    });

    const [isOpenModalRoute, OpenModalRoute, closeModalRoute] = UseModal();
    const { data, loading } = UseEffectGetRoutes();
    const [routeData, setRouteData] = useState([]);
    const [isEdit, setIsEdit] = useState(null);
    const [routeDetail, setRouteDetail] = useState({
        data: []
    });
    const [search, setSearch] = useState('');
    const routeRef = useRef();
    const [perPage, setPerPage] = useState(5);
    const { filterRoutes, nextPage, prevPage, setCurrentPage, setPage, page } = UsePage(data, perPage, search);

    routeRef.current = routeData;


    const getById = (id) => {
        UseDeleteRoute(id);
        refreshList();
    }


    const getByIdEdit = (route) => {
        debugger
        console.log(route)
        getDetailByRoute(route.codigo_manifiesto)
            .then((product) => {
                setRouteDetail({
                    data: product
                })
                
            }).then(() => {
                modalRoute(route);
            })
    }

    const modalRoute = (route) => {
        setIsEdit(route);
        console.log(routeDetail)
        OpenModalRoute();
    }


    const retrieveConducts = () => {
        getAllRoute()
            .then((route) => {
                setRouteData(route);
            }).catch((e) => {
                console.log(e);
            });
    }

    const refreshList = () => {
        retrieveConducts();
    };

    useEffect(() => {
        retrieveConducts();
    }, []);

    const componentRef = useRef();


    return (
        <>
            <div className="container" id="contenedorInicial">
                <h1 className="title-h1">Rutas</h1>
                <span>
                    <SearchConduct
                        titleButton={"Agregar Ruta"}
                        icon={<IoIcons.IoCarSportSharp />}
                        openModal={OpenModalRoute}
                        setSearch={setSearch}
                        setCurrentPage={setCurrentPage}
                        setPage={setPage}
                        onDownload={onDownload}
                        componentRef={componentRef}
                    />

                </span>

                {loading
                    ?

                    (<Loader />) :

                    <div className="row">
                        <table ref={componentRef} className="table table-striped table-bordered" id="tbl_rutas">
                            <thead>
                                <tr>

                                    <th className="th-shipping" scope="col">Manifiesto</th>
                                    <th className="th-shipping" scope="col">Fecha Inicio</th>
                                    <th className="th-shipping" scope="col">Fecha Fin</th>
                                    <th className="th-shipping" scope="col">Flete</th>
                                    <th className="th-shipping" scope="col">Vehiculo Asignado</th>
                                    <th className="th-shipping" scope="col">Ciudad Origen</th>
                                    <th className="th-shipping" scope="col">Ciudad Destino</th>
                                    <th className="th-shipping" scope="col">Conductor</th>
                                    <th className="th-shipping" colSpan="3">Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="id_ruta">
                                {filterRoutes().map((route) => (
                                    <tr key={route.codigo_manifiesto}>
                                        <td>{route.codigo_manifiesto}</td>
                                        <td>{route.fecha_inicio}</td>
                                        <td>{route.fecha_fin}</td>
                                        <td>{route.flete}</td>
                                        <td>{route.id_vehiculo}</td>
                                        <td>{route.ciudad_origen}</td>
                                        <td>{route.ciudad_destino}</td>
                                        <td>{route.conductor}</td>
                                        <td id="columOptions">

                                        
                                            <button className="btn btn-info btn-sm"   data-toggle="tooltip" data-placement="top" title="Editar"   onClick={() => getByIdEdit(route)} ><RiIcons.RiEditFill /></button>
                                            <button className="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Eliminar" onClick={() => getById(route.codigo_manifiesto)} ><AiIcons.AiFillDelete /></button>
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
                    </div>}
            </div>

            <ModalRoutes
                isOpenModal={isOpenModalRoute}
                closeModal={closeModalRoute}
                route={routeData}
                setRouteData={setRouteData}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                routeDetail={routeDetail}
                setRouteDetail={setRouteDetail}
            />
        </>
    )
}
