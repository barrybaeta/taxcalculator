import React, {Fragment} from "react";
import data from "../../data/data.json";

function CountryDropDown({onChange}) {
  const countryList = data;

  return (
    <Fragment>
      <label>Select a Country</label>
      <select id="country-dropdown" onChange={onChange}>
        {countryList.map(item => {                                   
          return(
            <Fragment key={`countruy_${item.id}`}>
              {item.countries.country.map((country, i) => {
                return(
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                )             
              })}
            </Fragment>
          );
        })}
      </select>
    </Fragment>
  );
}

export default CountryDropDown;