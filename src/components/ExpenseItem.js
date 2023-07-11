import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails'
 import './ExpenseItem.css';

function ExpenseItem(props) {
  console.log(props);

  return (

 <div className='expense-item'>
  <ExpenseDate date = {props.date} />
 
  {/* <div> */}

   {/* <div className ='expense-item__description'> */}
      {/* <h2>{props.title}</h2> */}
      <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
     {/* <div className ='expense-item__price'>${props.amount}</div> */}
    </div>
  //  </div>
  
  );
}

export default ExpenseItem;
