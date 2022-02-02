import React, { useState } from "react";
import "../../Styles/modal.css";
import * as AiIcons from "react-icons/ai";
import "../../helpers/modal-function";
import { useForm } from "react-hook-form";
import {
  UseCity,
  UseInsertRoute,
  UseVehicleRoute,
  UseProduct,
} from "../../hooks/UseCaseRoute";

export const ModalRoute = ({ 
    isOpenModal,
    closeModal,
    route,
    setRouteData,
    isEdit
     
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  
  const onSubmit = (dataRoute, e) => {
    if (isEdit) {
      //falta
    } else{
      e.target.reset();
      UseInsertRoute(dataRoute);
      reset();
      closeModal();

    }
    
  };

  const handleCancelButton = () => {
    setRouteData({})
    closeModal()
}

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  const handleSubmitRegisterRoute = (e) => {
    e.preventDefault();
  };


  const { data: vehicles } = UseVehicleRoute();
  const { data: citys } = UseCity();
  const { data: product } = UseProduct();


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
                onClick={closeModal}
              ></button>
            </div>

            <div className="modal-body">
              <div className="container">
                <form
                  className="form-modal needs-validation"
                  novalidate
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row align-items-start">
                    <div className="col">
                      


                      <label className="col-form-label modal-label">
                       Placa *:
                      </label>
                      <select
                        className={`form-control ${
                          errors.placa && "invalid"
                        }`}
                        value={route.id_vehiculo}
                        {...register("id_vehiculo", {
                          required: "La placa del vehículo es obligatoria",
                          min: {
                            value: 1,
                            message: "La placa del vehículo es obligatoria",
                          },
                        })}
                      >
                        <option value="0">Seleccionar</option>
                        {vehicles.map((vehicle) => (
                          <option
                            key={vehicle.id_vehiculo}
                            value={vehicle.id_vehiculo}
                            onKeyUp={() => {
                              trigger("id_vehiculo");
                            }}
                          >
                            {vehicle.placa}
                          </option>
                        ))}
                      </select>
                      {errors.id_vehiculo && (
                        <small className="text-danger">
                          {errors.id_vehiculo.message}
                        </small>
                      )}
                       


                       <label className="col-form-label modal-label">
                       Producto *:
                      </label>
                      <select
                        className={`form-control ${
                          errors.producto && "invalid"
                        }`}
                        value={route.id_producto}
                        {...register("producto", {
                          required: "El producto de la ruta es obligatoria",
                          min: {
                            value: 1,
                            message: "El producto de la ruta es obligatoria",
                          },
                        })}
                      >
                        <option value="0">Seleccionar</option>
                        {product.map((product) => (
                          <option
                            key={product.id_producto}
                            value={product.id_producto}
                            onKeyUp={() => {
                              trigger("id_producto");
                            }}
                          >
                            {product.nombre_producto}
                          </option>
                        ))}
                      </select>
                      {errors.id_producto && (
                        <small className="text-danger">
                          {errors.id_producto.message}
                        </small>
                      )}
                       
                      
                       <label className="col-form-label modal-label">
                      Fecha Inicio *:
                      </label>
                      <input
                        type="date"
                        className={`form-control ${
                          errors.fecha_inicio && "invalid"
                        }`}
                        value={route.fecha_inicio}
                        {...register("fecha_inicio", {
                          required: "La fecha inicio es obligatoria",
                        })}
                        onKeyUp={() => {
                          trigger("fecha_inicio");
                        }}
                      />
                      {errors.fecha_inicio && (
                        <small className="text-danger">
                          {errors.fecha_inicio.message}
                        </small>
                      )}
                  
                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                       Cantidad :
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.cantidad && "invalid"
                        }`}
                        value={route.cantidad}
                        {...register("cantidad", {
                          pattern: {
                            value: /^[0-9]{2}$/,
                            message: "cantidad de invalida",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("cantidad");
                        }}
                      />
                      {errors.cantidad && (
                        <small className="text-danger">
                          {errors.cantidad.message}
                        </small>
                      )}
                      <label className="col-form-label modal-label">
                        Flete *:
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.flete && "invalid"}`}
                        value={route.flete}
                        {...register("flete", {
                          required: "El flete de la ruta es obligatoria",
                          pattern: {
                            value: /^[0-9]/,
                            message: "Solo se permiten números",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("flete");
                        }}
                      />
                      {errors.flete && (
                        <small className="text-danger">
                          {errors.flete.message}
                        </small>
                      )}
                      <label className="col-form-label modal-label">
                       Fecha Fin *:
                      </label>
                      <input
                        type="date"
                        className={`form-control ${
                          errors.fecha_fin && "invalid"
                        }`}
                        value={route.fecha_fin}
                        {...register("fecha_fin", {
                          required:
                            "La Fecha Fin de la routa es obligatoria",
                        })}
                        onKeyUp={() => {
                          trigger("fecha_fin");
                        }}
                      />
                      {errors.fecha_fin && (
                        <small className="text-danger">
                          {errors.fecha_fin.message}
                        </small>
                      )}

                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                      Ciudad Origen *:
                      </label>
                      <select
                        className={`form-control ${
                          errors.id_origen && "invalid"
                        }`}
                        value={route.id_origen}
                        {...register("id_origen", {
                          required: "La ciudad_origen de la ruta es obligatoria",
                          min: {
                            value: 1,
                            message: "La ciudad_origen de la ruta es obligatoria",
                          },
                        })}
                      >
                        <option value="0">Seleccionar</option>
                        {citys.map((city) => (
                          <option
                            key={city.id_origen}
                            value={city.id_origen}
                            onKeyUp={() => {
                              trigger("id_origen");
                            }}
                          >
                            {city.ciudad_origen}
                          </option>
                        ))}
                      </select>
                      {errors.id_origen && (
                        <small className="text-danger">
                          {errors.id_origen.message}
                        </small>
                      )}
                       <label className="col-form-label modal-label">
                      Ciudad Destino *:
                      </label>
                      <select
                        className={`form-control ${
                          errors.id_destino && "invalid"
                        }`}
                        value={route.id_destino}
                        {...register("id_destino", {
                          required: "La ciudad_destino del ruta es obligatoria",
                          min: {
                            value: 1,
                            message: "La ciudad_destino del ruta es obligatoria",
                          },
                        })}
                      >
                        <option value="0">Seleccionar</option>
                        {citys.map((city) => (
                          <option
                            key={city.id_destino}
                            value={city.id_destino}
                            onKeyUp={() => {
                              trigger("id_destino");
                            }}
                          >
                            {city.ciudad_destino}
                          </option>
                        ))}
                      </select>
                      {errors.id_destino && (
                        <small className="text-danger">
                          {errors.id_destino.message}
                        </small>
                      )}


                      
                    </div>
                  </div>
                  <div className="modal-footer modal-btn">
                  <button type="submit" className="btn btn-info" onPress={handleSubmit(onSubmit)}>
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
