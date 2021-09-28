import React from 'react'
import { Pagination } from '../conduct/Pagination'
import { SearchConduct } from '../conduct/SearchConduct'
import * as IoIcons from 'react-icons/io5';


export const Vehicle = () => {
    return (
        <>
            <div className="container" id="contenedorInicial">
                <h1>Vehiculos</h1>
                <span>
                    <SearchConduct titleButton={"Agregar Vehiculos"} icon={<IoIcons.IoCarSportSharp />} />
                </span>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                        </tbody>
                    </table>
                    <Pagination />
                </div>
            </div>

        </>
    )
}
