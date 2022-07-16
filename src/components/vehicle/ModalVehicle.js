import React, { useEffect, useState} from "react";
import "../../Styles/modal.css";
import { UseTypeVehicle, UseMarca, UseInsertVehicle, UseSaveVehicle } from "../../hooks/UseCaseVehicle";
import dateFormat, { masks } from "dateformat";
import logo from "../../assets/img/LogoNew.png";
import ValidationsFormVehicle from "../../helpers/ValidationsFormVehicle";
import { UseEffectConduct } from "../../hooks/UseCaseConduct";
export const ModalVehicle = ({ isOpenModal, closeModal, vehicleEdit,  setVehicleEdit, vehicles, setVehicles }) => {


  const [error, setError] = useState({});

  const initialVehicleState = {
    placa: "",
    matricula: "",
    r_trailer: "",
    capacidad: null,
    modelo: "",
    vencimiento_soat: null,
    vencimiento_poliza: null,
    vencimiento_tecnomecanica: null,
    expedicion_soat: null,
    expedicion_poliza: null,
    expedicion_tecnomecanica: null,
    id_marca: "",
    id_tipo_vehiculo: "",
    id_estado_vehiculo: null,
    id_conductor: null
  }


  const handleChangeData = ({target}) => {
    const {name, value} = target;
    setVehicles({...vehicles, [name]: value });
  }

  const handleBlur = (e) => {
    handleChangeData(e);
    setError(ValidationsFormVehicle(vehicles));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.entries(error).length === 0) {
      if (vehicleEdit) {
        UseSaveVehicle(vehicles)
        e.target.reset();
        closeModal();
      } else {
          UseInsertVehicle(vehicles);
          closeModal();
          setVehicles(initialVehicleState);
          e.target.reset();
      }
    } else {
      alert('Debes ingresar los campos de manera correcta');
    }
  };

  const handleCancelButton = () => {
    setVehicles(initialVehicleState)
    setVehicleEdit(null)
    setError({})
    closeModal()
}


  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };



  const { data: type } = UseTypeVehicle();

  const { data: marcas, loading } = UseMarca();

  const { data: conducts, loading: cargando, error: errores} = UseEffectConduct();    

  const calcularFecha = ( fecha, input) => {
    let myElement = document.getElementById(input);
    let fechaVencimiento = new Date(fecha)
    if(isOpenModal && fecha != null && myElement.value == "" ){
      fechaVencimiento.setDate(fechaVencimiento.getDate() + 1)
      fechaVencimiento.setFullYear(fechaVencimiento.getFullYear()+1)
      fechaVencimiento = dateFormat(fechaVencimiento, "isoDate")
      return fechaVencimiento;
    }
    if(isOpenModal && fecha != null && myElement.value != fecha ){
      fechaVencimiento.setDate(fechaVencimiento.getDate() + 1)
      fechaVencimiento.setFullYear(fechaVencimiento.getFullYear()+1)
      fechaVencimiento = dateFormat(fechaVencimiento, "isoDate")
      return fechaVencimiento;
    }
  }

  const fechaMinima = () => {
    let fechaMin = new Date();
    fechaMin.setFullYear(fechaMin.getFullYear()-1)
    fechaMin = dateFormat(fechaMin, "isoDate")
    return fechaMin;
  }

  const fechaMaxima = () => {
    let fechaMax = new Date();
    fechaMax = dateFormat(fechaMax, "isoDate")
    return fechaMax;
  }

  useEffect(() => {
    if (vehicleEdit) {
      setVehicles(vehicleEdit)
    }else{
      setVehicles(initialVehicleState)
    }
  }, [vehicleEdit, setVehicles, setVehicleEdit]);

  return (
    <>
      <div
        className={`modalInicial ${isOpenModal && "modal-abierta"}`}
        onClick={closeModal}
      >
        <div className="modal-dialog">
          <div
            className="modal-content modal-vehicle contenido__modal"
            onClick={handleModalDialogClick}>
            <div className="modal-header">
             <img className="logo-form" src={logo} alt="logo" />
              <h3 className="modal-title" id="exampleModalLabel">
              {vehicleEdit ?
                  ('Editar vehículo') :
                  ('Registrar vehículo')}
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
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="row align-items-start">
                    <div className="col">
                      <label className="col-form-label modal-label">
                        <h6 className="label-form-placa"> Placa *:</h6>
                      </label>
                      <input
                        type="text"
                        className={`form-control input-form ${error.placa && "input-error"}`}
                        value={vehicles.placa}
                        id="placa"
                        name="placa"
                        onChange={handleChangeData}
                        onBlur={handleBlur}
                        disabled={vehicleEdit ? true : false}
                        autoComplete="off"
                        required
                      /> 
                      {error.placa && <p className="error-message">{error.placa}</p>}
                      <label className="col-form-label modal-label">
                        <h6 className="label-form"> Marca *:</h6>
                      </label>
                      <select  
                      className={`form-select input-form ${error.id_marca ? "input-error" : ""}`}
                      value={vehicles.id_marca}
                      name="id_marca"
                      id="id_marca"
                      onChange={handleChangeData}
                      onBlur={handleBlur}
                      required
                      >
                        <option value="0">Seleccionar</option>
                        {marcas.map((marca) => (
                          <option
                            key={marca.id_marca}
                            value={marca.id_marca}
                          >
                            {marca.marcaVehiculo}
                          </option>
                        ))}
                      </select> 
                    {error.id_marca && <p className="error-message">{error.id_marca}</p>}
                       <label className="col-form-label modal-label">
                        <h6 className="label-form"> Expedición poliza *:</h6>
                      </label>
                      <input
                        type="date"
                        className={`form-control input-form ${error.expedicion_poliza ? "input-error" : ""}`}
                        value={ vehicleEdit && dateFormat(vehicles.expedicion_poliza, "isoDate")}
                        name="expedicion_poliza"
                        id="expedicion_poliza"
                        onChange={handleChangeData}
                        onBlur={handleBlur}
                        min={fechaMinima()}
                        max={fechaMaxima()}
                        required
                      /> 
                      {error.expedicion_poliza && <p className="error-message">{error.expedicion_poliza}</p>}
                      <label className="col-form-label modal-label">
                      <h6 className="label-form"> Vencimiento poliza *:</h6>
                      </label>
                      <input
                        type="date"
                        className={`form-control input-form`}
                        value={dateFormat(calcularFecha(vehicles.expedicion_poliza, "vencimiento_poliza"), "isoDate") }
                        name="vencimiento_poliza"
                        id="vencimiento_poliza"
                        onChange={handleChangeData}
                        required
                        readOnly
                      />
                      <label className="col-form-label modal-label">
                      <h6 className="label-form"> Capacidad (Toneladas)*:</h6>
                      </label>
                      <input
                        type="number"
                        className={`form-control input-form ${error.capacidad ? "input-error" : ""}`}
                        value={vehicles.capacidad}
                        name="capacidad"
                        id="capacidad"
                        onChange={handleChangeData}
                        onBlur={handleBlur}
                        autoComplete="off"
                        required
                      />
                      {error.capacidad && <p className="error-message">{error.capacidad}</p>}
                    </div>
                    <div className="col">
                    <label className="col-form-label modal-label">
                        <h6 className="label-form"> Conductor *:</h6>
                      </label>
                      <select  
                      className={`form-select input-form ${error.id_conductor ? "input-error" : ""}`}
                      value={vehicles.id_conductor}
                      name="id_conductor"
                      id="id_conductor"
                      onChange={handleChangeData}
                      onBlur={handleBlur}
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
                    {error.id_conductor && <p className="error-message">{error.id_conductor}</p>}
                      <label className="col-form-label modal-label">
                      <h6 className="label-form"> Modelo *:</h6>
                      </label>
                      <input
                        type="number"
                        className={`form-control input-form ${error.modelo ? "input-error" : ""}`}
                        value={vehicles.modelo}
                        name="modelo"
                        id="modelo"
                        onChange={handleChangeData}
                        onBlur={handleBlur}
                        autoComplete="off"
                        required
                      />
                      {error.modelo && <p className="error-message">{error.modelo}</p>}
                      <label className="col-form-label modal-label">
                      <h6 className="label-form"> Expedición SOAT *:</h6>
                      </label>
                      <input
                        type="date"
                        className={`form-control input-form ${error.expedicion_soat ? "input-error" : ""}`}
                        value={ vehicleEdit && dateFormat(vehicles.expedicion_soat, "isoDate")}
                        name="expedicion_soat"
                        id="expedicion_soat"
                        onChange={handleChangeData}
                        onBlur={handleBlur}
                        min={fechaMinima()}
                        max={fechaMaxima()}
                        required
                      />
                      {error.expedicion_soat && <p className="error-message">{error.expedicion_soat}</p>}
                      <label className="col-form-label modal-label">
                      <h6 className="label-form"> Vencimiento SOAT *:</h6>
                      </label>
                      <input
                        type="date"
                        className={`form-control input-form`}
                        value={dateFormat(calcularFecha(vehicles.expedicion_soat, "vencimiento_soat"), "isoDate") }
                        id="vencimiento_soat"
                        name="vencimiento_soat"
                        onChange={handleChangeData}
                        required
                        disabled
                      />
                      <label className="col-form-label modal-label">
                      <h6 className="label-form"> Placa trailer:</h6>
                      </label>
                      <input
                        type="text"
                        className={`form-control input-form ${error.r_trailer ? "input-error" : ""}`}
                        value={vehicles.r_trailer}
                        name="r_trailer"
                        id="r_trailer"
                        onChange={handleChangeData}
                        autoComplete="off"
                        onBlur={handleBlur}
                      />
                      {error.r_trailer && <p className="error-message">{error.r_trailer}</p>}
                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                      <h6 className="label-form-tipo"> Tipo vehículo *:</h6>
                      </label>
                      <select
                        className={`form-select input-form ${error.id_tipo_vehiculo ? "input-error" : ""}`}
                        value={vehicles.id_tipo_vehiculo}
                        name="id_tipo_vehiculo"
                        id="id_tipo_vehiculo"
                        onChange={handleChangeData}
                        onBlur={handleBlur}
                        required
                      >
                        <option value="0">Seleccionar</option>
                        {type.map((type) => (
                          <option
                            key={type.id_tipo_vehiculo}
                            value={type.id_tipo_vehiculo}
                          >
                            {type.tipoVehiculo}
                          </option>
                        ))}
                      </select>
                      {error.id_tipo_vehiculo && <p className="error-message">{error.id_tipo_vehiculo}</p>}
                      <label className="col-form-label modal-label">
                      <h6 className="label-form"> Matrícula *:</h6>
                      </label>
                      <input
                        type="text"
                        className={`form-control input-form ${error.matricula ? "input-error" : ""} `}
                        value={vehicles.matricula}
                        id="matricula"
                        name="matricula"
                        onChange={handleChangeData}
                        onBlur={handleBlur}
                        autoComplete="off"
                        required
                      />
                      {error.matricula && <p className="error-message">{error.matricula}</p>}
                       <label className="col-form-label modal-label">
                       <h6 className="label-form-mecanica"> Expedición técnico mecánica *:</h6>
                      </label>
                      <input
                        type="date"
                        className={`form-control input-form ${error.expedicion_tecnomecanica ? "input-error" : ""}`}
                        value={ vehicleEdit && dateFormat(vehicles.expedicion_tecnomecanica, "isoDate")}
                        id="expedicion_tecnomecanica"
                        name="expedicion_tecnomecanica"
                        onChange={handleChangeData}
                        onBlur={handleBlur}
                        min={fechaMinima()}
                        max={fechaMaxima()}
                        required
                      />
                      {error.expedicion_tecnomecanica && <p className="error-message">{error.expedicion_tecnomecanica}</p>}
                      <label className="col-form-label modal-label">
                      <h6 className="label-form-mecanica"> Vencimiento técnico mecánica* </h6>
                      </label>
                      <input
                        type="date"
                        className={`form-control input-form`}
                        value={dateFormat(calcularFecha(vehicles.expedicion_tecnomecanica, "vencimiento_tecnomecanica"), "isoDate")}
                        id="vencimiento_tecnomecanica"
                        name="vencimiento_tecnomecanica"
                        onChange={handleChangeData}
                        required
                        disabled
                      />
                    </div>
                  </div>
                  
                </form>
              </div>
            </div>
            <div className="modal-footer modal-btn">
              <button type="submit" className="btn btn-info-form" onClick={handleSubmit}>
                {vehicleEdit ?
                  ('Editar vehículo') :
                  ('Registrar vehículo')}
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