import React, { useEffect, useState } from "react";
import logo from "../../assets/img/LogoNew.png";
import dateFormat from "dateformat";
const ModalUpdateRoute = ({
  isOpenModal,
  closeModal,
  routeDetail,
  setRouteDetail,
  isEdit,
  setIsEdit
}) => {
  const initialStatus = {
    codigo_manifiesto: "",
    fecha: "",
    id_estado_ruta: null,
  };

  const [error, setError] = useState({});

  const handleChangeData = ({ target }) => {
    const { name, value } = target;
    setRouteDetail({ ...routeDetail, [name]: value });
  };

  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  const handleCancelButton = () => {
    closeModal();
  };

  const handleSubmit = (e) => {};

  useEffect(() => {
    if(isEdit){
        debugger
        console.log(isEdit)
        setRouteDetail(isEdit)
    }else{
        setRouteDetail(initialStatus);
    }
  }, [setRouteDetail,isEdit]);

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
                {"Finalizar Ruta"}
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
                        <h6 className="label-form"> Código Mantenimiento *:</h6>
                      </label>
                      <input
                        type="text"
                        className={`form-control input-form ${
                          error.codigo_manifiesto ? "input-error" : ""
                        }`}
                        value={routeDetail.codigo_manifiesto}
                        name="codigo_manifiesto"
                        id="codigo_manifiesto"
                        onChange={handleChangeData}
                      />
                      {/* {error.codigo_manifiesto && (
                        <p className="error-message">
                          {error.codigo_manifiesto}
                        </p>
                      )} */}
                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                        <h6 className="label-form"> Fecha Finalización *:</h6>
                      </label>
                      <input
                        type="date"
                        className={`form-control input-form ${
                          error.fecha_fin ? "input-error" : ""
                        }`}
                        value={dateFormat(routeDetail.fecha_fin, "isoDate")}
                        name="fecha_fin"
                        id="fecha_fin"
                        onChange={handleChangeData}
                        required
                      />
                      {/* {error.fecha_realizado && (
                        <p className="error-message">{error.fecha_realizado}</p>
                      )} */}
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
              >
                {"Guardar"}
              </button>
              <button
                type="reset"
                className="btn  btn-danger"
                onClick={handleCancelButton}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalUpdateRoute;
