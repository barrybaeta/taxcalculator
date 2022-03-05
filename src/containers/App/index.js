import React, { useState, useCallback } from "react";

import CountryDropDown from "../../components/CountryDropDown";
import GrossSalary from "../../components/GrossSalary";
import Result from "../../components/Result";

import rocket from "../../assets/images/rocket.png";

function App() { 
  const [selected, setSelected ] = useState(1);
  const [salary, setSalary ] = useState(0.00);

  const handleCountryChange = useCallback(
  (e) => setSelected(e.target.value),
    []
  );

  const handleSalaryChange = useCallback(
    (e) => setSalary(e.target.value),
      []
    );

  return(
    <div className="wrapper">
      <div className="card">
        <h2>Tax Calculator</h2>
        <div className="options">
          <div className="">
            <CountryDropDown onChange={handleCountryChange}></CountryDropDown>
          </div>
          <div>
            <GrossSalary salary={salary} onChange={handleSalaryChange} ></GrossSalary>
          </div>
        </div>
        <Result salary={salary} selected={selected}></Result>
        <img className="card-element" src={rocket} alt="rocket" />
      </div>
    </div>
  )
}
export default App;