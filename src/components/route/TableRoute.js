import React, { useState, useRef, useEffect } from 'react'
import '../../Styles/tableConduct.css'
import * as IoIcons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import { UseModal } from '../../hooks/UseModal';
import { ModalRoutes } from './ModalRoute';
import { UseEffectGetRoutes, UseDeleteRoute } from '../../hooks/UseCaseRoute';
import { Loader } from '../globalComponents/Loader';
import { SearchRoute } from '../route/SearchRoute';
import { getAllRoute } from '../../helpers/RouteHelper';
import { Pagination } from './Pagination';
import { UsePageRoute } from '../../hooks/UsePageRoute';


export const Route = () => {

    const [isOpenModalRoute, OpenModalRoute, closeModalRoute] = UseModal();
    const { data, loading } = UseEffectGetRoutes();
    const [routeData, setRouteData] = useState([]);
    const [isEdit, setIsEdit] = useState(null);
    const [search, setSearch] = useState('');
    const routeRef = useRef();
    const [perPage, setPerPage] = useState(5);
    const { filterRoutes, nextPage, prevPage, setCurrentPage, setPage, page } = UsePageRoute(data, perPage, search);

    routeRef.current = routeData;


    const getById = (id) => {
        UseDeleteRoute(id);
        refreshList();
    }


    const getByIdEdit = (route) => {
        setIsEdit(route);
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


    return (
        <>
            <div className="container" id="contenedorInicial">
                <h1>Rutas</h1>
                <span>
                    <SearchRoute
                        titleButton={"Agregar Ruta"}
                        icon={<IoIcons.IoCarSportSharp />}
                        openModal={OpenModalRoute}
                        setSearch={setSearch}
                        setCurrentPage={setCurrentPage}
                        setPage={setPage}
                    />

                </span>

                {loading
                    ?

                    (<Loader />) :

                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>

                                    <th className="th-shipping" scope="col">Codigo Ruta</th>
                                    <th className="th-shipping" scope="col">Carga</th>
                                    <th className="th-shipping" scope="col">Flete</th>
                                    <th className="th-shipping" scope="col">Vehiculo Asignado</th>
                                    <th className="th-shipping" scope="col">Ciudad Origen</th>
                                    <th className="th-shipping" scope="col">Ciudad Destino</th>
                                    <th className="th-shipping" scope="col">Estado Envio</th>
                                    <th className="th-shipping" colSpan="3">Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="id_ruta">
                                {filterRoutes().map((route) => (
                                    <tr key={route.id_ruta}>
                                        <td>{route.id_ruta}</td>
                                        <td>{route.nombre_producto}</td>
                                        <td>{route.flete}</td>
                                        <td>{route.placa}</td>
                                        <td>{route.ciudad_origen}</td>
                                        <td>{route.ciudad_destino}</td>
                                        <td>{route.estado}</td>
                                        <td id="columOptions">

                                            <button className="btn btn-warning btn-sm"><BsIcons.BsFillEyeFill /></button>
                                            <button className="btn btn-info btn-sm" onClick={() => getByIdEdit(route)} ><RiIcons.RiEditFill /></button>
                                            <button className="btn btn-danger btn-sm" onClick={() => getById(route.id_ruta)} ><AiIcons.AiFillDelete /></button>
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
            />
        </>
    )
}
