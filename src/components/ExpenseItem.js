 import './ExpenseItem.css';

function ExpenseItem() {

  //Task-7(Styling JSX)
  // return (
  //   <div>
  //   <div>March 28th 2021</div>
  //   <div>
  //     <h2>Car Insurance</h2>
  //     <div>$294.67</div>
  //   </div>
  //   </div>
  // );

  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseamount = 294.67;
  const locationOfExpenditure = 'Car Insurance Company';
  

  return (
    <div classname='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div classNmae='expense-item__price'>${expenseamount}</div>
        <div className='expense-item__location'>{locationOfExpenditure}</div>
      </div>
    </div>
  );
  
  
}

export default ExpenseItem;
