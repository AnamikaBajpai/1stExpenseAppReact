// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';



const App = () => {
  const expenses = [
    { 
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      
      date: new Date(2020, 7, 14),
    },
    { 
      id: 'e2', 
      title:'New Tv', 
      amount: 799.49, 
     
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Isurance',
      amount: 294.67,
      
      date: new Date(2021, 2, 28),
},
{
  id: 'e4',
  title:'New Desk',
  amount: 450,
  
  date: new Date(2022, 5, 12),
},
  ];

  
          
  return (
  //   <div className="App">
  //     <header className="App-header">
      
  //       <div>
  //   <h2>Let's get started!</h2>

  //   <ExpenseItem
  //   title ={expenses[0].title}
  //   amount ={expenses[0].amount}  
  //   date ={expenses[0].date}
  //   />

  //   <ExpenseItem
  //   title ={expenses[1].title}
  //   amount ={expenses[1].amount}  
  //   date ={expenses[1].date}
  //   />

  //   <ExpenseItem
  //   title ={expenses[2].title}
  //   amount ={expenses[2].amount} 
  //   date ={expenses[2].date}
  //   />

  //   <ExpenseItem
  //   title ={expenses[3].title}
  //   amount ={expenses[3].amount}
  //   date ={expenses[3].date}
  //   />
    
  // </div>
  //    </header>
  // </div>

  <div>
    <NewExpense />
    <Expenses items = {expenses} />
  </div>
  );
  }

export default App;
