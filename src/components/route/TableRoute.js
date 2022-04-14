import React, { useState, useRef, useEffect } from 'react'
import { Pagination } from '../conduct/Pagination'
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
import { SearchConduct } from '../conduct/SearchConduct';
import { getAllRoute } from '../../helpers/RouteHelper';


export const Route = () => {

    const [isOpenModalRoute, OpenModalRoute, closeModalRoute] = UseModal();
    const { data, loading } = UseEffectGetRoutes();
    const [routeData, setRouteData] = useState([]);
    const [isEdit, setIsEdit] = useState(null);
    const [search, setSearch] = useState('');
    const routeRef = useRef();

    routeRef.current = routeData;


    const getById = (id) => {
        console.log(id)
        UseDeleteRoute(id);
        refreshList();
    }


    const getByIdEdit = (route) => {
        debugger
        console.log(route)
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
                    <SearchConduct titleButton={"Agregar Ruta"} icon={<IoIcons.IoCarSportSharp />} openModal={OpenModalRoute} />
                    <form className="d-flex navbar-brand" id="formSearch">
                        <form className="d-flex navbar-brand" id="formSearch">
                            <input className="form-control me-2" type="text" id="search" placeholder="Buscar" onChange={(evento) => {
                                setSearch(evento.target.value);
                            }} />
                        </form>
                        <button className="btn btn-outline-success" type="submit"><FcIcons.FcSearch /></button>
                    </form>
                </span>



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
                        <tbody>
                            {/*loading && <Loader />} */}
                            {data.filter((route) => {
                                if (search == "") {
                                    return route
                                } else if (route.nombre_producto.toLowerCase().includes(search.toLowerCase())) {
                                    return route
                                }
                            }).map((route) => (
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
                    <Pagination />
                </div>
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
