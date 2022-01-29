import React, { useState } from 'react'
import { Pagination } from '../conduct/Pagination'
import '../../Styles/tableConduct.css'
import * as IoIcons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import { UseModal } from '../../hooks/UseModal';
import { ModalRoute } from './ModalRoutes';
import { UseEffectGetRoutes, UseDeleteRoute } from '../../hooks/UseCaseRoute';
import { Loader } from '../globalComponents/Loader';
import { SearchConduct } from '../conduct/SearchConduct';

export const Route = () => {

    const [isOpenModalRoute, OpenModalRoute, closeModalRoute] = UseModal();
    const { data, loading } = UseEffectGetRoutes();
    const [routeData, setRouteData] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    const handleDeleteRoute = (id_ruta) => {
        console.log(id_ruta)
        UseDeleteRoute(id_ruta);
    }

    const getByIdEdit = (route) => {
        console.log(route)
        setRouteData(route);
        setIsEdit(true);
        OpenModalRoute();
    }


    return (
        <>
            <div className="container" id="contenedorInicial">
                <h1>Rutas</h1>
                <span>
                    <SearchConduct titleButton={"Agregar Ruta"} icon={<IoIcons.IoCarSportSharp />} openModal={OpenModalRoute} />
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
                            {/*loading && <Loader />} */ }
                            {data.map((route) => (
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
                                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteRoute(route.id_ruta)} ><AiIcons.AiFillDelete /></button>
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
                route={routeData}
                setRouteData={setRouteData}
                isEdit={isEdit}
            />


        </>
    )
}
