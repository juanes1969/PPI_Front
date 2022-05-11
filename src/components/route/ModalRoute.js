import React, { useState, useEffect } from "react";
import "../../Styles/modal.css";
import * as AiIcons from "react-icons/ai";
import "../../helpers/modal-function";
import { useForm } from "react-hook-form";
import dateFormat, { masks } from "dateformat";


import {
  UseCity,
  UseInsertRoute,
  UseVehicleRoute,
  UseProduct,
  UseSaveRoute,
} from "../../hooks/UseCaseRoute";

export const ModalRoutes = ({
  isOpenModal,
  closeModal,
  route,
  setRouteData,
  isEdit,
  setIsEdit

}) => {

  const initialRouteState = {
    id_ruta: "",
    producto: "",
    cantidad: "",
    fecha_inicio: null,
    fecha_fin: null,
    flete: "",
    id_vehiculo: null,
    id_estado_envio: null,
    id_origen: null,
    id_destino: null,
  }

  const handleChangeData = ({ target }) => {
    const { name, value } = target;
    setRouteData({ ...route, [name]: value });
  }

  console.log(route);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      UseSaveRoute(route)
      e.target.reset();
      closeModal();
    } else {

      UseInsertRoute(route);
      setRouteData(initialRouteState);
      e.target.reset();
      closeModal();
    }
  };

  const handleCancelButton = () => {
    setRouteData(initialRouteState)
    setIsEdit(null)
    closeModal()
  }

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };
  
  const fechaMinima = () => {
    let fechaMin = new Date();
    fechaMin.setFullYear(fechaMin.getFullYear()-1)
    fechaMin = dateFormat(fechaMin, "isoDate")
    return fechaMin;
  }

  const fechaMaxima = () => {
    let fechaMax = new Date();
    fechaMax = dateFormat(fechaMax, "isoDate")
    return fechaMax;
  }

  const valorMinimo = () => {
    let valorMin = 500000
    return valorMin;
  }

  


  const { data: vehicles } = UseVehicleRoute();
  const { data: citys } = UseCity();
  const { data: products } = UseProduct();

  useEffect(() => {
    if (isEdit) {
      setRouteData(isEdit)
    } else {
      setRouteData(initialRouteState)
    }

  }, [isEdit, setRouteData, setIsEdit]);

  return (
    <>
      <div
        className={`modalInicial ${isOpenModal && "modal-abierta"}`}
        onClick={closeModal}
      >
        <div className="modal-dialog">
          <div
            className="modal-content contenido__modal"
            onClick={handleModalDialogClick}
          >
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                {isEdit ?
                  ('Editar ruta') :
                  ('Registrar ruta')}
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCancelButton}
              ></button>
            </div>

            <div className="modal-body">
              <div className="container">
                <form
                  className="form-modal needs-validation"
                  novalidate
                  onSubmit={handleSubmit}
                >
                  <div className="row align-items-start">
                    <div className="col">



                      <label className="col-form-label modal-label">
                        Placa *:
                      </label>
                      <select
                        className={`form-control`}
                        value={route.id_vehiculo}
                        name="id_vehiculo"
                        id="id_vehiculo"
                        onChange={handleChangeData}
                        required
                      >
                        <option value="0">Seleccionar</option>
                        {vehicles.map((vehicle) => (
                          <option
                            key={vehicle.id_vehiculo}
                            value={vehicle.id_vehiculo}
                          >
                            {vehicle.placa}
                          </option>
                        ))}
                      </select>
                      <label className="col-form-label modal-label">
                        Producto *:
                      </label>
                      <select
                        className={`form-control`}
                        value={route.producto}
                        name="producto"
                        id="producto"
                        onChange={handleChangeData}
                        required
                      >
                        <option value="0">Seleccionar</option>
                        {products.map((product) => (
                          <option
                            key={product.id_producto}
                            value={product.id_producto}
                          >
                            {product.nombre_producto}
                          </option>
                        ))}
                      </select>


                      <label className="col-form-label modal-label">
                        Fecha Inicio *:
                      </label>
                      <input
                        type="date"
                        className={`form-control`}
                        value={route.fecha_inicio}
                        name="fecha_inicio"
                        id="fecha_inicio"
                        onChange={handleChangeData}
                        min={fechaMinima()}
                        max={fechaMaxima()}
                        required
                      />

                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Cantidad (Toneladas):
                      </label>
                      <input
                        type="text"
                        className={`form-control`}
                        value={route.cantidad}
                        name="cantidad"
                        id="cantidad"
                        onChange={handleChangeData}
                        required
                      />
                      <label className="col-form-label modal-label">
                        Flete *:
                      </label>
                      <input
                        type="text"
                        className={`form-control`}
                        value={route.flete}
                        name="flete"
                        id="flete"
                        onChange={handleChangeData}
                        min={valorMinimo}
                        required
                      />
                      <label className="col-form-label modal-label">
                        Fecha Fin *:
                      </label>
                      <input
                        type="date"
                        className={`form-control`}
                        value={route.fecha_fin}
                        name="fecha_fin"
                        id="fecha_fin"
                        onChange={handleChangeData}
                        required

                      />
                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Ciudad Origen *:
                      </label>
                      <select
                        className={`form-control`}
                        value={route.id_origen}
                        name="id_origen"
                        id="id_origen"
                        onChange={handleChangeData}
                        required
                      >
                        <option value="0">Seleccionar</option>
                        {citys.map((city) => (
                          <option
                            key={city.id_origen}
                            value={city.id_origen}
                          >
                            {city.ciudad_origen}
                          </option>
                        ))}
                      </select>
                      <label className="col-form-label modal-label">
                        Ciudad Destino *:
                      </label>
                      <select
                        className={`form-control`}
                        value={route.id_destino}
                        name="id_destino"
                        id="id_destino"
                        onChange={handleChangeData}
                        required
                      >
                        <option value="0">Seleccionar</option>
                        {citys.map((city) => (
                          <option
                            key={city.id_destino}
                            value={city.id_destino}
                          >
                            {city.ciudad_destino}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer modal-btn">
                    <button type="submit" className="btn btn-info" onPress={handleSubmit}>
                      {isEdit ?
                        ('Editar ruta') :
                        ('Registrar ruta')}
                    </button>
                    <button
                      type="reset"
                      className="btn  btn-danger"
                      onClick={closeModal}
                    >
                      Cancelar registro
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
