import { useEffect, useRef, useState } from 'react';
import { get } from 'react-hook-form';
import { deleteConduct, editConduct, getByIdConduct, getConducts, getTypeLicense, insertConduct } from '../helpers/ConductHelper';


export const UseEffectConduct = () => {

    const isMounted = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        getConducts()
            .then(conducts => {
                if (isMounted.current) {
                    setState({
                        data: conducts,
                        loading: false,
                        error: null
                    });
                }
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
            console.log(response);
            window.location.reload();
        })
        .catch((e) => {
            console.log(e);
        });
}

export const UseEditConduct = (dataCondut) => {

    debugger
    let conduct = getByIdConduct(dataCondut.identificacion);

    var data = {
        identificacion: dataCondut.identificacion,
        nombre: dataCondut.nombre,
        primer_apellido: dataCondut.primer_apellido,
        segundo_apellido: dataCondut.segundo_apellido,
        telefono_contacto: dataCondut.telefono_contacto,
        fecha_nacimiento: dataCondut.fecha_nacimiento,
        tipo_licencia: dataCondut.tipo_licencia,
        licencia_conduccion: dataCondut.licencia_conduccion,
        expedicion_curso_seguridad: dataCondut.expedicion_curso_seguridad,
        expedicion_curso_industrial: dataCondut.expedicion_curso_industrial,
        expedicion_examenes_medicos: dataCondut.expedicion_examenes_medicos,
        vencimiento_curso_seguridad: dataCondut.vencimiento_curso_seguridad,
        vencimiento_curso_industrial: dataCondut.vencimiento_curso_industrial,
        vencimiento_examenes_medicos: dataCondut.vencimiento_examenes_medicos,
        id_vehiculo: dataCondut.id_vehiculo,
        id_estado_conductor: 1,
    };

    if (conduct != null) {
        debugger
        editConduct(data, dataCondut.identificacion)
            .then((response) => {
                console.log(response.data)
                window.location.reload();
            })
            .catch((e) => {
                console.log(e);
            });
    } else {
        insertConduct(data)
            .then((response) => {
                console.log(response.data)
                window.location.reload();
            })
            .catch((e) => {
                console.log(e);
            });
    }
};


export const UseInsertConduct = (dataCondut) => {
    debugger
    var data = {
        identificacion: dataCondut.identificacion,
        nombre: dataCondut.nombre,
        primer_apellido: dataCondut.primer_apellido,
        segundo_apellido: dataCondut.segundo_apellido,
        telefono_contacto: dataCondut.telefono_contacto,
        fecha_nacimiento: dataCondut.fecha_nacimiento,
        tipo_licencia: dataCondut.tipo_licencia,
        licencia_conduccion: dataCondut.licencia_conduccion,
        expedicion_curso_seguridad: dataCondut.expedicion_curso_seguridad,
        expedicion_curso_industrial: dataCondut.expedicion_curso_industrial,
        expedicion_examenes_medicos: dataCondut.expedicion_examenes_medicos,
        vencimiento_curso_seguridad: dataCondut.vencimiento_curso_seguridad,
        vencimiento_curso_industrial: dataCondut.vencimiento_curso_industrial,
        vencimiento_examenes_medicos: dataCondut.vencimiento_examenes_medicos,
        id_vehiculo: dataCondut.id_vehiculo,
        id_estado_conductor: 1,
    };
    debugger
    insertConduct(data)
        .then((response) => {
            console.log(response.data);
            window.location.reload();
        })
        .catch((e) => {
            console.log(e);
        });
};




