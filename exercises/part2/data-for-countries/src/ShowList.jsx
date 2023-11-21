import { useState } from "react";
import CountryInfo from "./CountryInfo";

const ShowList = ({ list }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleClick = (country) => {
    setSelectedCountry(country);
  };

  if (list.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (list.length === 1 || selectedCountry) {
    return <CountryInfo country={selectedCountry || list[0]} />;
  } else {
    return (
      <div>
        {list.map((country) => (
          <div key={country.name.common}>
            {country.name.common}
            <button onClick={() => handleClick(country)}>show</button>
          </div>
        ))}
      </div>
    );
  }
};

export default ShowList;
