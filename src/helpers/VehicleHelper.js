import axios from 'axios';
import http from './http-common';
export const getAllVehicles = async() => {
    const url = `http://localhost:3000/Vehicle/`;
    const resp = await axios.get(url)
    //const resp = http.get("Vehicle/")
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
    const url = `http://localhost:3000/Vehicle/vehicleAvailable`;
    const resp = await axios.get(url)

    const typeVehicle = resp.data.map(vehicle => {
        return {
            placa:vehicle.placa            
        }
    });

    return typeVehicle;
}

export const getAllMarcas = async() => {
    const url = `http://localhost:3000/Vehicle/marcaVehicle`;
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
    const url = `http://localhost:3000/Vehicle/vehicleType`;
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
    const url = `http://localhost:3000/Vehicle/newVehicle`;
    const resp = await axios.post(url, data)

    // const marcaVehiculo = resp.data.map(type => {
    //     return {
    //         id_tipo: type.id_tipo,
    //         tipoVehiculo: type.tipoVehiculo          
    //     }
    // });

    // return marcaVehiculo;

    return resp;
}