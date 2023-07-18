import React from 'react';
import './NewExpense.css';
import ExpenseForm1 from './ExpenseForm1';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
        <ExpenseForm1 onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );   
    
};

export default NewExpense;