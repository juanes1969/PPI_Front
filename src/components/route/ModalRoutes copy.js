import React, { useState } from 'react'
import '../../Styles/modal.css'
import * as AiIcons from 'react-icons/ai';
import { UseVehicleAvailable } from '../../hooks/UseCaseVehicle';
import { UseCity, UseConductRoute, UseInsertRoute, UseState, UseVehicleRoute } from '../../hooks/UseCaseRoute';

export const ModalRoute = ({ 
    isOpenEditModal,
     closeModalEdit,
      titleModal 
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
    }

    const handleSubmitRegisterRoute = (e) => {

        e.preventDefault();

    }

    const handleInputChange = async (e) => {
        await setState({
            form: {
                ...state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(e.target.value)
    }


    const { data: vehicle} = UseVehicleRoute();
    const { data: city } = UseCity();
    const { data: stateroute} = UseState();
    const { data: conduct} = UseConductRoute();

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
                        Placa *:
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.placa && "invalid"}`}
                        {...register("placa", {
                          required: "La placa es obligatoria",
                          pattern: {
                            value: /^([A-Z]{3}-([0-9]{3})+)*$/,
                            message: "Placa invalida",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("placa");
                        }}
                      />
                      {errors.placa && (
                        <small className="text-danger">
                          {errors.placa.message}
                        </small>
                      )}
                      <label className="col-form-label modal-label">
                        Marca *:
                      </label>
                      <select  
                      className={`form-control ${errors.id_marca && "invalid" }`}
                       {...register("id_marca", {
                        required: "La marca del vehículo es obligatoria",
                        min: {
                          value: 1,
                          message: "La marca del vehículo es obligatoria",
                        },
                      })}
                        
                      >
                        <option value="0">Seleccionar</option>
                        {marcas.map((marca) => (
                          <option
                            key={marca.id_marca}
                            value={marca.id_marca}
                            onKeyUp={() => {
                              trigger("id_marca");
                            }}
                          >
                            {marca.marcaVehiculo}
                          </option>
                        ))}
                      </select>
                      {errors.id_marca && (
                        <small className="text-danger">
                          {errors.id_marca.message}
                        </small>
                      )}
                      <label className="col-form-label modal-label">
                        Fecha Poliza *:
                      </label>
                      <input
                        type="date"
                        className={`form-control ${
                          errors.fecha_poliza && "invalid"
                        }`}
                        {...register("fecha_poliza", {
                          required: "La fecha de la poliza es obligatoria",
                        })}
                        onKeyUp={() => {
                          trigger("fecha_poliza");
                        }}
                      />
                      {errors.fecha_poliza && (
                        <small className="text-danger">
                          {errors.fecha_poliza.message}
                        </small>
                      )}

                      <label className="col-form-label modal-label">
                        Capacidad (Toneladas)*:
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.capacidad && "invalid"
                        }`}
                        {...register("capacidad", {
                          required: "La capacidad del vehículo es requerida",
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
                          trigger("capacidad");
                        }}
                      />
                      {errors.capacidad && (
                        <small className="text-danger">
                          {errors.capacidad.message}
                        </small>
                      )}
                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Placa Trailer:
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.r_trailer && "invalid"
                        }`}
                        {...register("r_trailer", {
                          pattern: {
                            value: /^([R]{1}-([0-9]{5})+)*$/,
                            message: "Placa de trailer invalida",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("r_trailer");
                        }}
                      />
                      {errors.r_trailer && (
                        <small className="text-danger">
                          {errors.r_trailer.message}
                        </small>
                      )}
                      <label className="col-form-label modal-label">
                        Modelo *:
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.modelo && "invalid"}`}
                        {...register("modelo", {
                          required: "El modelo del vehículo es obligatoria",
                          pattern: {
                            value: /^[0-9]{4}$/,
                            message: "Solo se permiten números",
                          },
                        })}
                        onKeyUp={() => {
                          trigger("modelo");
                        }}
                      />
                      {errors.modelo && (
                        <small className="text-danger">
                          {errors.modelo.message}
                        </small>
                      )}
                      <label className="col-form-label modal-label">
                        Fecha SOAT *:
                      </label>
                      <input
                        type="date"
                        className={`form-control ${
                          errors.fecha_soat && "invalid"
                        }`}
                        {...register("fecha_soat", {
                          required: "La fecha del SOAT es obligatoria",
                        })}
                        onKeyUp={() => {
                          trigger("fecha_soat");
                        }}
                      />
                      {errors.fecha_soat && (
                        <small className="text-danger">
                          {errors.fecha_soat.message}
                        </small>
                      )}
                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Tipo Vehículo *:
                      </label>
                      <select
                        className={`form-control ${errors.id_tipo && "invalid"}`}
                      {...register("id_tipo", {
                        required: "El tipo del vehículo es obligatoria",
                        min: {
                          value: 1,
                          message: "El tipo del vehículo es obligatoria",
                        },
                      })}
                      >
                        <option value="0">Seleccionar</option>
                        {type.map((type) => (
                          <option
                            key={type.id_tipo}
                            value={type.id_tipo}
                            
                            onKeyUp={() => {
                              trigger("id_tipo");
                            }}
                          >
                            {type.tipoVehiculo}
                          </option>
                        ))}
                      </select>
                      {errors.id_tipo && (
                        <small className="text-danger">
                          {errors.id_tipo.message}
                        </small>
                      )}

                      <label className="col-form-label modal-label">
                        Matrícula *:{" "}
                      </label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.matricula && "invalid"
                        }`}
                        {...register("matricula", {
                          required: "La matrícula es obligatoria",
                        })}
                        onKeyUp={() => {
                          trigger("matricula");
                        }}
                      />
                      {errors.matricula && (
                        <small className="text-danger">
                          {errors.matricula.message}
                        </small>
                      )}
                      <label className="col-form-label modal-label">
                        Fecha Técnico Mecánica *:
                      </label>
                      <input
                        type="date"
                        className={`form-control ${
                          errors.fecha_tecnomecanica && "invalid"
                        }`}
                        {...register("fecha_tecnomecanica", {
                          required:
                            "La fecha de la Técnico Mecánica es obligatoria",
                        })}
                        onKeyUp={() => {
                          trigger("fecha_tecnomecanica");
                        }}
                      />
                      {errors.fecha_tecnomecanica && (
                        <small className="text-danger">
                          {errors.fecha_tecnomecanica.message}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="modal-footer modal-btn">
                    <button type="submit" className="btn btn-info" onPress={handleSubmit(onSubmit)}>
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



        
            <div className={`modalInicial ${isOpenEditModal && 'modal-abierta'}`} 
                onClick={closeModalEdit}
            >
                <div className="contenido__modal" 
                    onClick={handleModalDialogClick}
                >
                    <button id="btnCloseModalRoutes" onClick={closeModalEdit}>
                        <AiIcons.AiOutlineClose />
                    </button>

                    <h1>{titleModal}</h1>


                    <div className="container">
                        <form className="form-modal">
                            <div className="row align-items-start">
                                <div className="col">
                                    <label>Codigo de Ruta *: </label>
                                    <input type="text" className="form-control" name="CodigoRuta" onChange={handleInputChange} />

                                    <label>Nombre Producto *: </label>
                                    <input type="text" className="form-control" name="nombreProducto" onChange={handleInputChange} />

                                    <label>Referencia*: </label>
                                    <input type="tex" className="form-control" name="referencia" onChange={handleInputChange} />
                                    
                                    <label>Cantidad *: </label>
                                    <input type="text" className="form-control" name="cantidad" onChange={handleInputChange} />

                                </div>
                                <div className="col">
                                    <label>Flete *: </label>
                                    <input type="text" className="form-control" name="flete" onChange={handleInputChange} />

                                    <label>Placa *: </label>
                                    <input type="text" className="form-control" name="placa" onChange={handleInputChange} />

                                    <label>Conductor *: </label>
                                    <input type="text" className="form-control" name="conductor" onChange={handleInputChange} />

                                </div>
                                <div className="col">
                                    <label>Ciudad Origen *: </label>
                                    <input type="text" className="form-control" name="ciudadOrigen" onChange={handleInputChange} />

                                    <label>Ciudad Destino *: </label>
                                    <input type="text" className="form-control" name="ciudadDestino" onChange={handleInputChange} />

                                    <label>Fecha Inicio *: </label>
                                    <input type="date" className="form-control" name="fechaInicio" onChange={handleInputChange} />

                                    <label>Fecha Fin *: </label>
                                    <input type="date" className="form-control" name="fechaFin" onChange={handleInputChange} />
                                </div>
                            </div>
                            <br /><br />

                            <button onClick={handleSubmitRegisterRoute}>Registrar Ruta</button>
                            <button>Cancelar registro</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
