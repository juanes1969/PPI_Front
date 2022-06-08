const ValidationsFormVehicle = (vehicles) => {
    let error = {}
    let regexPlaca = /^([A-Z]{3}-([0-9]{3})+)*$/;
    let regexNumber = /^[0-9]*$/;
    let regexYear = /^[0-9]{4}$/;
    let regexPlacaTrailer = /^([R]{1}-([0-9]{5})+)*$/;


    if(!vehicles.placa){
      error.placa = "El campo Placa es requerido"
    }else if (!regexPlaca.test(vehicles.placa)){
      error.placa = "Formato de placa invalido"
    }
    
    if(!vehicles.capacidad){
      error.capacidad = "El campo Capacidad es requerido"
    }else if (!regexNumber.test(vehicles.capacidad)){
      error.capacidad = "Solo se permiten números"
    }

    if (!regexPlacaTrailer.test(vehicles.r_trailer)){
      error.r_trailer = "Formato de placa invalido"
    }

    if(!vehicles.modelo){
      error.modelo = "El campo Modelo es requerido"
    }else if (!regexYear.test(vehicles.modelo)){
      error.modelo = "Año invalido"
    }

    if(!vehicles.matricula){
      error.matricula = "El campo Matrícula es requerido"
    }

    if(!vehicles.id_marca || vehicles.id_marca === "0"){
      error.id_marca = "El campo Marca es requerido"
    }

    if(!vehicles.id_tipo || vehicles.id_tipo === "0"){
      error.id_tipo = "El campo Tipo Vehículo es requerido"
    }

    if(!vehicles.expedicion_soat){
      error.expedicion_soat = "El campo es requerido"
    }

    if(!vehicles.expedicion_poliza){
      error.expedicion_poliza = "El campo es requerido"
    }

    if(!vehicles.expedicion_tecnomecanica){
      error.expedicion_tecnomecanica = "El campo es requerido"
    }


    return error;
}

export default ValidationsFormVehicle