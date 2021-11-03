import axios from 'axios';

export const getAllVehicles = async() => {
    const url = `http://localhost:3000/Vehicle/`;
    const resp = await axios.get(url)

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