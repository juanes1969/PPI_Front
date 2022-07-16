import dateFormat from "dateformat";
import React, { useEffect } from "react";
import logo from "../../assets/img/LogoNew.png";
import "../../helpers/modal-function";
import "../../Styles/modal.css";

import { UseEffectConduct } from "../../hooks/UseCaseConduct";
import {
  UseCity,
  UseInsertRoute, UseSaveRoute
} from "../../hooks/UseCaseRoute";
import { UseEffectGetVehicles } from "../../hooks/UseCaseVehicle";

export const ModalRoutes = ({
  isOpenModal,
  closeModal,
  route,
  setRouteData,
  isEdit,
  setIsEdit,
}) => {
  const initialRouteState = {
    codigo_manifiesto: "",
    fecha_inicio: null,
    fecha_fin: null,
    flete: "",
    id_vehiculo: null,
    id_estado_envio: null,
    id_origen: null,
    id_destino: null,
    id_conductor: null,
  };

  const handleChangeData = ({ target }) => {
    const { name, value } = target;
    setRouteData({ ...route, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      UseSaveRoute(route);
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
    setRouteData(initialRouteState);
    setIsEdit(null);
    closeModal();
  };

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  const fechaMinima = () => {
    let fechaMin = new Date();
    fechaMin.setFullYear(fechaMin.getFullYear() - 1);
    fechaMin = dateFormat(fechaMin, "isoDate");
    return fechaMin;
  };

  const fechaMaxima = () => {
    let fechaMax = new Date();
    fechaMax = dateFormat(fechaMax, "isoDate");
    return fechaMax;
  };

  const valorMinimo = () => {
    let valorMin = 10000;
    return valorMin;
  };

  const { data: conducts } = UseEffectConduct();
  const { data: vehicles } = UseEffectGetVehicles();
  const { data: citys } = UseCity();

  useEffect(() => {
    if (isEdit) {
      setRouteData(isEdit);
    } else {
      setRouteData(initialRouteState);
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
            className="modal-content modal-ruta contenido__modal"
            onClick={handleModalDialogClick}
          >
            <div className="modal-header">
              <img className="logo-form" src={logo} alt="logo" />
              <h3 className="modal-title" id="exampleModalLabel">
                {isEdit ? "Editar ruta" : "Registrar ruta"}
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
                        Código Manifiesto *:
                      </label>
                      <input
                        type="text"
                        className={`form-control input-form`}
                        value={route.codigo_manifiesto}
                        name="codigo_manifiesto"
                        id="codigo_manifiesto"
                        onChange={handleChangeData}
                        required
                      />
                      <label className="col-form-label modal-label">
                        Ciudad Origen *:
                      </label>|
                      <select
                        className={`form-control input-form`}
                        value={route.id_origen}
                        name="id_origen"
                        id="id_origen"
                        onChange={handleChangeData}
                        required
                      >
                        <option value="0">Seleccionar</option>
                        {citys.map((city) => (
                          <option key={city.id_origen} value={city.id_origen}>
                            {city.ciudad_origen}
                          </option>
                        ))}
                      </select>
                      <label className="col-form-label modal-label">
                        Fecha Inicio *:
                      </label>
                      <input
                        type="date"
                        className={`form-control input-form`}
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
                        Placa *:
                      </label>
                      <select
                        className={`form-control input-form`}
                        value={route.id_vehiculo}
                        name="id_vehiculo"
                        id="id_vehiculo"
                        onChange={handleChangeData}
                        required
                      >
                        <option value="0">Seleccionar</option>
                        {vehicles.map((vehicle) => (
                          <option
                            key={vehicle.placa}
                            value={vehicle.placa}
                          >
                            {vehicle.placa}
                          </option>
                        ))}
                      </select>

                      <label className="col-form-label modal-label">
                        Ciudad Destino *:
                      </label>
                      <select
                        className={`form-control input-form`}
                        value={route.id_destino}
                        name="id_destino"
                        id="id_destino"
                        onChange={handleChangeData}
                        required
                      >
                        <option value="0">Seleccionar</option>
                        {citys.map((city) => (
                          <option key={city.id_destino} value={city.id_destino}>
                            {city.ciudad_destino}
                          </option>
                        ))}
                      </select>

                      <label className="col-form-label modal-label">
                        Fecha Fin *:
                      </label>
                      <input
                        type="date"
                        className={`form-control input-form`}
                        value={route.fecha_fin}
                        name="fecha_fin"
                        id="fecha_fin"
                        onChange={handleChangeData}
                        required
                      />

                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Conductor *:
                      </label>
                      <select
                        className={`form-control input-form`}
                        value={route.id_conductor}
                        name="id_conductor"
                        id="id_conductor"
                        onChange={handleChangeData}
                        required
                      >
                        <option value="0">Seleccionar</option>
                        {conducts.map((conduct) => (
                          <option
                            key={conduct.identificacion}
                            value={conduct.identificacion}
                          >
                            {conduct.nombre + " " + conduct.primer_apellido}
                          </option>
                        ))}
                      </select>


                      <label className="col-form-label modal-label">
                        Flete *:
                      </label>
                      <input
                        type="number"
                        className={`form-control input-form`}
                        value={route.flete}
                        name="flete"
                        id="flete"
                        onChange={handleChangeData}
                        required
                      />

                      <button
                        type="submit"
                        className="btn btn-info-form"
                        onClick={handleSubmit}
                      >
                        {isEdit ? "Editar" : null}
                      </button>
                    </div>
                  </div>

                </form>
              </div>
            </div>
            <div className="modal-footer modal-btn">
              <button
                type="submit"
                className="btn btn-info-form"
                onClick={handleSubmit}
                disabled={true}
              >
                {isEdit ? "Editar ruta" : "Registrar ruta"}
              </button>
              <button
                type="reset"
                className="btn  btn-danger"
                onClick={closeModal}
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
