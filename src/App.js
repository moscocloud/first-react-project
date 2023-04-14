import Costs from "./components/Costs/Costs";
import NewCost from "./components/Form/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
