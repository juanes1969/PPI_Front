import axios from 'axios';
import {url_api} from './http-common';

export const getAllRoute = async() => {
    const url = `${url_api}Route/`;
    const resp = await axios.get(url)
    console.log(resp)
    const typeRoute = resp.data.map(route => {
        return {
            codigo_ruta:route.codigo_ruta,
            nombre_producto:route.nombre_producto,
            referencia:route.referencia,
            cantidad:route.cantidad,
            fecha_inicio:route.fecha_inicio,
            fecha_fin:route.fecha_fin,
            flete:route.flete,
            placa:route.placa,
            nombre:route.nombre,
            ciudad_origen:route.ciudad_origen,
            ciudad_destino:route.ciudad_destino,
            estado:route.estado

            
       
        }
    });

    return typeRoute;
}

export const getVehicleRoute = async() => {
    const url = `${url_api}Route/vehicleRoute`;
    const resp = await axios.get(url)

    const typeVechicle = resp.data.map(route => {
        return {
            
            id_vehiculo:route.id_vehiculo, 
            placa:route.placa,
            identificacion:route.identificacion,  
            id_conductor:route.identificacion,            
          
        }
    });

    return typeVechicle;
}

export const getAllState = async() => {
    const url = `${url_api}Route/stateRoute`;
    const resp = await axios.get(url)

    const typeState = resp.data.map(route => {
        return {
            id_estado_ruta:route.id_estado_ruta,
            estado:route.estado            
        }
    });

    return typeState;
}

export const getAllCity = async() => {
    const url = `${url_api}Route/cityRoute`;
    const resp = await axios.get(url)

    const typeCityRoute = resp.data.map(route => {
        return {
            
        
            id_origen:route.id_ciudad,
            id_destino:route.id_ciudad,
            ciudad_destino:route.descripcion,            
            ciudad_origen:route.descripcion
           

        }
    });

    return typeCityRoute;
}

export const getConduct = async(placa) => {
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


export const insertRoute = async(data) => {
    const url = `${url_api}Route/newRoute`;
    const resp = await axios.post(url, data)

    return resp;
}