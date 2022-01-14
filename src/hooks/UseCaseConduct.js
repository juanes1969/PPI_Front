import { useState, useEffect, useRef } from 'react'
import { deleteConduct, getConducts, getEditConduct, insertConduct } from '../helpers/ConductHelper';


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

export const UseGetEditConduct = (identificacion) => {
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null
        })
        getEditConduct(identificacion)
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data
                })
            })
    }, [identificacion])
    return state;
}


export const UseInsertConduct = (dataCondut) => {
    var data = {
        identificacion: dataCondut.identificacion,
        nombre: dataCondut.nombre,
        primer_apellido: dataCondut.primer_apellido,
        segundo_apellido: dataCondut.segundo_apellido,
        telefono_contacto: dataCondut.telefono_contacto,
        fecha_nacimiento: dataCondut.fecha_nacimiento,
        licencia_conduccion: dataCondut.licencia_conduccion,
        fecha_curso_seguridad: dataCondut.fecha_curso_seguridad,
        fecha_curso_industrial: dataCondut.fecha_curso_industrial,
        examenes_medicos: dataCondut.examenes_medicos,
        id_vehiculo: dataCondut.id_vehiculo,
        id_estado_conductor: 1
    };

    insertConduct(data)
        .then((response) => {
            console.log(response.data);
            window.location.reload();
        })
        .catch((e) => {
            console.log(e);
        });
};




