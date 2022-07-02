import dateFormat, { masks } from "dateformat";
import React, { useEffect, useState } from "react";
import "../../helpers/modal-function";
import { ValidationsFormConduct } from "../../helpers/ValidationsFormConduct";
import { UseEditConduct, UseInsertConduct, UseLicenseAvailable } from "../../hooks/UseCaseConduct";
import { UseVehicleAvailable } from "../../hooks/UseCaseVehicle";
import logo from "../../assets/img/LogoNew.png";
import "../../Styles/modal.css";

export const ModalCreateConduct = ({ isOpenEditModal, closeModalEdit, conductEdit, setConductEdit, conduct, setConduct }) => {


    const [errors, setErrors] = useState({});

    const initialConductState = {
        identificacion: "",
        nombre: "",
        primer_apellido: "",
        segundo_apellido: "",
        telefono_contacto: "",
        fecha_nacimiento: null,
        tipo_licencia: "",
        licencia_conduccion: "",
        expedicion_curso_seguridad: null,
        expedicion_curso_industrial: null,
        expedicion_examenes_medicos: null,
        vencimiento_curso_seguridad: null,
        vencimiento_curso_industrial: null,
        vencimiento_examenes_medicos: null,
        id_vehiculo: "",
        id_estado_conductor: null,
    }

    const handleChangeData = ({ target }) => {
        const { name, value } = target;
        setConduct({ ...conduct, [name]: value });
    }




    const handleBlur = (e) => {
        handleChangeData(e);
        setErrors(ValidationsFormConduct(conduct))
    }

    //console.log(conduct);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.entries(errors).length === 0) {
            if (conductEdit) {
                UseEditConduct(conduct)
                e.target.reset();
                closeModalEdit();
            } else {
                debugger
                UseInsertConduct(conduct);
                setConduct(initialConductState);
                e.target.reset();
                closeModalEdit();
            }
        } else {
            alert('Debes ingresar los campos de manera correcta');
        }

    };



    const handleCancelButton = () => {
        setConduct(initialConductState)
        setConductEdit(null)
        setErrors({})
        closeModalEdit()
    }

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };


    const { data: vehicle } = UseVehicleAvailable();
    const { data: licenses } = UseLicenseAvailable()

    const calcularFecha = (fecha, input) => {
        let myElement = document.getElementById(input);
        let fechaVencimiento = new Date(fecha)
        if (isOpenEditModal && fecha != null && myElement.value == "") {
            fechaVencimiento.setDate(fechaVencimiento.getDate() + 1)
            fechaVencimiento.setFullYear(fechaVencimiento.getFullYear() + 1)
            fechaVencimiento = dateFormat(fechaVencimiento, "isoDate")
            return fechaVencimiento;
        }
        if (isOpenEditModal && fecha != null && myElement.value != fecha) {
            fechaVencimiento.setDate(fechaVencimiento.getDate() + 1)
            fechaVencimiento.setFullYear(fechaVencimiento.getFullYear() + 1)
            fechaVencimiento = dateFormat(fechaVencimiento, "isoDate")
            return fechaVencimiento;
        }
    }



    const fechaMinima = () => {
        let fechaMin = new Date();
        fechaMin.setFullYear(fechaMin.getFullYear() - 1)
        fechaMin = dateFormat(fechaMin, "isoDate")
        return fechaMin;
    }

    const fechaMaxima = () => {
        let fechaMax = new Date();
        fechaMax = dateFormat(fechaMax, "isoDate")
        return fechaMax;
    }
    

    useEffect(() => {
        if (conductEdit) {
            console.log(conductEdit)
            setConduct(conductEdit)
        } else {
            setConduct(initialConductState)
        }
    }, [conductEdit, setConduct, setConductEdit]);

    return (
        <>
            <div
                className={`modalInicial ${isOpenEditModal && "modal-abierta"}`}
                onClick={closeModalEdit}
            >
                <div className="modal-dialog">
                    <div
                        className="modal-content modal-conduct contenido__modal"
                        onClick={handleModalDialogClick}
                    >
                        <div className="modal-header">
                        <img className="logo-form" src={logo} alt="logo" />
                            <h3 className="modal-title" id="exampleModalLabel">
                                {conductEdit ?
                                    ('Editar Conductor') :
                                    ('Registrar Conductor')}
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
                                    noValidate
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row align-items-start">
                                        <div className="col">
                                            <label className="col-form-label modal-label">
                                                Identificacion *:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control input-form`}
                                                value={conduct.identificacion}
                                                id="identificacion"
                                                name="identificacion"
                                                onChange={handleChangeData}
                                                disabled={conductEdit ? true : false}
                                                autoComplete="off"
                                                required

                                            />
                                            {errors.identificacion && <p className="error-message">{errors.identificacion}</p>}

                                            <label className="col-form-label modal-label">
                                                Telefono *:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control input-form`}
                                                value={conduct.telefono_contacto}
                                                name="telefono_contacto"
                                                id="telefono_contacto"
                                                onChange={handleChangeData}
                                                autoComplete="off"
                                            />
                                            {errors.telefono_contacto && <p className="error-message">{errors.telefono_contacto}</p>}

                                            <label className="col-form-label modal-label">
                                                Expedición curso seguridad *:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control input-form`}
                                                value={conductEdit && dateFormat(conduct.expedicion_curso_seguridad, "isoDate")}
                                                name="expedicion_curso_seguridad"
                                                id="expedicion_curso_seguridad"
                                                onChange={handleChangeData}
                                                min={fechaMinima()}
                                                max={fechaMaxima()}
                                                required
                                            />
                                            <label className="col-form-label modal-label">
                                                Vencimiento curso seguridad*:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control input-form`}
                                                value={calcularFecha(conduct.expedicion_curso_seguridad, "vencimiento_curso_seguridad")}
                                                name="vencimiento_curso_seguridad"
                                                id="vencimiento_curso_seguridad"     
                                                autoComplete="off"                                           
                                                required
                                                onChange={handleChangeData}
                                                readOnly
                                            />
                                        </div>
                                        <div className="col">
                                            <label className="col-form-label modal-label">
                                                Nombre:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control input-form`}
                                                value={conduct.nombre}
                                                name="nombre"
                                                id="nombre"
                                                autoComplete="off"
                                                onChange={handleChangeData}
                                            />

                                            {errors.nombre && <p className="error-message">{errors.nombre}</p>}

                                            <label className="col-form-label modal-label">
                                                Fecha nacimiento *:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control input-form`}
                                                value={conductEdit && dateFormat(conduct.fecha_nacimiento, "isoDate")}
                                                name="fecha_nacimiento"
                                                id="fecha_nacimiento"
                                                autoComplete="off"
                                                onChange={handleChangeData}
                                                min={fechaMinima()}
                                                max={fechaMaxima()}
                                                required
                                            />
                                            <label className="col-form-label modal-label">
                                                Expedicion curso industrial*:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control input-form`}
                                                value={conductEdit && dateFormat(conduct.expedicion_curso_industrial, "isoDate")}
                                                name="expedicion_curso_industrial"
                                                id="expedicion_curso_industrial"
                                                autoComplete="off"
                                                onChange={handleChangeData}
                                                min={fechaMinima()}
                                                max={fechaMaxima()}
                                                required
                                            />
                                            <label className="col-form-label modal-label">
                                                Vencimiento curso industrial*:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control input-form`}
                                                value={calcularFecha(conduct.expedicion_curso_industrial, "vencimiento_curso_industrial")}
                                                id="vencimiento_curso_industrial"
                                                name="vencimiento_curso_industrial"
                                                autoComplete="off"
                                                required
                                                onChange={handleChangeData}
                                                disabled
                                            />
                                        </div>
                                        <div className="col">
                                            <label className="col-form-label modal-label">
                                                Primer apellido *:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control input-form`}
                                                value={conduct.primer_apellido}
                                                name="primer_apellido"
                                                id="primer_apellido"
                                                autoComplete="off"
                                                onChange={handleChangeData}
                                            />
                                            {errors.primer_apellido && <p className="error-message">{errors.primer_apellido}</p>}

                                            <label className="col-form-label modal-label">
                                                Tipo licencia *: {" "}
                                            </label>
                                            <select
                                                className={`form-select input-form`}
                                                value={conduct.tipo_licencia}
                                                name="tipo_licencia"
                                                id="tipo_licencia"
                                                autoComplete="off"
                                                onChange={handleChangeData}
                                                required
                                            >
                                                <option value="0">Seleccionar</option>
                                                {licenses.map((lic) => (
                                                    <option
                                                        key={lic.id_tipo_licencia}
                                                        value={lic.id_tipo_licencia}
                                                    >
                                                        {lic.descripcion}
                                                    </option>
                                                ))}
                                            </select>
                                            <label className="col-form-label modal-label">
                                                Expedición examen medico*:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control input-form`}
                                                value={conductEdit && dateFormat(conduct.expedicion_examenes_medicos, "isoDate")}
                                                id="expedicion_examenes_medicos"
                                                name="expedicion_examenes_medicos"
                                                autoComplete="off"
                                                onChange={handleChangeData}
                                                min={fechaMinima()}
                                                max={fechaMaxima()}
                                                required
                                            />

                                            <label className="col-form-label modal-label">
                                                Vencimiento examen medico:*
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control input-form`}
                                                value={calcularFecha(conduct.expedicion_examenes_medicos, "vencimiento_examenes_medicos")}
                                                id="vencimiento_examenes_medicos"
                                                name="vencimiento_examenes_medicos"
                                                autoComplete="off"
                                                required
                                                onChange={handleChangeData}
                                                disabled
                                            />
                                        </div>
                                        <div className="col">
                                            <label className="col-form-label modal-label">
                                                Segundo apellido:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control input-form`}
                                                value={conduct.segundo_apellido}
                                                name="segundo_apellido"
                                                id="segundo_apellido"
                                                autoComplete="off"
                                                onChange={handleChangeData}
                                            />
                                            {errors.segundo_apellido && <p className="error-message">{errors.segundo_apellido}</p>}

                                            <label className="col-form-label modal-label">
                                                Numero licencia *:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control input-form`}
                                                value={conduct.licencia_conduccion}
                                                name="licencia_conduccion"
                                                id="licencia_conduccion"
                                                autoComplete="off"
                                                onChange={handleChangeData}
                                                required
                                            />

                                            {errors.licencia_conduccion && <p className="error-message">{errors.licencia_conduccion}</p>}

                                            <label className="col-form-label modal-label">
                                                Vehiculos disponibles *:
                                            </label>
                                            <select
                                                className={`form-select input-form`}
                                                value={conduct.id_vehiculo}
                                                name="id_vehiculo"
                                                id="id_vehiculo"
                                                autoComplete="off"
                                                onChange={handleChangeData}
                                                required
                                            >
                                                <option value="0">Seleccionar</option>
                                                {vehicle.map((vehi) => (
                                                    <option
                                                        key={vehi.id_vehiculo}
                                                        value={vehi.id_vehiculo}
                                                    >
                                                        {vehi.placa}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                        <div className="modal-footer modal-btn mt-4">
                                        <button type="submit" className="btn btn-info-form" onPress={handleSubmit} onClick={handleBlur}>
                                            {conductEdit ?
                                                ('Editar Conductor') :
                                                ('Registrar Conductor')}
                                        </button>
                                        <button
                                            type="reset"
                                            className="btn btn-danger"
                                            onClick={handleCancelButton}
                                        >
                                            Cancelar registro
                                        </button>
                                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};
