import axios from 'axios';
import {url_api, url_api_localhost} from './http-common';

export const getAllVehicles = async() => {
    const url = `${url_api}Vehicle/`;
    const resp = await axios.get(url)
    console.log(resp)

    const typeVehicle = resp.data.map(vehicle => {
        return {
            placa:vehicle.placa,
            marca:vehicle.marca,
            capacidad:vehicle.capacidad,
            matricula:vehicle.matricula,
            modelo:vehicle.modelo,
            tipoVehiculo:vehicle.tipoVehiculo,
            estadoVehiculo:vehicle.estadoVehiculo         
        }
    });

    return typeVehicle;
}

export const getVehicleAvailable = async() => {
    const url = `${url_api_localhost}Vehicle/vehicleAvailable`;
    const resp = await axios.get(url)

    const typeVehicle = resp.data.map(vehicle => {
        return {
            placa:vehicle.placa            
        }
    });

    return typeVehicle;
}

export const getAllMarcas = async() => {
    const url = `${url_api}Vehicle/marcaVehicle`;
    const resp = await axios.get(url)

    const marcaVehiculo = resp.data.map(marca => {
        return {
            id_marca: marca.id_marca,
            marcaVehiculo: marca.marcaVehiculo          
        }
    });

    return marcaVehiculo;
}

export const getAllTypeVehicle = async() => {
    const url = `${url_api}Vehicle/vehicleType`;
    const resp = await axios.get(url)

    const marcaVehiculo = resp.data.map(type => {
        return {
            id_tipo: type.id_tipo,
            tipoVehiculo: type.tipoVehiculo          
        }
    });

    return marcaVehiculo;
}

export const insertVehicle = async(data) => {
    const url = `${url_api}Vehicle/newVehicle`;
    const resp = await axios.post(url, data)

    return resp;
}