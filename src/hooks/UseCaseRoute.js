import { useState, useEffect } from 'react'
import { getAllRoute } from '../helpers/RouteHelper';
import { getVehicleAvailable, getAllVehicles } from '../helpers/VehicleHelper';

export const UseEffectGetRoutes = () => {
    const [route, setRoute] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getAllRoute()
            .then(route => {
                setRoute({
                    data: route,
                    loading: false
                });
            });
    }, []);

    return route;
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
