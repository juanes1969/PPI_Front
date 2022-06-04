import axios from 'axios';
import { url_api } from './http-common';



export const getAllExpense = async () => {
    const url = `${url_api}Expenses/`;
    const resp = await axios.get(url)
    const typeExpense = resp.data.map(expense => {
        return {
            id_gasto: expense.id_gasto,
            valor_gasto: expense.valor_gasto,
            descripcion: expense.descripcion,
            id_ruta: expense.id_ruta,
            tipo_gasto: expense.tipo_gasto,
        }
    });

    return typeExpense;
}






export const getAllTypeExpense = async () => {
    const url = `${url_api}Expenses/typeExpenses`;
    const resp = await axios.get(url)

    const typeAllExpense = resp.data.map(expense => {
        return {
            id_tipo_gasto: expense.id_tipo_gasto,
            descripcion: expense.descripcion,

        }
    });

    return typeAllExpense;
}






export const insertExpense = async (data) => {
    const url = `${url_api}Expenses/newExpense`;
    const resp = await axios.post(url, data)
    return resp;
}


export const editExpense = async (data, id_gasto) => {
    const url = `${url_api}Expenses/routeExpenses/${id_gasto}`;
    const resp = await axios.put(url, data);
    return resp;
};



export const getExpenseByIdExpense = async (id_gasto) => {
    const url = `${url_api}Expenses/getExpense/${id_gasto}`;
    const resp = await axios.get(url);
    const expenseData = resp.data.map((dataExpense) => {
        return {
            id_gasto: dataExpense.id_gasto,
            valor_gasto: dataExpense.valor_gasto,
            descripcion: dataExpense.descripcion,
            id_ruta: dataExpense.id_ruta,
            id_tipo_gasto: dataExpense.id_tipo_gasto
        };
    });

    return expenseData;
};


export const deleteExpense = async (id_gasto) => {
    const url = `${url_api}Expenses/deleteExpense/${id_gasto}`;
    const resp = await axios.delete(url)

    return resp;
}


