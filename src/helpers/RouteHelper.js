import axios from 'axios';

export const getAllRoute = async() => {
    const url = `http://localhost:3000/Route/`;
    const resp = await axios.get(url)
    console.log(resp)
    const typeRoute = resp.data.data.map(route => {
        return {
            id_ruta:route.id_ruta,
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