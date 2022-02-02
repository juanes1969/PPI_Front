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
            telefono_contacto: img.telefono_contacto,
            fecha_nacimiento: img.fecha_nacimiento,
            licencia_conduccion: img.licencia_conduccion,
            fecha_curso_seguridad: img.fecha_curso_seguridad,
            fecha_curso_industrial: img.fecha_curso_industrial,
            examenes_medicos: img.examenes_medicos,
            id_vehiculo: img.id_vehiculo,
            id_estado_conductor: img.id_estado_conductor
        }
    });

    return conducts;
}

export const insertConduct = async (data) => {
    const url = `${url_api_localhost}Conduct/create`;
    const resp = await axios.post(url, data)

    return resp;
}

export const editConduct = async (identificacion, data) => {
    const url = `${url_api_localhost}ConductEdit/${identificacion}`;
    const resp = await axios.put(url, data)

    return resp;
}


export const deleteConduct = async (identificacion) => {
    const url = `${url_api_localhost}Conduct/deleteConduct/${identificacion}`;
    const resp = await axios.delete(url)

    return resp;
}

export const getEditConduct = async (identificacion) => {
    const url = `${url_api_localhost}Conduct/editConduct/${identificacion}`;
    const resp = await axios.get(url)

    const conducts = resp.data.map(img => {
        return {
            identificacion: img.identificacion,
            nombre: img.nombre,
            primer_apellido: img.primer_apellido,
            segundo_apellido: img.segundo_apellido,
            telefono_contacto: img.telefono_contacto,
            fecha_nacimiento: img.fecha_nacimiento,
            licencia_conduccion: img.licencia_conduccion,
            fecha_curso_seguridad: img.fecha_curso_seguridad,
            fecha_curso_industrial: img.fecha_curso_industrial,
            examenes_medicos: img.examenes_medicos,
            id_vehiculo: img.id_vehiculo,
            id_estado_conductor: img.id_estado_conductor
        }
    });
    
    return conducts;
}







