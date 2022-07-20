import React, { useEffect, useState } from 'react'
import { getProductById } from '../../helpers/RouteHelper';
import * as RiIcons from 'react-icons/ri';
import * as AiIcons from 'react-icons/ai';

const ItemProduct = ({itemProduct, handleDeleteProduct, setEditProduct}) => {

  const [producto, setProducto] = useState({
    data:[]
  });


  useEffect(() => {
    console.log(itemProduct)
    if(itemProduct){
      getProductById(itemProduct.id_producto)
      .then((product) => {
        setProducto({
          data: product
        })
      })
      if(producto.data.length !== 0){
        console.log(producto.data.length)
        console.log(producto.data[0].nombre_producto)
      }
      
    }
  }, [itemProduct]);

  return (
    <>
        <tr className='table-light' key={itemProduct.id_producto}>
            <td className='table-light'>{producto.data.length !== 0 ? producto.data[0].nombre_producto : ""}</td>
            <td className='table-light'>{itemProduct.cantidad_producto + " Toneladas"}</td>
            <td className='table-light' id="columOptions">
                <button className="btn btn-warning btn-sm" onClick={() => setEditProduct(itemProduct)} ><RiIcons.RiEditFill /></button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDeleteProduct(itemProduct)}><AiIcons.AiFillDelete /></button>
            </td>
        </tr>
    </>

    // <div className="card border-dark mb-3">
    //   <li className="li-item card-body">
    //     <label onChange={(e) => e.preventDefault} className="nombre-item">{ producto.data.length !== 0 ? producto.data[0].nombre_producto : ""}</label>
    //     <button onChange={(e) => e.preventDefault} type="button" disabled className={`btn btn-info cantidad-item`} >
    //       {itemProduct.cantidad_producto}
    //     </button>
    //     <button type='button' className="button-edit-item btn-warning" onClick={() => setEditProduct(itemProduct)}>
    //       <FaEdit />
    //     </button>
    //       <button type='button' className="button-delete-item btn-danger" onClick={() => handleDeleteProduct(itemProduct)}>
    //       <FaTrashAlt />
    //       </button>
    //   </li>
    // </div>
  )
}

export default ItemProduct