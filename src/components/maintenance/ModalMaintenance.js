import React, { useEffect, useState } from "react";
import "../../Styles/modal.css";
import dateFormat, { masks } from "dateformat";
import logo from "../../assets/img/LogoNew.png";
export const ModalMaintenance = ({
  isOpenModal,
  closeModal,
  maintenanceEdit,
  setMaintenanceEdit,
  maintenances,
  setMaintenances,
}) => {
  const [error, setError] = useState({});

  const initialMaintenanceState = {
    placa: "",
    fecha_realizado: "",
    valor_mantenimiento: "",
    descripcion: "",
  };

  const handleChangeData = ({ target }) => {
    const { name, value } = target;
    setMaintenances({ ...maintenances, [name]: value });
  };

  const handleBlur = (e) => {
    handleChangeData(e);
    //TODO: HACER VALIDACIONES
    //setError(ValidationsFormMaintenance(maintenances));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(Object.entries(error).length)
    // if (Object.entries(error).length === 0) {
    //   if (maintenanceEdit) {
    //     UseSaveMaintenance(maintenances)
    //     e.target.reset();
    //     closeModal();
    //   } else {
    //       UseInsertMaintenance(maintenances);
    //       setMaintenances(initialMaintenanceState);
    //       e.target.reset();
    //       closeModal();
    //   }
    // } else {
    //   alert('Debes ingresar los campos de manera correcta');
    // }
  };

  const handleCancelButton = () => {
    setMaintenances(initialMaintenanceState);
    setMaintenanceEdit(null);
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

  useEffect(() => {
    if (maintenanceEdit) {
      setMaintenances(maintenanceEdit);
    } else {
      setMaintenances(initialMaintenanceState);
    }
  }, [maintenanceEdit, setMaintenances, setMaintenanceEdit]);

  return (
    <>
      <div
        className={`modalInicial ${isOpenModal && "modal-abierta"}`}
        onClick={closeModal}
      >
        <div className="modal-dialog">
          <div
            className="modal-content modal-gasto-ruta contenido__modal"
            onClick={handleModalDialogClick}
          >
            <div className="modal-header">
              <img className="logo-form" src={logo} alt="logo" />
              <h3 className="modal-title" id="exampleModalLabel">
                {maintenanceEdit
                  ? "Editar registro"
                  : "Registrar mantenimiento"}
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
                        <h6 className="label-form"> Placa Vehículo *:</h6>
                      </label>
                      <input
                        type="text"
                        className={`form-control input-form ${
                          error.placa && "input-error"
                        }`}
                        value={maintenances.placa}
                        id="placa"
                        name="placa"
                        onChange={handleChangeData}
                        disabled={maintenanceEdit ? true : false}
                        required
                      />
                      {error.placa && (
                        <p className="error-message">{error.placa}</p>
                      )}
                      <label className="col-form-label modal-label">
                        <h6 className="label-form"> Fecha Mantenimiento *:</h6>
                      </label>
                      <input
                        type="date"
                        className={`form-control input-form ${
                          error.fecha_realizado ? "input-error" : ""
                        }`}
                        value={maintenances.fecha_realizado}
                        name="fecha_realizado"
                        id="fecha_realizado"
                        onChange={handleChangeData}
                        min={fechaMinima()}
                        max={fechaMaxima()}
                        required
                      />
                      {error.fecha_realizado && (
                        <p className="error-message">{error.fecha_realizado}</p>
                      )}
                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                        <h6 className="label-form"> Valor *:</h6>
                      </label>
                      <input
                        type="text"
                        className={`form-control input-form ${
                          error.valor_mantenimiento ? "input-error" : ""
                        }`}
                        value={maintenances.valor_mantenimiento}
                        name="valor_mantenimiento"
                        id="valor_mantenimiento"
                        onChange={handleChangeData}
                      />
                      {error.valor_mantenimiento && (
                        <p className="error-message">
                          {error.valor_mantenimiento}
                        </p>
                      )}
                      <label className="col-form-label modal-label">
                        <h6 className="label-form"> Descripción *:</h6>
                      </label>
                      <input
                        type="text"
                        className={`form-control input-form ${
                          error.descripcion ? "input-error" : ""
                        }`}
                        value={maintenances.descripcion}
                        name="descripcion"
                        id="descripcion"
                        onChange={handleChangeData}
                        required
                      />
                      {error.descripcion && (
                        <p className="error-message">{error.descripcion}</p>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer modal-btn">
              <button
                type="submit"
                className="btn btn-info-form"
                onClick={handleBlur}
              >
                {maintenanceEdit ? "Editar" : "Registrar"}
              </button>
              <button
                type="reset"
                className="btn  btn-danger"
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
