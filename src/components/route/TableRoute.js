import React from 'react'
import { Pagination } from '../conduct/Pagination'
import '../../Styles/tableConduct.css'
import * as IoIcons from 'react-icons/io5';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import { UseModal } from '../../hooks/UseModal';
import { ModalRoute } from './ModalRoutes';
import { UseEffectGetRoutes } from '../../hooks/UseCaseRoute';
import { Loader } from '../globalComponents/Loader';
import { SearchConduct } from '../conduct/SearchConduct';

export const Route = () => {

    const [isOpenModalRoute, OpenModalRoute, closeModalRoute] = UseModal();
    const [isOpenEditModalRoute, openEditModalRoute, closeEditModalRoute] = UseModal();

    const { data: route, loading } = UseEffectGetRoutes();

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
                                <th className="th-shipping" scope="col">Nombre Conductor</th>
                                <th className="th-shipping" scope="col">Vehiculo Asignado</th>
                                <th className="th-shipping" scope="col">Ciudad Origen</th>
                                <th className="th-shipping" scope="col">Ciudad Destino</th>
                                <th className="th-shipping" scope="col">Estado Envio</th>
                                <th className="th-shipping" colSpan="3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && <Loader />}
                            {route.map((route) => (
                                <tr key={route.codigo_ruta}>
                                    <td>{route.codigo_ruta}</td>
                                    <td>{route.nombre_producto}</td>
                                    <td>{route.nombre}</td>
                                    <td>{route.placa}</td>
                                    <td>{route.ciudad_origen}</td>
                                    <td>{route.ciudad_destino}</td>
                                    <td>{route.estado}</td>
                                    <td id="columOptions">
                                    
                                        <button className="btn btn-warning btn-sm"><BsIcons.BsFillEyeFill /></button>
                                        <button className="btn btn-info btn-sm" onClick={openEditModalRoute} ><RiIcons.RiEditFill /></button>
                                        <button className="btn btn-danger btn-sm"><AiIcons.AiFillDelete /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </div>

            <ModalRoute
                isOpenEditModal={isOpenModalRoute}
                closeModalEdit={closeModalRoute}
                titleModal={"Crear Ruta"}
            />

            <ModalRoute
                isOpenEditModal={isOpenEditModalRoute}
                closeModalEdit={closeEditModalRoute}
                titleModal={"Editar Ruta"}
            />

        </>
    )
}
