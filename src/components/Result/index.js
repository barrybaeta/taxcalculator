import React, {Fragment} from "react";
import data from "../../data/data.json";

import Contributions from "../Contributions";

function Result({salary, selected}) {
  const countryList = data;
  
  return (
    <div className="results" key="results">
      {countryList.map((item) => {                                   
        return(
          <Fragment key={`resultWrapper_${item.id}`}>
            {item.countries.country.filter(country => country.id === selected).map((filteredCountry, i) => {
              return(
                <div className="results-containter" key={`result_${i}`}>
                  <Contributions contributions={filteredCountry.employerContribution} salary={salary} type="employer"></Contributions>
                  <Contributions contributions={filteredCountry.employeeContribution} salary={salary} type="employee"></Contributions>
                </div>
              )             
            })}
          </Fragment>
        );
      })}
    </div>
  );
}

export default Result;