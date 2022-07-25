import React, { useEffect, useState } from 'react'
import ItemProduct from './ItemProduct';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss';
import { UseDeleteDetail } from '../../hooks/UseCaseRoute';

const ItemList = ({ setItemProducts, itemProducts, setIsEditProduct }) => {

  const [itemList, setItemList] = useState(itemProducts);  

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })

  const handleDelete = ({id_detalle}) => {
    setItemProducts(itemProducts.filter((item) => item.id_detalle !== id_detalle));
    setItemList(itemProducts)
    UseDeleteDetail(id_detalle)
    // swalWithBootstrapButtons.fire({
    //   title: '¿Estás seguro?',
    //   text: "¿Deseas eliminar este producto?",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Si, eliminar',
    //   cancelButtonText: 'No, cancelar'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     swalWithBootstrapButtons.fire(
    //       '¡Eliminado!',
    //       'El producto fue eliminado',
    //       'success'
    //     )
    //     setItemList(itemList.filter((item) => item.id_detalle !== id_detalle));
    //     UseDeleteDetail(id_detalle)
    //   } else if (
    //     /* Read more about handling dismissals below */
    //     result.dismiss === Swal.DismissReason.cancel
    //   ) {
    //     swalWithBootstrapButtons.fire(
    //       '¡Cancelado!',
    //       'Acción cancelada',
    //       'error'
    //     )
    //   }
    // })
  }

  useEffect(() => {
    setItemList(itemProducts);
  }, [itemProducts]);

  return (
    <div>
      <table className="table table-striped table-bordered table-light">
        <thead>
          <tr className='table-light'>
            <th scope="col">Producto</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acción</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((itemProduct) => (
            <ItemProduct
              key={itemProduct.id_detalle}
              itemProduct={itemProduct}
              handleDeleteProduct={handleDelete}
              setEditProduct={setIsEditProduct}
            />
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ItemList