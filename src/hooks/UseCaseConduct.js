import { useEffect, useRef, useState } from 'react';
import { deleteConduct, editConduct, getByIdConduct, getConducts, getTypeLicense, insertConduct } from '../helpers/ConductHelper';
import dateFormat from "dateformat";

export const UseEffectConduct = () => {

    const isMounted = useRef(true)
    const [state, setState] = useState({ data: [], loading: true, error: null });

    useEffect(() => {
        getConducts()
            .then(conducts => {
                    setState({
                        data: conducts,
                        loading: false,
                        error: null
                    });
            });
    }, []);

    return state;
}

export const UseLicenseAvailable = () => {
    const [licenseAvailable, setLicenseAvailable] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getTypeLicense().then((license) => {
            setLicenseAvailable({
                data: license,
                loading: false,
            });
        });
    }, []);

    return licenseAvailable;
};

export const UseDeleteConduct = (identificacion) => {    
    deleteConduct(identificacion)
        .then((response) => {
            window.location.reload();
        })
        .catch((e) => {
            console.log(e);
        });
}

const calcularFecha = (fecha) => {
    let fechaVencimiento = new Date(fecha)
    if (fecha != null) {
        fechaVencimiento.setDate(fechaVencimiento.getDate() + 1)
        fechaVencimiento.setFullYear(fechaVencimiento.getFullYear() + 1)
        fechaVencimiento = dateFormat(fechaVencimiento, "isoDate")
        return fechaVencimiento;
    }
}


export const UseEditConduct = (dataCondut) => {

    let conduct = getByIdConduct(dataCondut.identificacion);

    var data = {
        identificacion: dataCondut.identificacion,
        nombre: dataCondut.nombre,
        primer_apellido: dataCondut.primer_apellido,
        segundo_apellido: dataCondut.segundo_apellido,
        telefono_contacto: dataCondut.telefono_contacto,
        fecha_nacimiento: dateFormat(dataCondut.fecha_nacimiento, "isoDate"),
        tipo_licencia: dataCondut.tipo_licencia,
        licencia_conduccion: dataCondut.licencia_conduccion,
        expedicion_curso_seguridad: dateFormat(dataCondut.expedicion_curso_seguridad, "isoDate"),
        expedicion_curso_industrial: dateFormat(dataCondut.expedicion_curso_industrial, "isoDate"),
        expedicion_examenes_medicos: dateFormat(dataCondut.expedicion_examenes_medicos, "isoDate"),
        vencimiento_curso_seguridad: calcularFecha(dataCondut.vencimiento_curso_seguridad),
        vencimiento_curso_industrial: calcularFecha(dataCondut.vencimiento_curso_industrial),
        vencimiento_examenes_medicos: calcularFecha(dataCondut.vencimiento_examenes_medicos),
        id_vehiculo: dataCondut.id_vehiculo,
        id_estado_conductor: 1,
    };

    if (conduct != null) {
        editConduct(data, dataCondut.identificacion)
            .then((response) => {
                window.location.reload();
            })
            .catch((e) => {
                console.log(e);
            });
    } else {
        insertConduct(data)
            .then((response) => {
                window.location.reload();
            })
            .catch((e) => {
                console.log(e);
            });
    }
};


export const UseInsertConduct = (dataCondut) => {
    var data = {
        identificacion: dataCondut.identificacion,
        nombre: dataCondut.nombre,
        primer_apellido: dataCondut.primer_apellido,
        segundo_apellido: dataCondut.segundo_apellido,
        telefono_contacto: dataCondut.telefono_contacto,
        fecha_nacimiento: dateFormat(dataCondut.fecha_nacimiento, "isoDate"),
        tipo_licencia: dataCondut.tipo_licencia,
        licencia_conduccion: dataCondut.licencia_conduccion,
        expedicion_curso_seguridad: dateFormat(dataCondut.expedicion_curso_seguridad, "isoDate"),
        expedicion_curso_industrial: dateFormat(dataCondut.expedicion_curso_industrial, "isoDate"),
        expedicion_examenes_medicos: dateFormat(dataCondut.expedicion_examenes_medicos, "isoDate"),
        vencimiento_curso_seguridad: calcularFecha(dataCondut.expedicion_curso_seguridad),
        vencimiento_curso_industrial: calcularFecha(dataCondut.expedicion_curso_industrial),
        vencimiento_examenes_medicos: calcularFecha(dataCondut.expedicion_examenes_medicos),
        id_vehiculo: dataCondut.id_vehiculo,
        id_estado_conductor: 1,
    };

    insertConduct(data)
        .then((response) => {
            window.location.reload();
        })
        .catch((e) => {
            console.log(e);
        });
};




