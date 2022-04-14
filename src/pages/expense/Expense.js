import React from 'react'
import { Expenses } from '../../components/expense/TableExpense';
import { Sidebar } from '../../components/globalComponents/Sidebar';



const Expense = () => {
    return (
        <>
            <Sidebar />            
            <Expenses/>
        </>
    )
}

export default Expense;
