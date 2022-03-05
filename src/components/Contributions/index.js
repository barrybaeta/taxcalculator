import React from "react";

function calculateContributionByPercentage(amount, percentage) {
  const payment = parseFloat((amount * percentage) / 100).toFixed(2);
  return payment;
}

function calculateContributionByProgression(amount, item) {
  const payment = parseFloat(amount).toFixed(2);
  var runningTotal = parseFloat(0).toFixed(2);
  var newAmount = parseFloat(payment).toFixed(2);
  var taxableAmount = parseFloat(0).toFixed(2);

  for (var i = 0; i < item.length; i++) {
    if (item[i].bracketEnd !== "n/a") {
      if (newAmount >= item[i].bracketEnd) {
        taxableAmount = parseFloat((item[i].bracketEnd - item[i].bracketStart));
        runningTotal = parseFloat(runningTotal) + parseFloat(((taxableAmount * item[i].percentage) / 100));
        newAmount = parseFloat(newAmount) - parseFloat(taxableAmount);
      }
    } else {
      runningTotal = parseFloat(runningTotal) + parseFloat(((newAmount * item[i].percentage) / 100));
    }
  }

  return parseFloat(runningTotal).toFixed(2);
}

function Contributions({contributions, salary, type}) {
  return (
    <div className="result-wrapper">
      {contributions.map(item => {
        const grossSalary = parseFloat(salary).toFixed(2);
        const value = parseFloat(item.value).toFixed(2);
        const counter = Math.random();
      
        return(
          <div className="result" key={`results_${type}_${counter}`}>
            <p className="label">{item.name}</p>
            {item.type === "percentage" && 
              <p>{calculateContributionByPercentage(grossSalary, value)} USD</p>
            }

            {item.type === "progressive" &&
              <p>{calculateContributionByProgression(grossSalary, item.value)} USD</p>
            }
          </div>
        );
      })}
    </div>
  )
}

export default Contributions;