import React, { useEffect, useState } from 'react'
import ItemProduct from './ItemProduct';

const ItemList = ({setItemProducts, itemProducts, setIsEditProduct}) => {
    
    const [itemList, setItemList] = useState(itemProducts);

    const handleDelete = () => {

    }

     useEffect(() => {
        setItemList(itemProducts);
      }, [itemProducts]);

  return (
    <div>
        {itemList.map((itemProduct) => (
            <ItemProduct 
            key={itemProduct.id_producto}
            itemProduct={itemProduct}
            handleDeleteProduct={handleDelete}
            setEditProduct={setIsEditProduct}
            />
        ))}
    </div>
  )
}

export default ItemList