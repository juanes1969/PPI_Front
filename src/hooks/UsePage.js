import { useState } from 'react';

export const UsePage = (data, perPage, search) => {

    console.log(perPage)

    const [currentPage, setCurrentPage] = useState(0);
    const [page, setPage] = useState(1);

    const filterConducts = () => {
        console.log(currentPage)
        if (search.length === 0) {
            return data.slice(currentPage, currentPage + parseInt(perPage))
        } else {
            const filtered = data.filter(dat => dat.identificacion.toLowerCase().includes(search.toLowerCase()));
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


    return { filterConducts, nextPage, prevPage, setCurrentPage, setPage, page }
};
