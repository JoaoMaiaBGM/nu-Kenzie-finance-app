import { useState } from "react";

import "./style.css";

const Form = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  return (
    <>
      <form className="form-transaction">
        <h3 className="form-title">Descrição</h3>
        <input
          type="text"
          className="form-description"
          placeholder="Digite aqui sua descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <span className="form-description-example">Ex.: supermercado</span>
        <div className="form-labels">
          <label htmlFor="value">Valor</label>
          <label htmlFor="type">Tipo de valor</label>
        </div>
        <div className="form-info">
          <input
            type="number"
            className="form-value"
            step="0.01"
            min="0.01"
            placeholder="1                R$"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <select
            className="form-option"
            onChange={(event) => setType(event.target.value)}
          >
            <option className="option-income" value="entrada">
              entrada
            </option>
            <option className="option-exit" value="saída">
              saída
            </option>
          </select>
        </div>
        <button
          className="form-btn"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            addTransaction({
              description: description,
              type: type,
              value: parseInt(value),
            });
          }}
        >
          Inserir valor
        </button>
      </form>
    </>
  );
};

export default Form;
