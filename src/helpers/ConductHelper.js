import axios from 'axios';
import { url_api, url_api_localhost } from './http-common';

export const getConducts = async () => {
    const url = `${url_api_localhost}Conduct`;
    const resp = await axios.get(url)

    const conducts = resp.data.map(img => {
        return {
            identificacion: img.identificacion,
            nombre: img.nombre,
            primer_apellido: img.primer_apellido,
            segundo_apellido: img.segundo_apellido,
            telefono_contacto: img.telefono_contacto
        }
    });

    return conducts;
}

export const insertConduct = async (data) => {
    const url = `${url_api_localhost}Conduct/create`;
    const resp = await axios.post(url, data)

    return resp;
}

export const getEditConduct = async (identificacion) => {
    const url = `${url_api_localhost}Conduct/editConduct/${identificacion}`;
    const resp = await fetch(url)

    const data= await resp.json();

    return data;
}

export const editConduct = async (data) => {
    const url = `${url_api_localhost}ConductEdit/${data.identificacion}`;
    const resp = await axios.put(url, data)

    return resp;
}







