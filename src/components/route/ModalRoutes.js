import React, { useState } from "react";
import "../../Styles/modal.css";
import * as AiIcons from "react-icons/ai";
import "../../helpers/modal-function";
import { useForm } from "react-hook-form";
import {
  UseCity,
  UseConductRoute,
  UseInsertRoute,
  UseState,
  UseVehicleRoute,
} from "../../hooks/UseCaseRoute";

export const ModalRoute = ({ 
    isOpenEditModal,
    closeModalEdit,
    titleModal,
    buttonModal
     
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  /*
    const [state, setState] = useState({
        form: {
            id_ruta: '',
            codigo_ruta: '',
            nombre_producto: '',
            referencia: '',
            cantidad: '',
            fecha_inicio: '',
            fecha_fin: '',
            placa: '',
            flete: '',
            ciudad_origen: '',
            ciudad_destino: '',
            estado: '',
            identificacion: '',
            descripcion: '',
            nombre: '',
            
        }
    })
    */

  const onSubmit = (dataRoute, e) => {
    e.target.reset();
    UseInsertRoute(dataRoute);

    reset();
  };

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  const handleSubmitRegisterRoute = (e) => {
    e.preventDefault();
  };


  const { data: vehicles } = UseVehicleRoute();
  const { data: city } = UseCity();
  const { data: stateroute } = UseState();
  const { data: conduct } = UseConductRoute();


  return (
    <>
      <div
        className={`modalInicial ${isOpenEditModal && "modal-abierta"}`}
        onClick={closeModalEdit}
      >
        <div className="modal-dialog">
          <div
            className="modal-content contenido__modal"
            onClick={handleModalDialogClick}
          >
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                {titleModal}
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={closeModalEdit}
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
                       Codigo de Ruta *:
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.codigo_ruta && "invalid"}`}
                        {...register("codigo_ruta", {
                          required: "El codigo de ruta es obligatoria",
                          pattern: {
                            value: /^([A-Z]{2}-([0-9]{6})+)*$/,
                            message: " Formato de ruta CO-XXXXXX ",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("codigo_ruta");
                        }}
                      />
                      {errors.codigo_ruta && (
                        <small className="text-danger">
                          {errors.codigo_ruta.message}
                        </small>
                      )}
                      <label className="col-form-label modal-label">
                       Placa *:
                      </label>
                      <select
                        className={`form-control ${
                          errors.placa && "invalid"
                        }`}
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
                            {vehicle.id_vehiculo}
                          </option>
                        ))}
                      </select>
                      {errors.id_vehiculo && (
                        <small className="text-danger">
                          {errors.id_vehiculo.message}
                        </small>
                      )}
                       
                      <label className="col-form-label modal-label">
                       Conductor *:
                      </label>
                      <select
                        className={`form-control ${
                          errors.id_conductor && "invalid"
                        }`}
                        {...register("id_conductor", {
                          required: "La name del vehículo es obligatoria",
                          min: {
                            value: 1,
                            message: "La name del vehículo es obligatoria",
                          },
                        })}
                      >
                        <option value="0">Seleccionar</option>
                        {vehicles.map((conductor) => (
                          <option
                            key={conductor.id_conductor}
                            value={conductor.id_conductor}
                            onKeyUp={() => {
                              trigger("id_conductor");
                            }}
                          >
                            {conductor.id_conductor}
                          </option>
                        ))}
                      </select>
                      {errors.id_conductor && (
                        <small className="text-danger">
                          {errors.id_conductor.message}
                        </small>
                      )} 
                      <label className="col-form-label modal-label">
                      Nombre Producto *:
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.nombre_producto && "invalid"}`}
                        {...register("nombre_producto", {
                          required: "El Nombre del Producto es obligatoria",
                          pattern: {
                            value: /^([A-Z]{5}-([0-9]{2})+)*$/,
                            message: " El Nombre del producot ",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("nombre_producto");
                        }}
                      />
                      {errors.nombre_producto && (
                        <small className="text-danger">
                          {errors.nombre_producto.message}
                        </small>
                      )}
                    </div>
                    <div className="col">
                    <label className="col-form-label modal-label">
                      Referencia*:
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.referencia && "invalid"
                        }`}
                        {...register("referencia", {
                          required: "La referencia del vehículo es requerida",
                          min: {
                            value: 17,
                            message: "Toneladas mínimas requeridas: 17",
                          },
                          max: {
                            value: 44,
                            message: "Toneladas máximas: 44",
                          },
                          pattern: {
                            value: /^[0-9]*$/,
                            message: "Solo se permiten números",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("referencia");
                        }}
                      />
                      {errors.referencia && (
                        <small className="text-danger">
                          {errors.referencia.message}
                        </small>
                      )}
                      <label className="col-form-label modal-label">
                       Cantidad :
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.cantidad && "invalid"
                        }`}
                        {...register("cantidad", {
                          pattern: {
                            value: /^[0-9]{4}$/,
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
                        {...register("flete", {
                          required: "El flete del vehículo es obligatoria",
                          pattern: {
                            value: /^[0-9]{4}$/,
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
                      Fecha Inicio *:
                      </label>
                      <input
                        type="date"
                        className={`form-control ${
                          errors.fecha_inicio && "invalid"
                        }`}
                        {...register("fecha_inicio", {
                          required: "La fecha del fecha_inicio es obligatoria",
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
                      Ciudad Origen *:
                      </label>
                      <select
                        className={`form-control ${
                          errors.id_origen && "invalid"
                        }`}
                        {...register("id_origen", {
                          required: "El ciudad_origen del vehículo es obligatoria",
                          min: {
                            value: 1,
                            message: "El ciudad_origen del vehículo es obligatoria",
                          },
                        })}
                      >
                        <option value="0">Seleccionar</option>
                        {city.map((city) => (
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
                          {errors.ciudad_origen.message}
                        </small>
                      )}
                       <label className="col-form-label modal-label">
                      Ciudad Destino *:
                      </label>
                      <select
                        className={`form-control ${
                          errors.id_destino && "invalid"
                        }`}
                        {...register("id_destino", {
                          required: "El ciudad_destino del vehículo es obligatoria",
                          min: {
                            value: 1,
                            message: "El ciudad_destino del vehículo es obligatoria",
                          },
                        })}
                      >
                        <option value="0">Seleccionar</option>
                        {city.map((city) => (
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


                      <label className="col-form-label modal-label">
                       Fecha Fin *:
                      </label>
                      <input
                        type="date"
                        className={`form-control ${
                          errors.fecha_fin && "invalid"
                        }`}
                        {...register("fecha_fin", {
                          required:
                            "La fecha de la route es obligatoria",
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
                  </div>
                  <div className="modal-footer modal-btn">
                    <button
                      type="submit"
                      className="btn btn-info"
                      onPress={handleSubmit(onSubmit)}
                    >
                      {buttonModal}
                    </button>
                    <button
                      type="reset"
                      className="btn  btn-danger"
                      onClick={closeModalEdit}
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
