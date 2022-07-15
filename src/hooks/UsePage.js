import { useState } from 'react';

export const UsePage = (data, perPage, search, active) => {

    const [currentPage, setCurrentPage] = useState(0);
    const [page, setPage] = useState(1);

    const filterConducts = () => {
        console.log(currentPage)


        if (search.length === 0) {
            if (active === true) {
                const result = data.filter(dat => dat.estado_conductor.includes("Activo"));
                console.log(result)
                return result.slice(currentPage, currentPage + parseInt(perPage));
            } else if (active === false) {
                const result = data.filter(dat => dat.estado_conductor.includes("Inactivo"));
                console.log(active);
                console.log(result);
                return result.slice(currentPage, currentPage + parseInt(perPage));
            }
            return data.slice(currentPage, currentPage + parseInt(perPage))
        } else {
            if (active === true) {
                const filtered = data.filter(dat => dat.identificacion.toLowerCase().includes(search.toLowerCase()) && dat.estado_conductor.includes("Activo"));
                return filtered.slice(currentPage, currentPage + parseInt(perPage));
            }
            if (active === false) {
                const filtered = data.filter(dat => dat.identificacion.toLowerCase().includes(search.toLowerCase()) && dat.estado_conductor.includes("Inactivo"));
                return filtered.slice(currentPage, currentPage + parseInt(perPage));

            } else if (active === null) {
                const filtered = data.filter(dat => dat.identificacion.toLowerCase().includes(search.toLowerCase()));
                return filtered.slice(currentPage, currentPage + parseInt(perPage));
            }
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

    const filtroRuta = (data, search) => {
        return data.id_ruta.includes(search) || data.nombre_producto.toLowerCase().includes(search);
    }

    const filterRoutes = () => {
        if (search.length === 0) {
            return data.slice(currentPage, currentPage + parseInt(perPage))
        } else {
            const filtered = data.filter(dat => filtroRuta(dat, search));
            return filtered.slice(currentPage, currentPage + parseInt(perPage))
        }
    }

    const filtroExpense = (data, search) => {
        return data.descripcion.toLowerCase().includes(search);
    }

    const filterExpense = () => {
        if (search.length === 0) {
            return data.slice(currentPage, currentPage + parseInt(perPage))
        } else {
            const filtered = data.filter(dat => filtroExpense(dat, search));
            return filtered.slice(currentPage, currentPage + parseInt(perPage))
        }
    }

    const filtroMaintenance = (data, search) => {
        return data.placa.toLowerCase().includes(search);
    }
    const filterMaintenance = () => {
        if (search.length === 0) {
            return data.slice(currentPage, currentPage + parseInt(perPage))
        } else {
            const filtered = data.filter(dat => filtroMaintenance(dat, search));
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
    return { filterConducts, filterRoutes, filterVehicle, filterExpense, filterMaintenance, nextPage, prevPage, setCurrentPage, setPage, page }
};
