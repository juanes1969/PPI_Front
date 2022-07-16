import axios from "axios";
import { url_api } from "./http-common";

export const getAllReport = async () => {
  const url = `${url_api}Report`;
  const resp = await axios.get(url);
  
  const typeReport = resp.data.map((report) => {
    return {
      
      id_vehiculo: report.id_vehiculo,
      cantidad: report.cantidad,
      conductor: report.conductor,
    };
  });
  console.log(typeReport)

  return typeReport;
};
