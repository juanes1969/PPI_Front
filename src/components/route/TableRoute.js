import React, { useState } from 'react'

import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import { Pagination } from '../conduct/Pagination';
import { SearchConduct } from '../conduct/SearchConduct';
import '../../Styles/tableConduct.css'
import { IconContext } from 'react-icons';
import { ModalRoutes } from '../globalComponents/ModalRoutes';


export const Route = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (
        <>
            <div className="container" id="contenedorInicial">
                <h1>Rutas</h1>
                <span>
                    <SearchConduct titleButton={"Agregar nueva ruta"} icon={<RiIcons.RiRouteFill />} openModal={openModal} />
                </span>
                <IconContext.Provider value={{ color: 'black', size: "18px" }}>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td id="columOptions">
                                        <button className="btn btn-warning btn-sm"><BsIcons.BsFillEyeFill /></button>
                                        <button className="btn btn-info btn-sm"><RiIcons.RiEditFill /></button>
                                        <button className="btn btn-danger btn-sm"><AiIcons.AiFillDelete /></button>

                                    </td>
                                </tr>
                                <tr>

                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td id="columOptions">
                                        <button className="btn btn-warning btn-sm"><BsIcons.BsFillEyeFill /></button>
                                        <button className="btn btn-info btn-sm"><RiIcons.RiEditFill /></button>
                                        <button className="btn btn-danger btn-sm"><AiIcons.AiFillDelete /></button>

                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td id="columOptions">
                                        <button className="btn btn-warning btn-sm"><BsIcons.BsFillEyeFill /></button>
                                        <button className="btn btn-info btn-sm"><RiIcons.RiEditFill /></button>
                                        <button className="btn btn-danger btn-sm"><AiIcons.AiFillDelete /></button>

                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td id="columOptions">
                                        <button className="btn btn-warning btn-sm"><BsIcons.BsFillEyeFill /></button>
                                        <button className="btn btn-info btn-sm"><RiIcons.RiEditFill /></button>
                                        <button className="btn btn-danger btn-sm"><AiIcons.AiFillDelete /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td id="columOptions">
                                        <button className="btn btn-warning btn-sm"><BsIcons.BsFillEyeFill /></button>
                                        <button className="btn btn-info btn-sm"><RiIcons.RiEditFill /></button>
                                        <button className="btn btn-danger btn-sm"><AiIcons.AiFillDelete /></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Pagination />
                    </div>
                </IconContext.Provider>
            </div>

            <ModalRoutes
                isOpen={isOpenModal}
                closeModal={closeModal}
                title="Modal rutas"
            />

        </>
    )
}
