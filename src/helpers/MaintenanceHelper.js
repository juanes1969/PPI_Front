import axios from "axios";
import { url_api } from "./http-common";

export const getAllMaintenances = async () => {
  const url = `${url_api}Maintenance/`;
  const resp = await axios.get(url);

  const typeMaintenance = resp.data.map((maintenance) => {
    return {
      id_mantenimiento: maintenance.id_mantenimiento,
      placa: maintenance.placa,
      valor_mantenimiento: maintenance.valor_mantenimiento,
      fecha_realizado: maintenance.fecha_realizado,
      descripcion: maintenance.descripcion,
    };
  });

  return typeMaintenance;
};



export const deleteMaintenance = async (placa) => {
  const url = `${url_api}Maintenance/deleteMaintenance/${placa}`;
  const resp = await axios.delete(url)
  
  return resp;
}

export const getMaintenanceByPlaca = async (placa) => {
  const url = `${url_api}Maintenance/getMaintenance/${placa}`;
  const resp = await axios.get(url);

  const maintenanceData = resp.data.map((maintenance) => {
    return {
        id_mantenimiento: maintenance.id_mantenimiento,
        placa: maintenance.placa,
        valor_mantenimiento: maintenance.valor_mantenimiento,
        fecha_realizado: maintenance.fecha_realizado,
        descripcion: maintenance.descripcion,
    };
  });

  return maintenanceData;
};

export const insertMaintenance = async (data) => {
  const url = `${url_api}Maintenance/newMaintenance`;
  const resp = await axios.post(url, data);
  return resp;
};

export const editMaintenance = async (data, placa) => {
  const url = `${url_api}Maintenance/maintenanceEdit/${placa}`;
  const resp = await axios.put(url, data);
  return resp;
};
