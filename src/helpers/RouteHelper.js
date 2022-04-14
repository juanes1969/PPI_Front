import axios from 'axios';
import {url_api} from './http-common';

export const getAllRoute = async() => {
    const url = `${url_api}Route/`;
    const resp = await axios.get(url)
    console.log(resp)
    const typeRoute = resp.data.map(route => {
        return {
            id_ruta:route.id_ruta,
            nombre_producto:route.nombre_producto,
            cantidad:route.cantidad,
            fecha_inicio:route.fecha_inicio,
            fecha_fin:route.fecha_fin,
            flete:route.flete,
            placa:route.placa,
            ciudad_origen:route.ciudad_origen,
            ciudad_destino:route.ciudad_destino,
            estado:route.estado,
            id_estado_envio:route.id_estado_envio,
            producto:route.producto,
            id_vehiculo:route.id_vehiculo,
            id_origen:route.id_origen,
            id_destino:route.id_destino
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

export const getAllProduct = async() => {
    const url = `${url_api}Route/product`;
    const resp = await axios.get(url)

    const typeProduct = resp.data.map(route => {
        return {
            
        
            id_producto:route.id_producto,
            referencia:route.referencia,
            nombre_producto:route.nombre_producto,            
            caracteristica:route.caracteristica
           

        }
    });

    return typeProduct;
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
    console.log(data)
    
    
    return resp;
}

  
export const editRoute = async (data, id_ruta) => {
    const url = `${url_api}Route/routeEdit/${id_ruta}`;
    
    console.log(data)
    console.log(id_ruta)
    console.log("URL: " + url)
    const resp = await axios.put(url, data);
    return resp;
};

export const getRouteByIdRoute= async (id_ruta) => {
    const url = `${url_api}Route/getRoute/${id_ruta}`;
    const resp = await axios.get(url);
    
    console.log(resp.data)
    const routeData = resp.data.map((dataRoute) => {
        return {
            id_ruta:dataRoute.id_ruta,    
            producto: dataRoute.producto,
            cantidad: dataRoute.cantidad,
            fecha_inicio: dataRoute.fecha_inicio,
            fecha_fin: dataRoute.fecha_fin,
            flete: dataRoute.flete,
            id_vehiculo: dataRoute.id_vehiculo,
            id_estado_envio: 1,
            id_origen: dataRoute.id_origen,
            id_destino: dataRoute.id_destino,
        };
      });
    
      return routeData;
    };
  

export const deleteRoute = async (id_ruta) => {
    const url = `${url_api}Route/deleteRoute/${id_ruta}`;
    const resp = await axios.delete(url)
    
    return resp;
}


