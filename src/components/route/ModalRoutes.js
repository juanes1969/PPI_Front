import React, { useEffect } from "react";
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

export const ModalRoute = ({
  isOpenModal,
  closeModal,
  routes,
  setRoutes,
  routeEdit,
  setRouteEdit

}) => {

  console.log(routes)
  const initialRouteState = {


    producto: "",
    cantidad: "",
    fecha_inicio: null,
    fecha_fin: null,
    flete: "",
    id_vehiculo: "",
    id_origen: "",
    id_destino: "",
    id_estado_ruta: null

  }

  const handleChangeData = ({ target }) => {
    const { name, value } = target;
    setRoutes({ ...routes, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (routeEdit) {
      UseSaveRoute(routes)
      e.target.reset();
      closeModal();
    } else {
      debugger
      UseInsertRoute(routes);
      setRoutes(initialRouteState);
      e.target.reset();
      closeModal();
    }
  };

  const {
    formState: { errors },
    
    trigger,
  } = useForm();
  /*
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
      } else {
        e.target.reset();
        UseInsertRoute(dataRoute);
        reset();
        closeModal();
  
      }
  
    };
    */

  const handleCancelButton = () => {
    setRoutes(initialRouteState)
    setRouteEdit(null)
    closeModal()
  }

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };



  const { data: vehicles } = UseVehicleRoute();
  const { data: citys } = UseCity();
  const { data: products } = UseProduct();



  

  useEffect(() => {
    debugger
    if (routeEdit) {
      debugger
      console.log(routeEdit)
      setRoutes(routeEdit)
    } else {
      setRoutes(initialRouteState)
    }
  }, [routeEdit, setRoutes, setRouteEdit]);


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
                  onSubmit={handleSubmit}
                >
                  <div className="row align-items-start">
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Placa *:
                      </label>
                      <select
                        className={`form-select`}
                        value={routes.id_vehiculo}
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
                       
                        
                        className={`form-control ${errors.producto && "invalid"
                          }`}
                        value={routes.id_producto}
                        {...UseInsertRoute("producto", {
                          required: "El producto de la ruta es obligatoria",
                          min: {
                            value: 1,
                            message: "El producto de la ruta es obligatoria",
                          },
                        })}
                        name="id_producto"
                        id="id_producto"
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
                        className={`form-control ${errors.fecha_inicio && "invalid"
                          }`}
                        value={routes.fecha_inicio}
                        {...UseInsertRoute("fecha_inicio", {
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
                        Cantidad :
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.cantidad && "invalid"
                          }`}
                        value={routes.cantidad}
                        {...UseInsertRoute("cantidad", {
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
                        value={routes.flete}
                        {...UseInsertRoute("flete", {
                          required: "El flete del vehículo es obligatoria",
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
                        className={`form-control ${errors.fecha_fin && "invalid"
                          }`}
                        value={routes.fecha_fin}
                        {...UseInsertRoute("fecha_fin", {
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
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Ciudad Origen *:
                      </label>
                      <select
                        className={`form-control ${errors.id_origen && "invalid"
                          }`}
                        value={routes.id_origen}
                        {...UseInsertRoute("id_origen", {
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
                        className={`form-control ${errors.id_destino && "invalid"
                          }`}
                        value={routes.id_destino}
                        {...UseInsertRoute("id_destino", {
                          required: "El ciudad_destino del vehículo es obligatoria",
                          min: {
                            value: 1,
                            message: "El ciudad_destino del vehículo es obligatoria",
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
                    <button type="submit" className="btn btn-info" onPress={handleSubmit}>
                      
                    </button>
                    <button
                      type="reset"
                      className="btn  btn-danger"
                      onClick={handleCancelButton}
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
