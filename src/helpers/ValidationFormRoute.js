import { Mensajes } from './Message';

const ValidationFormRoute = (route) => {
    let error = {}

    validarCantidad(route, error);
    validarConductor(route, error);
    validarDestino(route, error);
    validarFechaFin(route, error);
    validarFechaInicio(route, error);
    validarFlete(route, error);
    validarManifiesto(route, error);
    validarOrigen(route, error);
    validarProducto(route, error);
    validarVehiculo(route, error);

    return error;
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
    if (!route.fecha_fin) {
        error.fecha_fin = Mensajes.rutas.campoObligatorio;
    }
}

function validarConductor(route, error) {
    if (!route.id_conductor) {
        error.id_conductor = Mensajes.rutas.campoObligatorio;
    }
}

function validarFlete(route, error) {
    if (!route.flete) {
        error.flete = Mensajes.rutas.campoObligatorio;
    }
}

function validarProducto(route, error) {
    if (!route.id_producto || route.id_producto === "0") {
        error.id_producto = Mensajes.rutas.campoObligatorio;
    }
}

function validarCantidad(route, error) {
    if (!route.cantidad_producto) {
        error.cantidad_producto = Mensajes.rutas.campoObligatorio;
    }
}

export default ValidationFormRoute