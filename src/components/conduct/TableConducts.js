import React, { useState } from 'react'
import { Pagination } from './Pagination'
import { SearchConduct } from './SearchConduct';
import '../../Styles/tableConduct.css'
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';
import { UseModal } from '../../hooks/UseModal';
import { ModalCreateConduct } from './ModalCreateConduct';
import { UseEffectConduct, UseGetEditConduct } from '../../hooks/UseCaseConduct';
import { Loader } from '../globalComponents/Loader';

export const Conduct = () => {

    const [isOpenModalConduct, openModalConduct, closeModalConduct] = UseModal();
    const [isOpenEditModalConduct, openEditModalConduct, closeEditModalConduct] = UseModal();

    const { data: conducts, loading } = UseEffectConduct();


    //const { identificacion } = conducts.length

    //console.log(identificacion);


    const getById = (id) => {
        const { data } = UseGetEditConduct(id);
        console.log(data)
    }




    //const { identificacion } = !!data && data[0]

    //console.log(identificacion)



    return (
        <>
            <div className="container" id="contenedorInicial">
                <h1>Conductores</h1>
                <span>
                    <SearchConduct titleButton={"Agregar conductor"} icon={<BsIcons.BsPersonPlusFill />} openModal={openModalConduct} />
                </span>
                {loading && <Loader />}
                <div className="row" >
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Identificación</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Primer apellido</th>
                                <th scope="col">Segundo apellido</th>
                                <th scope="col">Telefono</th>
                                <th scope="col" colSpan="3">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody id="identificacion">
                            {conducts.map((cond) => (
                                <tr key={cond.identificacion}>
                                    <td >{cond.identificacion}</td>
                                    <td>{cond.nombre}</td>
                                    <td>{cond.primer_apellido}</td>
                                    <td>{cond.segundo_apellido}</td>
                                    <td><b>(+57) </b>{cond.telefono_contacto}</td>

                                    <td id="columOptions">
                                        <button className="btn btn-warning btn-sm"><BsIcons.BsFillEyeFill /></button>
                                        <button className="btn btn-info btn-sm" onClick={openEditModalConduct}><RiIcons.RiEditFill /></button>
                                        <button className="btn btn-danger btn-sm"><AiIcons.AiFillDelete /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </div>

            <ModalCreateConduct
                isOpenEditModal={isOpenModalConduct}
                closeModalEdit={closeModalConduct}
                titleModal={"Crear conductores"}
                buttonModal={"Registrar Conductor"}
                caso={"registrar"}
            />

            <ModalCreateConduct
                isOpenEditModal={isOpenEditModalConduct}
                closeModalEdit={closeEditModalConduct}
                titleModal={"Editar conductores"}
                buttonModal={"Editar Conductor"}
                caso={"registrar"}
            />
        </>
    )
}
