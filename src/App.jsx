import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import TotalMoney from "./components/TotalMoney";
import { useState } from "react";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("false");
  const [listTransactions, setListTransactions] = useState([]);

  function Login() {
    setIsLoggedIn(false);
  }

  function LogOut() {
    setIsLoggedIn(true);
  }

  function addTransaction(transaction) {
    if (transaction.description && transaction.value) {
      if (transaction.type === "saída") {
        transaction.value = transaction.value * -1;
      }
      setListTransactions((previousTransaction) => [
        ...previousTransaction,
        transaction,
      ]);
    }
  }

  if (isLoggedIn) {
    return <LoginPage Login={Login} />;
  } else {
    return (
      <>
        <Header logOut={LogOut} />
        <div className="App">
          <div className="App-header">
            <div className="form-homepage">
              <Form addTransaction={addTransaction} />
              <TotalMoney listTransactions={listTransactions} />
            </div>
            <div className="transactions-homepage">
              <List listTransactions={listTransactions} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
