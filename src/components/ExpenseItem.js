import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails'
 import './ExpenseItem.css';

const ExpenseItem = (props) => {
 //function clickHandler() {}

 const clickHandler = () => {
  const expenseItem= document.querySelector('.expense-item');
  expenseItem.remove();
  console.log('Clicked!!!');
 };


  return (

 <div className='expense-item'>
  <ExpenseDate date = {props.date} />
 
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Delete Expense</button>
     
    </div>
 
  
  );
}

export default ExpenseItem;
