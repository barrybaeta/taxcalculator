import React, {Fragment} from "react";

function GrossSalary({salary, onChange}) {
  return (
    <Fragment>
      <label>Enter the yearly salary (USD)</label>
      <input
        placeholder="Enter the yearly gross salary"
        value={salary}
        type="number"
        onChange={onChange} />
    </Fragment>
  );
}

export default GrossSalary;