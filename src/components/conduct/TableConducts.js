import React from 'react'
import { Pagination } from './Pagination'
import { SearchConduct } from './SearchConduct';
import '../../Styles/tableConduct.css'
import * as BsIcons from 'react-icons/bs';

export const Conduct = () => {
    return (
        <>
            <div className="container" id="contenedorInicial">
                <h1>Conductores</h1>
                <span>
                    <SearchConduct titleButton={"Agregar conductor"} icon={<BsIcons.BsPersonPlusFill />} />
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
