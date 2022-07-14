import { useState } from 'react';

export const UsePageRoute = (data, perPage, search) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [page, setPage] = useState(1);


    const filtroRuta = (data, search) => {
        return  data.nombre_producto.toLowerCase().includes(search);
    }

    const filterRoutes = () => {
        if (search.length === 0) {
            return data.slice(currentPage, currentPage + parseInt(perPage))
        } else {
            const filtered = data.filter(dat => filtroRuta(dat, search));
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


    return { filterRoutes, nextPage, prevPage, setCurrentPage, setPage, page }
};
