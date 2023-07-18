import React from "react";
import ExpenseDate from "./ExpenseDate";
// import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  //function clickHandler() {}

  // const [amount, setAmount] = useState(props.amount);

  // const clickHandler = () => {
  //   console.log('Change expense to 100');
  //   setAmount(100);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Expense</button> */}
      
    </Card>
  );
};

export default ExpenseItem;
