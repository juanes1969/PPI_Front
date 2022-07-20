import React, { useEffect, useState } from 'react'
import ItemProduct from './ItemProduct';

const ItemList = ({ setItemProducts, itemProducts, setIsEditProduct }) => {

  const [itemList, setItemList] = useState(itemProducts);

  const handleDelete = () => {

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
            <th scope="col" colSpan="2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((itemProduct) => (
            <ItemProduct
              key={itemProduct.id_producto}
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