import React, { useEffect, useState } from 'react'
import { UseProduct } from '../../hooks/UseCaseRoute';

const FormProduct = ({
    setProducts,
    product,
    productEdit,
    setPorductEdit
}) => {

    const initialProductState = {
        id_producto: "",
        cantidad_producto: "",
        nombre_producto: "",
    
      }
      const [error, setError] = useState({});
    
      const handleChangeData = ({ target }) => {
        const { name, value } = target;
        setProducts({ ...product, [name]: value });
      }
    
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Object.entries(error).length)
        if (Object.entries(error).length === 0) {
          if (productEdit) {
            //UseSaveExpense(product)
            e.target.reset();
          } else {
            //UseInsertExpense(product);
            setProducts(initialProductState);
            e.target.reset();
          }
        } else {
          alert('Debes ingresar los campos de manera correcta');
        }
      };
    
      const handleBlur = (e) => {
        handleChangeData(e);
        //setError(ValidationsFormExpense(product));
      }
    
      const handleCancelButton = () => {
        setProducts(initialProductState)
        setPorductEdit(null)
        setError({})
      }
    
      const {data: productList} = UseProduct();
    
      useEffect(() => {
        if (productEdit) {
            setProducts(productEdit)
        } else {
            setProducts(initialProductState)
        }
    
      }, [productEdit, setProducts, setPorductEdit]);

  return (
    <div>
        <form
          className="form-modal needs-validation"
          novalidate
          onSubmit={handleSubmit}
        >
          <div className="row align-items-start">
            <div className="col">
              <label className="col-form-label modal-label">Producto*:</label>
              <select
                className={`form-control input-form ${
                  error.id_producto ? "input-error" : ""
                }`}
                value={product.id_producto}
                name="id_producto"
                id="id_producto"
                onChange={handleChangeData}
                onBlur={handleBlur}
                autoComplete="off"
                required
              >
                <option value="0">Seleccionar</option>
                {productList.map((producto) => (
                  <option key={producto.id_producto} value={producto.id_producto}>
                    {producto.nombre_producto}
                  </option>
                ))}
              </select>
              {error.id_producto && (
                <p className="error-message">{error.id_producto}</p>
              )}
            </div>
            <div className="col">
              <label className="col-form-label modal-label">Cantidad *:</label>
              <input
                type="number"
                className={`form-select input-form ${
                  error.cantidad_producto ? "input-error" : ""
                }`}
                value={product.cantidad_producto}
                name="cantidad_producto"
                id="cantidad_producto"
                onChange={handleChangeData}
                autoComplete="off"
                onBlur={handleBlur}
                required
              />
              {error.cantidad_producto && (
                <p className="error-message">{error.cantidad_producto}</p>
              )}
            </div>
            <div className="col">
            <button className="btn btn-danger btn-sm" onClick={() => handleSubmit()} >Agregar</button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default FormProduct