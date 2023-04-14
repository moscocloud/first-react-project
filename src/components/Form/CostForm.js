import "./CostForm.css";
import React, { useState } from "react";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputdDate, setInputDate] = useState("");

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputdDate),
    };

    props.onSaveCostData(costData);

    setInputAmount("");
    setInputDate("");
    setInputName("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" onChange={nameChangeHandler} value={inputName} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            onChange={amountChangeHandler}
            value={inputAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            onChange={dateChangeHandler}
            value={inputdDate}
            type="date"
            min="2019-01-01"
            step="2022-12-31"
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button type="button" onClick={props.onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
