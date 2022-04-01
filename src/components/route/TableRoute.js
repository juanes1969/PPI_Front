import React, { useEffect, useRef, useState } from 'react'
import { Pagination } from '../conduct/Pagination'
import '../../Styles/tableConduct.css'
import * as IoIcons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';
import { UseModal } from '../../hooks/UseModal';
import { ModalRoute } from './ModalRoutes';
import { UseEffectGetRoutes, UseDeleteRoute } from '../../hooks/UseCaseRoute';
import { Loader } from '../globalComponents/Loader';
import { SearchConduct } from '../conduct/SearchConduct';
import { getAllRoute } from '../../helpers/RouteHelper';


export const Route = () => {

    const [isOpenModalRoute, OpenModalRoute, closeModalRoute] = UseModal();
    const { data, loading } = UseEffectGetRoutes();
    const [routes, setRoutes] = useState([]);
    const [routeEdit, setRouteEdit] = useState(null);
    const [search, setSearch] = React.useState('');
    const routeRef = useRef();
    console.log(data)   
    routeRef.current = routes;

    const handleDeleteRoute = (id_ruta) => {
        console.log(id_ruta)
        UseDeleteRoute(id_ruta);
        refreshList();
    }

    const getByIdEdit = (route) => {
        console.log(route)
        setRouteEdit(route);
        OpenModalRoute();
    }

    const retrieveRoute = () => {
        getAllRoute()
        .then((route) => {
            setRoutes(route);
        }).catch((e) => {
            console.log(e);
        });
    }

    const refreshList = () => {
        retrieveRoute();
      };

    useEffect(() => {
        retrieveRoute();
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
                            {data.filter((rt) => {
                                if (search == "") {
                                    return rt
                                } else if (rt.nombre_producto.toLowerCase().includes(search.toLowerCase())) {
                                    return rt
                                }
                            }).map((rt) => (
                                <tr key={rt.id_ruta}>
                                    <td>{rt.id_ruta}</td>
                                    <td>{rt.nombre_producto}</td>
                                    <td>{rt.flete}</td>
                                    <td>{rt.placa}</td>
                                    <td>{rt.ciudad_origen}</td>
                                    <td>{rt.ciudad_destino}</td>
                                    <td>{rt.estado}</td>
                                    <td id="columOptions">

                                        <button className="btn btn-warning btn-sm"><BsIcons.BsFillEyeFill /></button>
                                        <button className="btn btn-info btn-sm" onClick={() => getByIdEdit(rt)} ><RiIcons.RiEditFill /></button>
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteRoute(rt.id_ruta)} ><AiIcons.AiFillDelete /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </div>

            <ModalRoute
                isOpenModal={isOpenModalRoute}
                closeModal={closeModalRoute}
                routes={routes}
                setRoutes={setRoutes}
                setRouteEdit={setRouteEdit}
                routeEdit={routeEdit}
            />


        </>
    )
}
