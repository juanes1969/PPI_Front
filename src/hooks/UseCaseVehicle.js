import { useState, useEffect } from 'react'
import { getVehicleAvailable, getAllVehicles } from '../helpers/VehicleHelper';

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

// export const UseMarca = () => {
//     const [marcaVehicles, setMarcaVehicle] = useState({
//         data: [],
//         loading: true
//     })

//     useEffect(() => {
//         getMarcaVehicle()
//             .then(marca => {
//                 setMarcaVehicle({
//                     data: marca,
//                     loading: false
//                 });
//             });
//     }, []);

//     return marcaVehicles;
// }