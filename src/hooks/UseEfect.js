import { useState, useEffect } from 'react'
import { getConducts, getTypeVehicle } from '../helpers/getConducts';

export const UseEfect = () => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getConducts()
            .then(conducts => {
                setstate({
                    data: conducts,
                    loading: false
                });
            });
    }, []);

    return state;
}

export const UseTypeVehicle = () => {
    const [typeVehicles, setTypeVehicle] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getTypeVehicle()
            .then(vehicle => {
                setTypeVehicle({
                    data: vehicle,
                    loading: false
                });
            });
    }, []);

    return typeVehicles;
}
