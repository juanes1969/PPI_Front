import axios from "axios";
import { url_api_localhost } from "./http-common";

export const getAllVehicles = async () => {
  const url = `${url_api_localhost}Vehicle/`;
  const resp = await axios.get(url);
  console.log(resp);

  const typeVehicle = resp.data.map((vehicle) => {
    return {
      placa: vehicle.placa,
      marca: vehicle.marca,
      capacidad: vehicle.capacidad,
      matricula: vehicle.matricula,
      modelo: vehicle.modelo,
      tipoVehiculo: vehicle.tipoVehiculo,
      estadoVehiculo: vehicle.estadoVehiculo,
    };
  });

  return typeVehicle;
};

export const getVehicleAvailable = async () => {
  const url = `${url_api_localhost}Vehicle/vehicleAvailable`;
  const resp = await axios.get(url);

  const typeVehicle = resp.data.map((vehicle) => {
    return {
      placa: vehicle.placa,
    };
  });

  return typeVehicle;
};

export const getAllMarcas = async () => {
  const url = `${url_api_localhost}Vehicle/marcaVehicle`;
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
  const url = `${url_api_localhost}Vehicle/vehicleType`;
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
  const url = `${url_api_localhost}Vehicle/deleteVehicle/${placa}`;
  const resp = await axios.delete(url)
  
  return resp;
}

export const getVehicleByPlaca = async (placa) => {
  const url = `${url_api_localhost}Vehicle/getVehicle/${placa}`;
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
  const url = `${url_api_localhost}Vehicle/newVehicle`;
  debugger
  const resp = await axios.post(url, data);
  debugger
  return resp;
};

export const editVehicle = async (data, placa) => {
  const url = `${url_api_localhost}vehicleEdit/${placa}`;
  const resp = await axios.put(url, data);
  return resp;
};
