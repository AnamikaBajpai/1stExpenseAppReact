// import React, { useState } from "react";
// import "./Expenses.css";
// import ExpensesFilter from "./ExpensesFilter";
// import Card from "../UI/Card";
// import ExpensesList from "./ExpensesList";
// import ExpensesChart from './ExpensesChart';


// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.items.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

// //   let expensesContent = <p>Noexpenses found.</p>;
// //   if (filteredExpenses.length > 0) {
// //     expensesContent = filteredExpenses.map((expense) => (
// //       <ExpenseItem
// //         key={expense.id}
// //         title={expense.title}
// //         amount={expense.amount}
// //         date={expense.date}
// //       />
// //     ));
// //   }

//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />

//       <ExpensesChart expenses ={filteredExpenses} />  

//         <ExpensesList items={filteredExpenses} />

//       </Card>
//     </div>
//   );
// };

// export default Expenses;





import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;