import React, {Fragment} from "react";

function GrossSalary({salary, onChange}) {
  return (
    <Fragment>
      <label>Enter the gross salary (USD)</label>
      <input
        placeholder="Enter salary"
        value={salary}
        type="number"
        onChange={onChange} />
    </Fragment>
  );
}

export default GrossSalary;