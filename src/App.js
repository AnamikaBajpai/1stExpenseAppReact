import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/ExpenseItem';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <h2>Let's get started</h2> */}
        {/* <p> */}
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {/* <ExpenseItem></ExpenseItem> */}
        {/* </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div>
    <h2>Expense Items</h2>
    <div>
      <p>Food Rs 10</p>
      <p>Petrol Rs 100</p>
      <p>Movies Rs 200</p>
    </div>
  </div>
      </header>
    </div>
  );
}

export default App;
