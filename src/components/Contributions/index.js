import React from "react";

function calculateContributionByPercentage(amount, percentage) {
  const payment = parseFloat((amount * percentage) / 100).toFixed(2);
  return payment;
}

function calculateContributionByProgression(amount, item, contributedTotal) {
  const payment = parseFloat(amount).toFixed(2);
  var runningTotal = parseFloat(0).toFixed(2);
  var taxableAmount = parseFloat(0).toFixed(2);
  var tax = parseFloat(0).toFixed(2); 

  for (var i = 0; i < item.length; i++) {
    if (payment >= item[i].bracketEnd) {
      taxableAmount = parseFloat((item[i].bracketEnd - item[i].bracketStart));
      
      tax = parseFloat((taxableAmount * item[i].percentage) / 100);
      if (tax > parseFloat(0)) {
        runningTotal = parseFloat(runningTotal) + parseFloat(tax);
      }
    } else {
      taxableAmount = parseFloat(payment - item[i].bracketStart);
  
      tax = parseFloat((taxableAmount * item[i].percentage) / 100);
      if (tax > parseFloat(0)) { 
        runningTotal = parseFloat(runningTotal) + parseFloat(tax);
      }
    }
  }

  return parseFloat(runningTotal).toFixed(2);
}

function Contributions({contributions, salary, type}) {
  var total = 0;
  const grossSalary = parseFloat(salary).toFixed(2);

  return (
    <div className="result-wrapper">
      <h4>{type} taxes</h4>
      {contributions.map(item => {
        const value = parseFloat(item.value).toFixed(2);
        const counter = Math.random();
        var finalAmount = 0;
        
        if (item.type === "percentage") {
          finalAmount = calculateContributionByPercentage(grossSalary, value);
        } else {
          finalAmount = calculateContributionByProgression(grossSalary, item.value)
        }

        total = (parseFloat(total) + parseFloat(finalAmount));
 
        return(
          <div className="result" key={`results_${type}_${counter}`}>
            <p className="label">{item.name}</p>
            <p>{finalAmount} USD</p>
          </div>
        );
      })}
      
      {type === "employer" &&
        <p className="total">
          Total Cost: { (parseFloat(grossSalary) + parseFloat(total)).toFixed(2) } USD
        </p>
      }

      {type === "employee" &&
        <p className="total">
          Net Salary: {(parseFloat(grossSalary) - parseFloat(total)).toFixed(2)} USD
        </p>
      }
    </div>
  )
}

export default Contributions;