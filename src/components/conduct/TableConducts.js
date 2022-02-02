import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import { UseDeleteConduct, UseEffectConduct } from '../../hooks/UseCaseConduct';
import { UseModal } from '../../hooks/UseModal';
import { UsePage } from '../../hooks/UsePage';
import '../../Styles/tableConduct.css';
import { Loader } from '../globalComponents/Loader';
import { ModalCreateConduct } from './ModalCreateConduct';
import { Pagination } from './Pagination';
import { SearchConduct } from './SearchConduct';

export const Conduct = () => {

    const [isOpenModalConduct, openModalConduct, closeModalConduct] = UseModal();

    const { data, loading } = UseEffectConduct();

    const [conductInformation, setConductInformation] = useState({});

    const [isEdit, setIsEdit] = useState(false);


    const { filterConducts, nextPage, prevPage } = UsePage(data);


    const getById = (id) => {
        console.log(id)

        UseDeleteConduct(id);
    }


    const getByIdEdit = (conduct) => {
        console.log(conduct)
        setConductInformation(conduct);
        setIsEdit(true);
        openModalConduct()
    }



    return (
        <>
            <div className="container" id="contenedorInicial">
                <h1>Conductores</h1>
                <span>
                    <SearchConduct titleButton={"Agregar conductor"} icon={<BsIcons.BsPersonPlusFill />} openModal={openModalConduct} />
                </span>

                {loading
                    ?

                    (<Loader />) :

                    (<div className="row" >
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
                                {filterConducts().map((cond) => (
                                    <tr key={cond.identificacion}>
                                        <td >{cond.identificacion}</td>
                                        <td>{cond.nombre}</td>
                                        <td>{cond.primer_apellido}</td>
                                        <td>{cond.segundo_apellido}</td>
                                        <td><b>(+57) </b>{cond.telefono_contacto}</td>

                                        <td id="columOptions">
                                            <button className="btn btn-warning btn-sm"><BsIcons.BsFillEyeFill /></button>
                                            <button className="btn btn-info btn-sm" onClick={() => getByIdEdit(cond)}><RiIcons.RiEditFill /></button>
                                            <button className="btn btn-danger btn-sm" onClick={() => getById(cond.identificacion)}><AiIcons.AiFillDelete /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <Pagination
                            nextPage={nextPage}
                            prevPage={prevPage}
                        />
                    </div>)}
            </div>

            <ModalCreateConduct
                isOpenEditModal={isOpenModalConduct}
                closeModalEdit={closeModalConduct}
                conduct={conductInformation}
                setConduct={setConductInformation}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
            />
        </>
    )
}
