import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //function clickHandler() {}

  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    console.log('Change expense to 100');
    setAmount(100);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        {/* <h2>{amount}</h2> */}
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Expense</button>
      
    </div>
  );
};

export default ExpenseItem;
