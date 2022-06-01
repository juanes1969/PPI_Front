import dateFormat, { masks } from "dateformat";
import React, { useEffect } from "react";
import "../../helpers/modal-function";
import { UseEditConduct, UseInsertConduct, UseLicenseAvailable } from "../../hooks/UseCaseConduct";
import { UseVehicleAvailable } from "../../hooks/UseCaseVehicle";
import "../../Styles/modal.css";

export const ModalCreateConduct = ({ isOpenEditModal, closeModalEdit, conductEdit, setConductEdit, conduct, setConduct }) => {

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

    console.log(conduct);

    const handleSubmit = (e) => {
        e.preventDefault();
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
    };



    const handleCancelButton = () => {
        setConduct(initialConductState)
        setConductEdit(null)
        closeModalEdit()
    }

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    };


    const { data: vehicle } = UseVehicleAvailable();
    const { data: licenses } = UseLicenseAvailable()

    const calcularFecha = (fecha, input) => {
        var myElement = document.getElementById(input);
        if (isOpenEditModal && fecha != null && myElement.value == "") {
            let fechaVencimiento = new Date(fecha)
            fechaVencimiento.setDate(fechaVencimiento.getDate() + 1)
            fechaVencimiento.setFullYear(fechaVencimiento.getFullYear() + 1)
            fechaVencimiento = dateFormat(fechaVencimiento, "isoDate")
            activarOnChange(fechaVencimiento, input)
            return fechaVencimiento;
        }
    }

    const activarOnChange = (fechaVencimiento, valor) => {
        var myElement = document.getElementById(valor);
        if (!myElement.onchange) {
            setConduct({ ...conduct, [valor]: fechaVencimiento });
            myElement.onchange = true
        }
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
                        className="modal-content contenido__modal"
                        onClick={handleModalDialogClick}
                    >
                        <div className="modal-header">
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
                                    novalidate
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row align-items-start">
                                        <div className="col">
                                            <label className="col-form-label modal-label">
                                                Identificacion *:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control`}
                                                value={conduct.identificacion}
                                                id="identificacion"
                                                name="identificacion"
                                                onChange={handleChangeData}
                                                disabled={conductEdit ? true : false}
                                                required
                                            />
                                            <label className="col-form-label modal-label">
                                                Telefono *:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control`}
                                                value={conduct.telefono_contacto}
                                                name="telefono_contacto"
                                                id="telefono_contacto"
                                                onChange={handleChangeData}
                                            />
                                            <label className="col-form-label modal-label">
                                                Expedición curso seguridad *:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control`}
                                                value={dateFormat(conduct.expedicion_curso_seguridad, "isoDate")}
                                                name="expedicion_curso_seguridad"
                                                id="expedicion_curso_seguridad"
                                                onChange={handleChangeData}
                                                required
                                            />
                                            <label className="col-form-label modal-label">
                                                Vencimiento curso seguridad*:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control`}
                                                value={calcularFecha(conduct.expedicion_curso_seguridad, "vencimiento_curso_seguridad")}
                                                name="vencimiento_curso_seguridad"
                                                id="vencimiento_curso_seguridad"
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
                                                className={`form-control`}
                                                value={conduct.nombre}
                                                name="nombre"
                                                id="nombre"
                                                onChange={handleChangeData}
                                            />
                                            <label className="col-form-label modal-label">
                                                Fecha nacimiento *:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control`}
                                                value={dateFormat(conduct.fecha_nacimiento, "isoDate")}
                                                name="fecha_nacimiento"
                                                id="fecha_nacimiento"
                                                onChange={handleChangeData}
                                                required
                                            />
                                            <label className="col-form-label modal-label">
                                                Expedicion curso industrial*:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control`}
                                                value={dateFormat(conduct.expedicion_curso_industrial, "isoDate")}
                                                name="expedicion_curso_industrial"
                                                id="expedicion_curso_industrial"
                                                onChange={handleChangeData}
                                                required
                                            />
                                            <label className="col-form-label modal-label">
                                                Vencimiento curso industrial*:
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control`}
                                                value={calcularFecha(conduct.expedicion_curso_industrial, "vencimiento_curso_industrial")}
                                                id="vencimiento_curso_industrial"
                                                name="vencimiento_curso_industrial"
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
                                                className={`form-control`}
                                                value={conduct.primer_apellido}
                                                name="primer_apellido"
                                                id="primer_apellido"
                                                onChange={handleChangeData}
                                            />
                                            <label className="col-form-label modal-label">
                                                Tipo licencia *: {" "}
                                            </label>
                                            <select
                                                className={`form-select`}
                                                value={conduct.tipo_licencia}
                                                name="tipo_licencia"
                                                id="tipo_licencia"
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
                                                className={`form-control `}
                                                value={dateFormat(conduct.expedicion_examenes_medicos, "isoDate")}
                                                id="expedicion_examenes_medicos"
                                                name="expedicion_examenes_medicos"
                                                onChange={handleChangeData}
                                                required
                                            />

                                            <label className="col-form-label modal-label">
                                                Vencimiento examen medico:*
                                            </label>
                                            <input
                                                type="date"
                                                className={`form-control`}
                                                value={calcularFecha(conduct.expedicion_examenes_medicos, "vencimiento_examenes_medicos")}
                                                id="vencimiento_examenes_medicos"
                                                name="vencimiento_examenes_medicos"
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
                                                className={`form-control`}
                                                value={conduct.segundo_apellido}
                                                name="segundo_apellido"
                                                id="segundo_apellido"
                                                onChange={handleChangeData}
                                            />
                                            <label className="col-form-label modal-label">
                                                Numero licencia *:
                                            </label>
                                            <input
                                                type="text"
                                                className={`form-control `}
                                                value={conduct.licencia_conduccion}
                                                name="licencia_conduccion"
                                                id="licencia_conduccion"
                                                onChange={handleChangeData}
                                                required
                                            />
                                            <label className="col-form-label modal-label">
                                                Vehiculos disponibles *:
                                            </label>
                                            <select
                                                className={`form-select`}
                                                value={conduct.id_vehiculo}
                                                name="id_vehiculo"
                                                id="id_vehiculo"
                                                onChange={handleChangeData}
                                                required
                                            >
                                                <option value="0">Seleccionar</option>
                                                {vehicle.map((vehicle) => (
                                                    <option
                                                        key={vehicle.id_vehiculo}
                                                        value={vehicle.id_vehiculo}
                                                    >
                                                        {vehicle.placa}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="modal-footer modal-btn mt-4">
                                        <button type="submit" className="btn btn-info" onPress={handleSubmit}>
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
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
