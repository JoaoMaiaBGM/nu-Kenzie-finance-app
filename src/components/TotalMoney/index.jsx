import "./style.css";

const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.map((transaction) => transaction.value);

  return total.length <= 0 ? (
    <div className="total-container-nulo"></div>
  ) : (
    <div className="total-container">
      <div className="total-info">
        <h3 className="total-info-title">Valor total:</h3>
        <p className="total-info-paragraph">O valor de refere ao saldo</p>
      </div>
      <div className="total-sum">
        <p className="total-sum-paragraph">
          $ {total.reduce((acc, cur) => cur + acc, 0)}
        </p>
      </div>
    </div>
  );
};

export default TotalMoney;
