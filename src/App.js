import React, { useState, useEffect } from "react";
import "./App.sass";

// IMPORT COMPONENTS
import Widget from "./components/Widget";
import AddWidget from "./components/AddWidget";

const App = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(data.length);

  const addWidget = () => {
    let newObj = { id };
    setId(id + 1);
    // Create New Obj inside of Data array
    setData([...data, newObj]);
  };

  const updateData = (logo, name, goal, amount, id) => {
    // Create a copy of the current data array
    let newData = [...data];
    // Updating existed Obj
    newData[id] = { id, logo, name, goal, amount };
    setData(newData)
  };

  // Component will re-rendered when DATA array changes
  useEffect(() => {
    console.log("Data updated.", data);
  }, [data]);

  return (
    <div className="App container">
      <h1 className="App-title">Qgiv Thermometer</h1>
      <div className="App-grid container">
        {data.map((curr, i) => (
          <div key={i}>
            <Widget id={curr.id} updateData={updateData} />
          </div>
        ))}
        <AddWidget addWidget={addWidget} />
      </div>
    </div>
  );
};

export default App;
