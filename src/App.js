import './App.css';
import Header from './Components/Header';
import Balance from './Components/Balance';
import AddExpenses from './AddExpenses/AddExpenses'
import MyList from './List/MyList';


function App() {
  return (
    <div className="App">
      <div className="app_container">
        <Header />
        <div className="balance">
          <Balance />
          <AddExpenses />
          </div>
          <MyList />  
      </div>     
    </div>
  );
}

export default App;
