import { useState, useEffect } from 'react'
import { getConducts} from '../helpers/ConductHelper';

export const UseEffectConduct = () => {
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


