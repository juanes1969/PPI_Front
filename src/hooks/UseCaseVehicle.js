import { useState, useEffect } from 'react'
import { getVehicleAvailable, getAllVehicles, getAllMarcas, getAllTypeVehicle, insertVehicle } from '../helpers/VehicleHelper';

export const UseEffectGetVehicles = () => {
    const [vehicles, setVehicles] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getAllVehicles()
            .then(vehicle => {
                setVehicles({
                    data: vehicle,
                    loading: false
                });
            });
    }, []);

    return vehicles;
}

export const UseVehicleAvailable = () => {
    const [vehicleAvailable, setVehicleAvailable] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getVehicleAvailable()
            .then(vehicle => {
                setVehicleAvailable({
                    data: vehicle,
                    loading: false
                });
            });
    }, []);

    return vehicleAvailable;
}

export const UseMarca = () => {
    const [marcaVehicles, setMarcaVehicle] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getAllMarcas()
            .then(marca => {
                setMarcaVehicle({
                    data: marca,
                    loading: false
                });
            });
    }, []);

    return marcaVehicles;
}

export const UseTypeVehicle = () => {
    const [typeVehicle, setTypeVehicle] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getAllTypeVehicle()
            .then(type => {
                setTypeVehicle({
                    data: type,
                    loading: false
                });
            });
    }, []);

    return typeVehicle;
}

/**
 * TODO: PENSAR COMO HACER ESTE USECASE!!!!
*/

// export const UseInsertVehicle = (data) => {
//     const [vehicle, setVehicle] = useState({
//         data:[]
//     });
//     const [submitted, setSubmitted] = useState(false);
//     const [newVehicle, setNewVehicle] = useState({
//         data:[],
//         loading:true
//     })

//     insertVehicle(data)
//           .then(response => {
//             setVehicle({
//               placa: response.data.placa,
//               matricula: response.data.matricula,
//               r_trailer: response.data.r_trailer,
//               capacidad: response.data.capacidad,
//               fecha_soat: response.data.fecha_soat,
//               fecha_poliza: response.data.fecha_poliza,
//               modelo: response.data.modelo,
//               fecha_tecnomecanica: response.data.fecha_tecnomecanica,
//               id_marca: response.data.id_marca,
//               id_tipo: response.data.id_tipo
//             });
//             setSubmitted(true);
//             console.log(response.data);
//           })
//           .catch(e => {
//             console.log(e);
//           });

// }

