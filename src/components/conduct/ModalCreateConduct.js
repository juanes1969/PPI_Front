import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../helpers/modal-function";
import { UseEditConduct, UseInsertConduct } from "../../hooks/UseCaseConduct";
import { UseVehicleAvailable } from "../../hooks/UseCaseVehicle";
import "../../Styles/modal.css";
import dateFormat, { masks } from "dateformat";

export const ModalCreateConduct = ({ isOpenEditModal, closeModalEdit, conduct, setConduct, isEdit, setIsEdit }) => {

    const { register, handleSubmit, formState: { errors }, reset, trigger } = useForm();


    const onSubmit = (dataConduct, e) => {
        if (isEdit) {
            e.target.reset();
            UseEditConduct(conduct.identificacion, dataConduct);
            reset()
            closeModalEdit();

        } else {
            e.target.reset();
            UseInsertConduct(dataConduct);
            reset();
            closeModalEdit();
        }
    };



    const handleCancelButton = () => {        
        setIsEdit(false)
        setConduct({})
        console.log(conduct);
        closeModalEdit()
    }

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };


    const { data: vehicle } = UseVehicleAvailable();


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
                                {isEdit ?
                                    ('Editar conductor') :
                                    ('Registrar conductor')}
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
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className="row align-items-start">
                                        <div className="col">
                                            <label className="col-form-label modal-label">
                                                Identificacion *:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.identificacion && "invalid"}`}
                                                value={conduct.identificacion}
                                                {...register("identificacion", {
                                                    required: "La identificacion es obligatoria",
                                                    pattern: {
                                                        value: /^(([0-9]))*$/,
                                                        message: "Identificacion invalida",
                                                    },
                                                })}
                                                onKeyUp={() => {
                                                    trigger("identificacion");
                                                }}

                                            />
                                            {errors.identificacion && (
                                                <small className="text-danger">
                                                    {errors.identificacion.message}
                                                </small>
                                            )}
                                            <label className="col-form-label modal-label">
                                                Segundo apellido *:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.segundo_apellido && "invalid"}`}
                                                value={conduct.segundo_apellido}
                                                {...register("segundo_apellido", {
                                                    required: "Segundo apellido es obligatorio",
                                                    pattern: {
                                                        value: /^(([A-z]))*$/,
                                                        message: "Segundo apellido invalido",
                                                    },
                                                })}
                                                onKeyUp={() => {
                                                    trigger("segundo_apellido");
                                                }}
                                            />{errors.segundo_apellido && (
                                                <small className="text-danger">
                                                    {errors.segundo_apellido.message}
                                                </small>
                                            )}
                                            <label className="col-form-label modal-label">
                                                Licencia conduccion *:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.licencia_conduccion && "invalid"}`}
                                                value={conduct.licencia_conduccion}
                                                {...register("licencia_conduccion", {
                                                    required: "Licencia de conduccion es obligatoria",
                                                    pattern: {
                                                        value: /^([LC]{2}([0-9]{5})+)*$/,
                                                        message: "Licencia de conduccion invalida",
                                                    },
                                                })}
                                                onKeyUp={() => {
                                                    trigger("licencia_conduccion");
                                                }}
                                            />
                                            {errors.licencia_conduccion && (
                                                <small className="text-danger">
                                                    {errors.licencia_conduccion.message}
                                                </small>
                                            )}

                                            <label className="col-form-label modal-label">
                                                Fecha examenes medicos*:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control ${errors.examenes_medicos && "invalid"}`}
                                                value={conduct.examenes_medicos}
                                                {...register("examenes_medicos", {
                                                    required: "La fecha del examen es oblogatoria",
                                                })}
                                                onKeyUp={() => {
                                                    trigger("examenes_medicos");
                                                }}
                                            />
                                            {errors.examenes_medicos && (
                                                <small className="text-danger">
                                                    {errors.examenes_medicos.message}
                                                </small>
                                            )}
                                        </div>
                                        <div className="col">
                                            <label className="col-form-label modal-label">
                                                Nombre:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.nombre && "invalid"}`}
                                                value={conduct.nombre}
                                                {...register("nombre", {
                                                    required: "El nombre es obligatorio",
                                                    pattern: {
                                                        value: /^(([A-z]))*$/,
                                                        message: "Nombre invalido",
                                                    },
                                                })}
                                                onKeyUp={() => {
                                                    trigger("nombre");
                                                }}
                                            />
                                            {errors.nombre && (
                                                <small className="text-danger">
                                                    {errors.nombre.message}
                                                </small>
                                            )}
                                            <label className="col-form-label modal-label">
                                                Telefono *:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.telefono_contacto && "invalid"}`}
                                                value={conduct.telefono_contacto}
                                                {...register("telefono_contacto", {
                                                    required: "El telefono es obligatorio",
                                                    pattern: {
                                                        value: /^[0-9]{10}$/,
                                                        message: "Solo se permiten números",
                                                    },
                                                })}
                                                onKeyUp={() => {
                                                    trigger("telefono_contacto");
                                                }}
                                            />
                                            {errors.telefono_contacto && (
                                                <small className="text-danger">
                                                    {errors.telefono_contacto.message}
                                                </small>
                                            )}
                                            <label className="col-form-label modal-label">
                                                Fecha curso seguridad *:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control ${errors.fecha_curso_seguridad && "invalid"}`}
                                                value={conduct.fecha_curso_seguridad}
                                                {...register("fecha_curso_seguridad", {
                                                    required: "La fecha es obligatoria",
                                                })}
                                                onKeyUp={() => {
                                                    trigger("fecha_curso_seguridad");
                                                }}
                                            />
                                            {errors.fecha_curso_seguridad && (
                                                <small className="text-danger">
                                                    {errors.fecha_curso_seguridad.message}
                                                </small>
                                            )}
                                            <label className="col-form-label modal-label">
                                                Vehiculos disponibles *:
                                            </label>
                                            <select
                                                className={`form-control ${errors.id_vehiculo && "invalid"}`}
                                                value={conduct.id_vehiculo}
                                                {...register("id_vehiculo", {
                                                    required: "Selecciona un vehiculo",
                                                    min: {
                                                        value: 1,
                                                        message: "Selecciona un vehiculo",
                                                    },
                                                })}

                                            >
                                                <option value="0">Seleccionar</option>
                                                {vehicle.map((type) => (
                                                    <option
                                                        key={type.placa}
                                                        value={type.placa}

                                                        onKeyUp={() => {
                                                            trigger("id_vehiculo");
                                                        }}
                                                    >
                                                        {type.placa}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.id_vehiculo && (
                                                <small className="text-danger">
                                                    {errors.id_vehiculo.message}
                                                </small>
                                            )}
                                        </div>
                                        <div className="col">
                                            <label className="col-form-label modal-label">
                                                Primer apellido *:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.primer_apellido && "invalid"}`}
                                                value={conduct.primer_apellido}
                                                {...register("primer_apellido", {
                                                    required: "Primer apellido es obligatorio",
                                                    pattern: {
                                                        value: /^(([A-z]))*$/,
                                                        message: "Primer apellido invalido",
                                                    },
                                                })}
                                                onKeyUp={() => {
                                                    trigger("primer_apellido");
                                                }}
                                            />
                                            {errors.primer_apellido && (
                                                <small className="text-danger">
                                                    {errors.primer_apellido.message}
                                                </small>
                                            )}

                                            <label className="col-form-label modal-label">
                                                Fecha nacimiento *:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control ${errors.fecha_nacimiento && "invalid"}`}
                                                value={conduct.fecha_nacimiento}
                                                {...register("fecha_nacimiento", {
                                                    required: "La fecha de nacimiento es obligatoria",
                                                })}
                                                onKeyUp={() => {
                                                    trigger("fecha_nacimiento");
                                                }}
                                            />
                                            {errors.fecha_nacimiento && (
                                                <small className="text-danger">
                                                    {errors.fecha_nacimiento.message}
                                                </small>
                                            )}
                                            <label className="col-form-label modal-label">
                                                Fecha curso industrial *:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control ${errors.fecha_curso_industrial && "invalid"}`}
                                                value={conduct.fecha_curso_industrial}
                                                {...register("fecha_curso_industrial", {
                                                    required: "La fecha es obligatoria",
                                                })}
                                                onKeyUp={() => {
                                                    trigger("fecha_curso_industrial");
                                                }}
                                            />
                                            {errors.fecha_curso_industrial && (
                                                <small className="text-danger">
                                                    {errors.fecha_curso_industrial.message}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                    <div className="modal-footer modal-btn" id="btns-modal-footer">
                                        <button type="submit" className="btn btn-info">
                                            {isEdit ?
                                                ('Editar conductor') :
                                                ('Registrar conductor')}
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
