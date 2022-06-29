import { Mensajes } from "./Message";

const ValidationsFormVehicle = (vehicles) => {
    let error = {}
    let regexPlaca = /^([A-Z]{3}-([0-9]{3})+)*$/;
    let regexNumber = /^[0-9]*$/;
    let regexYear = /^[0-9]{4}$/;
    let regexPlacaTrailer = /^([R]{1}-([0-9]{5})+)*$/;


    validarPlaca(vehicles, error, regexPlaca);
    
    validarCapacidad(vehicles, error, regexNumber);

    validarPlacaTrailer(regexPlacaTrailer, vehicles, error);

    validarModelo(vehicles, error, regexYear);

    validarMatricula(vehicles, error);

    validarMarca(vehicles, error);

    validarTipo(vehicles, error);

    validarSoat(vehicles, error);

    validarPoliza(vehicles, error);

    validarTecnomecanica(vehicles, error);

    return error;
}

export default ValidationsFormVehicle

function validarTecnomecanica(vehicles, error) {
  if (!vehicles.expedicion_tecnomecanica) {
    error.expedicion_tecnomecanica = Mensajes.vehiculo.campoObligatorio;
  }
}

function validarPoliza(vehicles, error) {
  if (!vehicles.expedicion_poliza) {
    error.expedicion_poliza = Mensajes.vehiculo.campoObligatorio;
  }
}

function validarSoat(vehicles, error) {
  if (!vehicles.expedicion_soat) {
    error.expedicion_soat = Mensajes.vehiculo.campoObligatorio;
  }
}

function validarTipo(vehicles, error) {
  if (!vehicles.id_tipo || vehicles.id_tipo === "0") {
    error.id_tipo = Mensajes.vehiculo.campoObligatorio;
  }
}

function validarMarca(vehicles, error) {
  if (!vehicles.id_marca || vehicles.id_marca === "0") {
    error.id_marca = Mensajes.vehiculo.campoObligatorio;
  }
}

function validarMatricula(vehicles, error) {
  if (!vehicles.matricula) {
    error.matricula = Mensajes.vehiculo.campoObligatorio;
  }
}

function validarModelo(vehicles, error, regexYear) {
  if (!vehicles.modelo) {
    error.modelo = Mensajes.vehiculo.campoObligatorio;
  } else if (!regexYear.test(vehicles.modelo)) {
    error.modelo = Mensajes.vehiculo.modelo;
  }
}

function validarPlacaTrailer(regexPlacaTrailer, vehicles, error) {
  if (vehicles.r_trailer && !regexPlacaTrailer.test(vehicles.r_trailer)) {
    error.r_trailer = Mensajes.vehiculo.placaInvalida;
  }
}

function validarCapacidad(vehicles, error, regexNumber) {
  if (!vehicles.capacidad) {
    error.capacidad = Mensajes.vehiculo.campoObligatorio;
  } else if (!regexNumber.test(vehicles.capacidad)) {
    error.capacidad = Mensajes.vehiculo.campoNumerico;
  }
}

function validarPlaca(vehicles, error, regexPlaca) {
  if (!vehicles.placa) {
    error.placa = Mensajes.vehiculo.campoObligatorio;
  } else if (!regexPlaca.test(vehicles.placa)) {
    error.placa = Mensajes.vehiculo.placaInvalida;
  }
}