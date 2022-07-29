import { Mensajes } from './Message';

const ValidationFormRoute = (route, isEdit) => {
    let error = {}

    validarCantidad(route, isEdit, error);
    validarConductor(route, error);
    validarDestino(route, error);
    validarFechaFin(route, error);
    validarFechaInicio(route, error);
    validarFlete(route, error);
    validarManifiesto(route, error);
    validarOrigen(route, error);
    validarProducto(route, isEdit, error);
    validarVehiculo(route, error);

    return error;
}

const valorMinimo = (valor) =>{
    if (valor <300000){
      return valor;
    }
  }


  const valorMinimoCantidad = (valor) =>{
    if (valor < 50 && valor > 1){
      return true;
    }
    return false;
  }

function validarManifiesto(route, error) {
    if (!route.codigo_manifiesto) {
        error.codigo_manifiesto = Mensajes.rutas.campoObligatorio;
    }
}

function validarOrigen(route, error) {
    if (!route.id_origen || route.id_origen === "0") {
        error.id_origen = Mensajes.rutas.campoObligatorio;
    }
}


function validarDestino(route, error) {
    if (!route.id_destino || route.id_destino === "0") {
        error.id_destino = Mensajes.rutas.campoObligatorio;
    }
}

function validarFechaInicio(route, error) {
    if (!route.fecha_inicio) {
        error.fecha_inicio = Mensajes.rutas.campoObligatorio;
    }
}

function validarVehiculo(route, error) {
    if (!route.id_vehiculo || route.id_vehiculo === "0") {
        error.id_vehiculo = Mensajes.rutas.campoObligatorio;
    }
}

function validarFechaFin(route, error) {
    debugger
    if (route.fecha_fin && !validarFechaRuta(route.fecha_fin, route.fecha_inicio)) {
        error.fecha_fin = Mensajes.rutas.fechaFin;
    }
}

const validarFechaRuta = (fechaFin, fechaInicio) => {
    let fecha_fin = new Date(fechaFin)
    let fecha_inicio = new Date(fechaInicio)
    debugger
    console.log(fecha_fin)
    console.log(fecha_inicio)
    if(fecha_fin >= fecha_inicio){
        return true;
    }
    return false;
}


function validarConductor(route, error) {
    if (!route.id_conductor) {
        error.id_conductor = Mensajes.rutas.campoObligatorio;
    }
}

function validarFlete(route, error) {
    if (!route.flete) {
        error.flete = Mensajes.rutas.campoObligatorio;
    }else if (valorMinimo(route.flete) < 300000){
        error.flete = Mensajes.rutas.flete;
    }
}

function validarProducto(route, isEdit, error) {
    if ((!route.id_producto || route.id_producto === "0") && !isEdit) {
        error.id_producto = Mensajes.rutas.campoObligatorio;
    }
}

function validarCantidad(route,isEdit, error) {
    if (!route.cantidad_producto && !isEdit) {
        error.cantidad_producto = Mensajes.rutas.campoObligatorio;
    }else if (!valorMinimoCantidad(route.cantidad_producto) && !isEdit){
        error.cantidad_producto = Mensajes.rutas.cantidad;
    }
}

export default ValidationFormRoute