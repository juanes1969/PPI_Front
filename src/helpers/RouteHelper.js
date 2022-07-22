import axios from 'axios';
import { url_api } from './http-common';

export const getAllRoute = async () => {
    const url = `${url_api}Route/`;
    const resp = await axios.get(url)    
    console.log(resp.data)
    const typeRoute = resp.data.map(route => {
        return {
            codigo_manifiesto:route.codigo_manifiesto,
            nombre_producto:route.nombre_producto,
            cantidad_producto:route.cantidad_producto,
            fecha_inicio:route.fecha_inicio,
            fecha_fin:route.fecha_fin,
            flete:route.flete,
            id_vehiculo:route.id_vehiculo,
            ciudad_origen:route.ciudad_origen,
            ciudad_destino:route.ciudad_destino,
            id_origen:route.id_origen,
            id_destino:route.id_destino,
            conductor: route.conductor,
            id_conductor: route.id_conductor
        }
    });

    return typeRoute;
}

export const getVehicleRoute = async () => {
    const url = `${url_api}Route/vehicleRoute`;
    const resp = await axios.get(url)

    const typeVechicle = resp.data.map(route => {
        return {
            identificacion: route.identificacion,
            nombre: route.nombre,
            placa: route.placa
        }
    });

    return typeVechicle;
}

export const getAllState = async () => {
    const url = `${url_api}Route/stateRoute`;
    const resp = await axios.get(url)

    const typeState = resp.data.map(route => {
        return {
            id_estado_ruta: route.id_estado_ruta,
            estado: route.estado
        }
    });

    return typeState;
}

export const getAllCity = async () => {
    const url = `${url_api}Route/cityRoute`;
    const resp = await axios.get(url)

    const typeCityRoute = resp.data.map(route => {
        return {


            id_origen: route.id_ciudad,
            id_destino: route.id_ciudad,
            ciudad_destino: route.descripcion,
            ciudad_origen: route.descripcion


        }
    });

    return typeCityRoute;
}

export const getAllProduct = async () => {
    const url = `${url_api}Route/product`;
    const resp = await axios.get(url)

    const typeProduct = resp.data.map(route => {
        return {
            id_producto: route.id_producto,
            referencia: route.referencia,
            nombre_producto: route.nombre_producto
        }
    });

    return typeProduct;
}

export const getProductById = async (id_producto) => {
    const url = `${url_api}Route/getProductById/${id_producto}`;
    const resp = await axios.get(url)
    
    const typeProduct = resp.data.map(route => {
        return {
            id_producto: route.id_producto,
            referencia: route.referencia,
            nombre_producto: route.nombre_producto
        }
    });

    return typeProduct;
}

export const getConduct = async (placa) => {
    const url = `${url_api}Vehicle/getConductByVehicle/${placa}`;
    const resp = await axios.get(url)

    const typeConductRoute = resp.data.map(route => {
        return {
            identificacion: route.identificacion,
            id_conductor: route.identificacion

        }
    });

    return typeConductRoute;
}


export const insertRoute = async (data) => {
    const url = `${url_api}Route/newRoute`;
    const resp = await axios.post(url, data)
    return resp;
}

export const insertRouteDetail = async (data) => {
    const url = `${url_api}Route/newDetail`;
    const resp = await axios.post(url, data)
    console.log(resp)
    return resp;
}


export const editRoute = async (data, codigo_manifiesto) => {
    const url = `${url_api}Route/routeEdit/${codigo_manifiesto}`;
    const resp = await axios.put(url, data);
    return resp;
};

export const editRouteDetail = async (data, id_detalle) => {
    const url = `${url_api}Route/detailEdit/${id_detalle}`;
    const resp = await axios.put(url, data);
    return resp;
};

export const getRouteByIdRoute = async (id_ruta) => {
    const url = `${url_api}Route/getRoute/${id_ruta}`;
    const resp = await axios.get(url);
    const routeData = resp.data.map((dataRoute) => {
        return {
            codigo_manifiesto: dataRoute.codigo_manifiesto,
            producto: dataRoute.producto,
            cantidad: dataRoute.cantidad,
            fecha_inicio: dataRoute.fecha_inicio,
            fecha_fin: dataRoute.fecha_fin,
            flete: dataRoute.flete,
            id_vehiculo: dataRoute.id_vehiculo,
            id_estado_envio: 1,
            id_origen: dataRoute.id_origen,
            id_destino: dataRoute.id_destino,
            id_conductor: dataRoute.id_conductor
        };
    });

    return routeData;
};


export const deleteRoute = async (id_ruta) => {
    const url = `${url_api}Route/deleteRoute/${id_ruta}`;
    const resp = await axios.delete(url)

    return resp;
}

export const deleteRouteDetail = async (id_detalle) => {
    const url = `${url_api}Route/deleteDetail/${id_detalle}`;
    const resp = await axios.delete(url)

    return resp;
}

export const getProductByRoute = async (codigo_manifiesto) => {
    const url = `${url_api}Route/getProductsByRoute/${codigo_manifiesto}`;
    const resp = await axios.get(url);

    const products = resp.data.map(route => {
        return {
            id_detalle: route.id_detalle,
            id_producto: route.id_producto,
            codigo_manifiesto: route.codigo_manifiesto,
            cantidad_producto: route.cantidad_producto,
            referencia: route.referencia,
            nombre_producto: route.nombre_producto
        }
    });

    return products;
};

export const getDetailByRoute = async (codigo_manifiesto) => {
    const url = `${url_api}Route/getDetailByRoute/${codigo_manifiesto}`;
    const resp = await axios.get(url);
    debugger
    console.log("RESPOND URL")
    console.log(resp.data)

    const products = resp.data.map(route => {
        return {
            id_detalle: route.id_detalle,
            id_producto: route.id_producto,
            codigo_manifiesto: route.codigo_manifiesto,
            cantidad_producto: route.cantidad_producto
        }
    });

    return products;
};


export const getDetailById = async (id_detalle) => {
    const url = `${url_api}Route/getDetailById/${id_detalle}`;
    const resp = await axios.get(url);
    debugger
    console.log("RESPOND URL")
    console.log(resp.data)

    const products = resp.data.map(route => {
        return {
            id_detalle: route.id_detalle,
            id_producto: route.id_producto,
            codigo_manifiesto: route.codigo_manifiesto,
            cantidad_producto: route.cantidad_producto
        }
    });

    return products;
};

