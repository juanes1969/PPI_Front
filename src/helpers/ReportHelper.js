
import axios from 'axios';
import { url_api } from "./http-common";

export const getReports = async () => {
    const url = `${url_api}Report`;
    const resp = await axios.get(url)

    const reports = resp.data.map(img => {
        return {
            cantidad: img.cantidad,
            conductor: img.conductor,
            id_vehiculo: img.id_vehiculo
        }
    });

    return reports;
}
