import React, { useEffect} from "react";
import "../../Styles/modal.css";
import { UseTypeVehicle, UseMarca, UseInsertVehicle, UseSaveVehicle } from "../../hooks/UseCaseVehicle";
import dateFormat, { masks } from "dateformat";
export const ModalVehicle = ({ isOpenModal, closeModal, vehicleEdit,  setVehicleEdit, vehicles, setVehicles }) => {


  const initialVehicleState = {
    placa: "",
    matricula: "",
    r_trailer: "",
    capacidad: "",
    modelo: "",
    vencimiento_soat: null,
    vencimiento_poliza: null,
    vencimiento_tecnomecanica: null,
    expedicion_soat: null,
    expedicion_poliza: null,
    expedicion_tecnomecanica: null,
    id_marca: "",
    id_tipo: "",
    id_estado_vehiculo: null,
  }


  const handleChangeData = ({target}) => {
    const {name, value} = target;
    setVehicles({...vehicles, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vehicleEdit) {
      UseSaveVehicle(vehicles)
      e.target.reset();
      closeModal();
  } else {
    debugger
      UseInsertVehicle(vehicles);
      setVehicles(initialVehicleState);
      e.target.reset();
      closeModal();
  }
  };

  const handleCancelButton = () => {
    setVehicles(initialVehicleState)
    setVehicleEdit(null)
    closeModal()
}


  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };



  const { data: type } = UseTypeVehicle();

  const { data: marcas, loading } = UseMarca();

  const calcularFecha = ( fecha, input) => {
    var myElement = document.getElementById(input);
    if(isOpenModal && fecha != null && myElement.value == ""){
      let fechaVencimiento = new Date(fecha)
      fechaVencimiento.setDate(fechaVencimiento.getDate() + 1)
      fechaVencimiento.setFullYear(fechaVencimiento.getFullYear()+1)
      fechaVencimiento = dateFormat(fechaVencimiento, "isoDate")
      activarOnChange(fechaVencimiento, input)
      return fechaVencimiento;
    }
  }

  const activarOnChange = (fechaVencimiento, valor) => {
    var myElement = document.getElementById(valor);
    if(!myElement.onchange){
      setVehicles({...vehicles, [valor]: fechaVencimiento });
      myElement.onchange = true
    }
  }

  useEffect(() => {
    debugger
    if (vehicleEdit) {
      debugger
      console.log(vehicleEdit)
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
            className="modal-content contenido__modal"
            onClick={handleModalDialogClick}
          >
            <div className="modal-header">
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
                  novalidate
                  onSubmit={handleSubmit}
                >
                  <div className="row align-items-start">
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Placa *:
                      </label>
                      <input
                        type="text"
                        className={`form-control`}
                        value={vehicles.placa}
                        id="placa"
                        name="placa"
                        onChange={handleChangeData}
                        disabled={vehicleEdit ? true : false}
                        required
                      />
                      <label className="col-form-label modal-label">
                        Marca *:
                      </label>
                      <select  
                      className={`form-select`}
                      value={vehicles.id_marca}
                      name="id_marca"
                      id="id_marca"
                      onChange={handleChangeData}
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
                       <label className="col-form-label modal-label">
                        Expedición poliza *:
                      </label>
                      <input
                        type="date"
                        className={`form-control`}
                        value={vehicles.expedicion_poliza}
                        name="expedicion_poliza"
                        id="expedicion_poliza"
                        onChange={handleChangeData}
                        required
                      />
                      <label className="col-form-label modal-label">
                        Vencimiento poliza *:
                      </label>
                      <input
                        type="date"
                        className={`form-control`}
                        value={calcularFecha(vehicles.expedicion_poliza, "vencimiento_poliza")}
                        name="vencimiento_poliza"
                        id="vencimiento_poliza"
                        required
                        onChange={handleChangeData}
                        readOnly
                      />
                      <label className="col-form-label modal-label">
                        Capacidad (Toneladas)*:
                      </label>
                      <input
                        type="text"
                        className={`form-control `}
                        value={vehicles.capacidad}
                        name="capacidad"
                        id="capacidad"
                        onChange={handleChangeData}
                        required
                      />
                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Placa trailer:
                      </label>
                      <input
                        type="text"
                        className={`form-control`}
                        value={vehicles.r_trailer}
                        name="r_trailer"
                        id="r_trailer"
                        onChange={handleChangeData}
                      />
                      <label className="col-form-label modal-label">
                        Modelo *:
                      </label>
                      <input
                        type="text"
                        className={`form-control `}
                        value={vehicles.modelo}
                        name="modelo"
                        id="modelo"
                        onChange={handleChangeData}
                        required
                      />
                      <label className="col-form-label modal-label">
                        Expedición SOAT *:
                      </label>
                      <input
                        type="date"
                        className={`form-control`}
                        value={vehicles.expedicion_soat}
                        name="expedicion_soat"
                        id="expedicion_soat"
                        onChange={handleChangeData}
                        required
                      />
                      <label className="col-form-label modal-label">
                        Vencimiento SOAT *:
                      </label>
                      <input
                        type="date"
                        className={`form-control`}
                        value={calcularFecha(vehicles.expedicion_soat, "vencimiento_soat")}
                        id="vencimiento_soat"
                        name="vencimiento_soat"
                        required
                        onChange={handleChangeData}
                        disabled
                      />
                    </div>
                    <div className="col">
                      <label className="col-form-label modal-label">
                        Tipo vehículo *:
                      </label>
                      <select
                        className={`form-select`}
                        value={vehicles.id_tipo}
                        name="id_tipo"
                        id="id_tipo"
                        onChange={handleChangeData}
                        required
                      >
                        <option value="0">Seleccionar</option>
                        {type.map((type) => (
                          <option
                            key={type.id_tipo}
                            value={type.id_tipo}
                          >
                            {type.tipoVehiculo}
                          </option>
                        ))}
                      </select>
                      <label className="col-form-label modal-label">
                        Matrícula *:{" "}
                      </label>
                      <input
                        type="text"
                        className={`form-control `}
                        value={vehicles.matricula}
                        id="matricula"
                        name="matricula"
                        onChange={handleChangeData}
                        required
                      />
                       <label className="col-form-label modal-label">
                        Expedición técnico mecánica *:
                      </label>
                      <input
                        type="date"
                        className={`form-control `}
                        value={vehicles.expedicion_tecnomecanica}
                        id="expedicion_tecnomecanica"
                        name="expedicion_tecnomecanica"
                        onChange={handleChangeData}
                        required
                      />
                      <label className="col-form-label modal-label">
                        Vencimiento técnico mecánica*
                      </label>
                      <input
                        type="date"
                        className={`form-control`}
                        value={calcularFecha(vehicles.expedicion_tecnomecanica, "vencimiento_tecnomecanica")}
                        id="vencimiento_tecnomecanica"
                        name="vencimiento_tecnomecanica"
                        required
                        onChange={handleChangeData}
                        disabled
                      />
                    </div>
                  </div>
                  <div className="modal-footer modal-btn">
                    <button type="submit" className="btn btn-info" onPress={handleSubmit}>
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};