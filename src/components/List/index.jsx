import Card from "../Card";
import NoCardModel from "../../assets/NoCardModel.png";

import "./style.css";

const List = ({ listTransactions }) => {
  return (
    <>
      <div className="transaction-list">
        <div className="transaction-list-header">
          <h3 className="header-title">Resumo financeiro</h3>
          <nav className="menu-navegation">
            <button className="filter --todos">Todos</button>
            <button className="filter --entradas">Entradas</button>
            <button className="filter --saida">Saída</button>
          </nav>
        </div>
        {listTransactions.length <= 0 ? (
          <>
            <h2 className="transaction-list-title">
              Você ainda não possui nenhum lançamento
            </h2>
            <img src={NoCardModel} alt="no card model" className="no-Card" />
            <img src={NoCardModel} alt="no card model" className="no-Card" />
            <img src={NoCardModel} alt="no card model" className="no-Card" />
          </>
        ) : (
          listTransactions.map((transaction, index) => (
            <Card transaction={transaction} key={index}></Card>
          ))
        )}
      </div>
    </>
  );
};

export default List;
