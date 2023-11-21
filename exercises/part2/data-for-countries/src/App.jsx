import { useEffect, useState } from "react";
import countryService from "./services/countryService";
import ShowList from "./ShowList";

function App() {
  const [countriesList, setCountriesList] = useState([]);
  const [searchbar, setSearchbar] = useState("");
  const [searchedList, setSearchedList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const countries = await countryService.getAll();
      setCountriesList(countries);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filteredList = countriesList.filter((country) =>
      country.name.common.toLowerCase().startsWith(searchbar.toLowerCase())
    );
    setSearchedList(filteredList);
  }, [searchbar, countriesList]);

  const handleSearchbar = (e) => {
    setSearchbar(e.target.value);
  };

  return (
    <div>
      find countries
      <input value={searchbar} onChange={(e) => handleSearchbar(e)} />
      <div>{searchbar && <ShowList list={searchedList} />}</div>
    </div>
  );
}

export default App;
