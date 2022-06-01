import { useState } from 'react';

export const UsePage = (data, perPage, search) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [page, setPage] = useState(1);

    const filterConducts = () => {
        if (search.length === 0) {
            return data.slice(currentPage, currentPage + parseInt(perPage))
        } else {
            const filtered = data.filter(dat => dat.identificacion.toLowerCase().includes(search.toLowerCase()));
            return filtered.slice(currentPage, currentPage + parseInt(perPage));
        }        
    }

    const filtroVehiculo = (data, search) => {
        return data.placa.toLowerCase().includes(search) || data.matricula.toLowerCase().includes(search) || data.marca.toLowerCase().includes(search) || data.estadoVehiculo.toLowerCase().includes(search);
    }

    const filterVehicle = () => {
        if (search.length === 0) {
            return data.slice(currentPage, currentPage + parseInt(perPage))
        } else {
            const filtered = data.filter(dat => filtroVehiculo(dat, search));
            return filtered.slice(currentPage, currentPage + parseInt(perPage))
        }
    }

    const nextPage = (e) => {
        e.preventDefault()
        if (data.slice(currentPage, currentPage + parseInt(perPage)).length >= perPage) {
            setCurrentPage(currentPage + parseInt(perPage))
            setPage(page + 1)
        }

    }

    const prevPage = (e) => {
        e.preventDefault()
        if (currentPage > 0) {
            if (perPage >= 0)
                setCurrentPage(currentPage - parseInt(perPage))
            setPage(page - 1)
        }
    }


    return { filterVehicle, filterConducts, nextPage, prevPage, setCurrentPage, setPage, page }
};
