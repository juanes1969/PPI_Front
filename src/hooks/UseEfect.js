import { useState, useEffect } from 'react'
import { getConducts } from '../helpers/getConducts';

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
