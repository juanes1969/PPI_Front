import axios from 'axios';
import { url_api } from './http-common';

export const getConducts = async () => {
    const url = `${url_api}Conduct`;
    const resp = await axios.get(url)

    const conducts = resp.data.map(img => {
        return {
            identificacion: img.identificacion,
            nombre: img.nombre,
            primer_apellido: img.primer_apellido,
            segundo_apellido: img.segundo_apellido,
            telefono_contacto: img.telefono_contacto,
            fecha_nacimiento: img.fecha_nacimiento,
            tipo_licencia: img.tipo_licencia,
            licencia_conduccion: img.licencia_conduccion,
            expedicion_curso_seguridad: img.expedicion_curso_seguridad,
            expedicion_curso_industrial: img.expedicion_curso_industrial,
            expedicion_examenes_medicos: img.expedicion_examenes_medicos,
            vencimiento_curso_seguridad: img.vencimiento_curso_seguridad,
            vencimiento_curso_industrial: img.vencimiento_curso_industrial,
            vencimiento_examenes_medicos: img.vencimiento_examenes_medicos,
            id_estado_conductor: img.id_estado_conductor,
            estado_conductor: img.descripcion_estado_conductor
        }
    });

    return conducts;
}

export const getTypeLicense = async () => {
    const url = `${url_api}Conduct/typeLicense`;
    const resp = await axios.get(url)

    const licenses = resp.data.map(img => {
        return {
            id_tipo_licencia: img.id_tipo_licencia,
            descripcion: img.descripcion
        }
    });

    return licenses;
}

export const getByIdConduct = async (identificacion) => {
    const url = `${url_api}Conduct/getConduct/${identificacion}`;
    const resp = await axios.get(url)

    const getConduct = resp.data.map(img => {
        console.log(img);
        return {
            nombre: img.nombre,
            primer_apellido: img.primer_apellido,
            segundo_apellido: img.segundo_apellido,
            telefono_contacto: img.telefono_contacto,
            fecha_nacimiento: img.fecha_nacimiento,
            tipo_licencia: img.tipo_licencia,
            licencia_conduccion: img.licencia_conduccion,
            expedicion_curso_seguridad: img.expedicion_curso_seguridad,
            expedicion_curso_industrial: img.expedicion_curso_industrial,
            expedicion_examenes_medicos: img.expedicion_examenes_medicos,
            vencimiento_curso_seguridad: img.vencimiento_curso_seguridad,
            vencimiento_curso_industrial: img.vencimiento_curso_industrial,
            vencimiento_examenes_medicos: img.vencimiento_examenes_medicos
        }
    });

    return getConduct;
}

export const insertConduct = async (data) => {
    const url = `${url_api}Conduct/create`;
    const resp = await axios.post(url, data)

    return resp;
}

export const editConduct = async (data, identificacion) => {
    const url = `${url_api}Conduct/conductEdit/${identificacion}`;
    const resp = await axios.put(url, data)

    return resp;
}


export const deleteConduct = async (identificacion) => {
    const url = `${url_api}Conduct/deleteConduct/${identificacion}`;
    const resp = await axios.delete(url)

    return resp;
}

export const getEditConduct = async (identificacion) => {
    const url = `${url_api}Conduct/editConduct/${identificacion}`;
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





