import "./style.css";

const Card = ({ transaction }) => {
  return transaction.type === "saída" ? (
    <li className="card-saida">
      <div className="card-grey"> </div>
      <div className="card-info">
        <h3 className="card-description">{transaction.description}</h3>
        <span className="card-type">{transaction.type}</span>
      </div>
      <div className="card-action">
        <span className="card-value" type="number">
          {transaction.value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button className="card-remove"></button>
      </div>
    </li>
  ) : (
    <li className="card-entrada">
      <div className="card-green"> </div>
      <div className="card-info">
        <h3 className="card-description">{transaction.description}</h3>
        <span className="card-type">{transaction.type}</span>
      </div>
      <div className="card-action">
        <span className="card-value" type="number">
          {transaction.value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button className="card-remove"></button>
      </div>
    </li>
  );
};

export default Card;
