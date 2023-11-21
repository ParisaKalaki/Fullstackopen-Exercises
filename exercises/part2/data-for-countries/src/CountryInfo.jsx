import ShowWeather from "./ShowWeather";
const CountryInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>
      <h2>languages:</h2>
      <div>
        {Object.keys(country.languages).length > 1 ? (
          <ul>
            {Object.entries(country.languages).map(([code, language]) => (
              <li key={code}>{language}</li>
            ))}
          </ul>
        ) : (
          <p>{country.languages[Object.keys(country.languages)[0]]}</p>
        )}
        <div>
          <img src={country.flags.png} alt={country.flags.alt} />
        </div>
        <ShowWeather country={country} />
      </div>
    </div>
  );
};

export default CountryInfo;
