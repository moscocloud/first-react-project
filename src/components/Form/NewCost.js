import "./NewCost.css";
import CostForm from "./CostForm";
import React, { useState } from "react";

const NewCost = (props) => {
  const [isFormVisable, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };

    props.onAddCost(costData);
    setIsFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisable && (
        <button onClick={inputCostDataHandler}>Добавить новый расход</button>
      )}
      {isFormVisable && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
