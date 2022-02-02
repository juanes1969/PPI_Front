import { useState } from 'react';

export const UsePage = (data) => {

    const [currentPage, setCurrentPage] = useState(0);

    const filterConducts = () => {
        return data.slice(currentPage, currentPage + 5)
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 5)
        console.log(currentPage);
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 5)
        }
    }

    return { filterConducts, nextPage, prevPage }
};
