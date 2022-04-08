import axios from "axios";
import { url_api } from "./http-common";

export const getAllVehicles = async () => {
  const url = `${url_api}Vehicle/`;
  const resp = await axios.get(url);
  console.log(resp);

  const typeVehicle = resp.data.map((vehicle) => {
    return {
      placa: vehicle.placa,
      matricula: vehicle.matricula,
      r_trailer: vehicle.r_trailer,
      capacidad: vehicle.capacidad,
      modelo: vehicle.modelo,
      vencimiento_soat: vehicle.vencimiento_soat,
      vencimiento_poliza: vehicle.vencimiento_poliza,
      vencimiento_tecnomecanica: vehicle.vencimiento_tecnomecanica,
      expedicion_soat: vehicle.expedicion_soat,
      expedicion_poliza: vehicle.expedicion_poliza,
      expedicion_tecnomecanica: vehicle.expedicion_tecnomecanica,
      marca: vehicle.marca,
      tipoVehiculo: vehicle.tipoVehiculo,
      estadoVehiculo: vehicle.estadoVehiculo,
      id_marca: vehicle.id_marca,
      id_tipo: vehicle.id_tipo,
      id_estado_vehiculo: vehicle.id_estado_vehiculo,
    };
  });

  return typeVehicle;
};

export const getVehicleAvailable = async () => {
  const url = `${url_api}Vehicle/vehicleAvailable`;
  const resp = await axios.get(url);

  const typeVehicle = resp.data.map((vehicle) => {
    return {
      id_vehiculo: vehicle.id_vehiculo,
      placa: vehicle.placa
    };
  });

  return typeVehicle;
};

export const getAllMarcas = async () => {
  const url = `${url_api}Vehicle/marcaVehicle`;
  const resp = await axios.get(url);

  const marcaVehiculo = resp.data.map((marca) => {
    return {
      id_marca: marca.id_marca,
      marcaVehiculo: marca.marcaVehiculo,
    };
  });

  return marcaVehiculo;
};

export const getAllTypeVehicle = async () => {
  const url = `${url_api}Vehicle/vehicleType`;
  const resp = await axios.get(url);

  const marcaVehiculo = resp.data.map((type) => {
    return {
      id_tipo: type.id_tipo,
      tipoVehiculo: type.tipoVehiculo,
    };
  });

  return marcaVehiculo;
};

export const deleteVehicle = async (placa) => {
  const url = `${url_api}Vehicle/deleteVehicle/${placa}`;
  const resp = await axios.delete(url)
  
  return resp;
}

export const getVehicleByPlaca = async (placa) => {
  const url = `${url_api}Vehicle/getVehicle/${placa}`;
  const resp = await axios.get(url);

  const vehicleData = resp.data.map((type) => {
    return {
      placa: type.placa,
      matricula: type.matricula,
      r_trailer: type.r_trailer,
      capacidad: type.capacidad,
      modelo: type.modelo,
      vencimiento_soat: type.vencimiento_soat,
      vencimiento_poliza: type.vencimiento_poliza,
      vencimiento_tecnomecanica: type.vencimiento_tecnomecanica,
      expedicion_soat: type.expedicion_soat,
      expedicion_poliza: type.expedicion_poliza,
      expedicion_tecnomecanica: type.expedicion_tecnomecanica,
      id_marca: type.id_marca,
      id_tipo: type.id_tipo,
      id_estado_vehiculo: 1,
    };
  });

  return vehicleData;
};

export const insertVehicle = async (data) => {
  debugger
  const url = `${url_api}Vehicle/newVehicle`;
  const resp = await axios.post(url, data);
  return resp;
};

export const editVehicle = async (data, placa) => {
  debugger
  const url = `${url_api}Vehicle/vehicleEdit/${placa}`;
  const resp = await axios.put(url, data);
  return resp;
};
