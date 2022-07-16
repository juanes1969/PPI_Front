import React, { useEffect, useRef, useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import { getAllExpense } from '../../helpers/ExpenseHelper';
import { UseDeleteExpense, UseEffectGetExpense } from '../../hooks/UseCaseExpense';
import { UseModal } from '../../hooks/UseModal';
import { UsePage } from '../../hooks/UsePage';
import '../../Styles/tableConduct.css';
import { Pagination } from '../conduct//Pagination';
import { SearchConduct } from '../conduct/SearchConduct';
import { Loader } from '../globalComponents/Loader';
import { ModalExpense } from './ModalExpense';


export const Expenses = () => {

    const [isOpenModalExpense, OpenModalExpense, closeModalExpense] = UseModal();
    const { data, loading } = UseEffectGetExpense();
    const [expenses, setExpense] = useState([]);
    const [expenseEdit, setExpenseEdit] = useState(null);
    const expenseRef = useRef();
    const [perPage, setPerPage] = useState(5);
    const [search, setSearch] = useState('');
    const { filterExpense, nextPage, prevPage, setCurrentPage, setPage, page } = UsePage(data, perPage, search);

    expenseRef.current = expenses;



    const handleDeleteExpense = (id_gasto) => {
        UseDeleteExpense(id_gasto);
        refreshList();
    }


    const getByIdEdit = (expense) => {
        setExpenseEdit(expense);
        OpenModalExpense();
    }

    const retrieveExpense = () => {
        getAllExpense()
            .then((expense) => {
                setExpense(expense);
            }).catch((e) => {
                console.log(e);
            });
    }

    const refreshList = () => {
        retrieveExpense();
    };

    useEffect(() => {
        retrieveExpense();
    }, []);


    return (
        <>
            <div className="container" id="contenedorInicial">
                <h1 className="title-h1">Gastos</h1>
                <span>
                    <SearchConduct
                        titleButton={"Agregar Gasto"}
                        icon={<IoIcons.IoCarSportSharp />} 
                        openModal={OpenModalExpense} 
                        setSearch={setSearch}
                        setCurrentPage={setCurrentPage}
                        setPage={setPage}
                    />
                 
                </span>

                {loading
                    ?

                    (<Loader />) :

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>

                                <th className="th-shipping" scope="col">Codigo Gasto</th>
                                <th className="th-shipping" scope="col">Fecha Gasto</th>
                                <th className="th-shipping" scope="col">Valor Gasto</th>
                                <th className="th-shipping" scope="col">Descripcion</th>
                                <th className="th-shipping" scope="col">Codigo Manifiesto</th>
                                <th className="th-shipping" scope="col">Tipo Gasto</th>
                                <th className="th-shipping" colSpan="3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="id_ruta">
                                {filterExpense().map((expense) => (
                                    <tr key={expense.id_gasto}>
                                        <td>{expense.id_gasto}</td>
                                        <td>{expense.fecha_gasto}</td>
                                        <td>{expense.valor_gasto}</td>
                                        <td>{expense.descripcion}</td>
                                        <td>{expense.codigo_manifiesto}</td>
                                        <td>{expense.tipo_gasto}</td>
                                        <td id="columOptions">

                                            <button className="btn btn-warning btn-sm"><BsIcons.BsFillEyeFill /></button>
                                            <button className="btn btn-info btn-sm" onClick={() => getByIdEdit(expense)} ><RiIcons.RiEditFill /></button>
                                            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteExpense(expense.id_gasto)} ><AiIcons.AiFillDelete /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                    <Pagination 
                        nextPage={nextPage}
                        prevPage={prevPage}
                        page={page}
                        setPerPage={setPerPage}
                        setCurrentPage={setCurrentPage}
                        setPage={setPage}
                    />
                </div>}
            </div>

            <ModalExpense
                isOpenModal={isOpenModalExpense}
                closeModal={closeModalExpense}
                expenseEdit={expenseEdit}
                setExpenseEdit={setExpenseEdit}
                expenses={expenses}
                setExpense={setExpense}
            />


        </>
    )
}
