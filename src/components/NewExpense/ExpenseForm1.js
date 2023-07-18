import React, { useState } from "react";
import "./ExpenseForm1.css";

const ExpenseForm1 = (props) => {

//------------------------------------(1 way with single single state works)-------

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //   Another Way ---------------(2 way)


  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {

    //---------------------------------(1st way)

    setEnteredTitle(event.target.value);


//-------------------------(2nd way)

    
    // setUserInput({
    //      ...userInput,
    //      enteredTitle: event.target.value,
        
    //     })


  //   setUserInput((prevState) => {       //------(3rd way)
  //        return { ...prevState, enteredTitle:event.target.value };
  //      });
   };

  const amountChangeHandler = (event) => {


 //---------------------------------(1 way)


    setEnteredAmount(event.target.value);




//--------------------------(2 way)


    // setUserInput({
    //      ...userInput,
    //      enteredAmount: event.target.value,
        
    //     })


    // setUserInput((prevState) => {     //------(3rd way)  
    //     return { ...prevState, enteredAmount:event.target.value };
    //    });

  };

  const dateChangeHandler = (event) => {


 //---------------------------------(1 way)


    setEnteredDate(event.target.value);



//-----------------------------(2 way)

    // setUserInput({
    //      ...userInput,
    //      enteredDate: event.target.value,
        
    //     })




    // setUserInput((prevState) => {      //------(3rd way)
    //      return { ...prevState, enteredDate:event.target.value };
    //    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),

    };
    props.onSaveExpenseData(expenseData);

    //Two-way binding----------

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" 
          value={enteredTitle} // Two-way binding
          onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}   // Two-way binding  
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}     // Two-way binding
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm1;
