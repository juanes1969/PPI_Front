
import { useEffect, useState } from "react";
import { getReports } from "../helpers/ReportHelper";

export const UseEffecReports = () => {

    const [state, setState] = useState({ data: [], loading: true, error: null });

    useEffect(() => {
        getReports()
            .then(reports => {
                setState({
                    data: reports,
                    loading: false,
                    error: null
                });
            });
    }, []);

    console.log(state)
    
    return state;
}

