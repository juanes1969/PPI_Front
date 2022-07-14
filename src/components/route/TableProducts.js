import React from "react";
import { UseGetProductByRoute } from "../../hooks/UseCaseRoute";
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';

const TableProducts = () => {

const {data: products} = UseGetProductByRoute();

const deleteDetailRoute = (id) => {
    // UseDeleteRoute(id);
    // refreshList();
}

// const getByIdEdit = (route) => {
//     setIsEdit(route);
//     OpenModalRoute();
// }


  return (
    <div>
      <table>
        <thead>
          <tr>
          <th className="th-shipping" scope="col">
              Manifiesto
            </th>
            <th className="th-shipping" scope="col">
              Nombre Producto
            </th>
            <th className="th-shipping" scope="col">
              Cantidad
            </th>
            <th className="th-shipping" colSpan="2">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody id="id_ruta">
          {products.map((route) => (
            <tr key={route.codigo_manifiesto}>
              <td>{route.codigo_manifiesto}</td>
              <td>{route.nombre_producto}</td>
              <td>{route.cantidad_producto}</td>
              <td id="columOptions">
                <button
                  className="btn btn-info btn-sm"
                //   onClick={() => getByIdEdit(route)}
                >
                  <RiIcons.RiEditFill />
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteDetailRoute(route.id_detalle)}
                >
                  <AiIcons.AiFillDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableProducts;
