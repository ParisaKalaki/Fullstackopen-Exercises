/* eslint-disable no-unused-vars */
import "./index.css";
import { useState, useEffect } from "react";

import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import personService from "./services/personService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await personService.getAll();
      setPersons(response);
    }
    fetchData();
  }, []);
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filterName)
  );

  const Notification = ({ message }) => {
    if (message === null) {
      return null;
    }

    return <div className="error">{message}</div>;
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name} ?`)) {
      personService.remove(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };
  const handleFilter = (e) => {
    setFilterName(e.target.value.toLowerCase());
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const foundPerson = persons.find(({ name }) => name === newName) || false;
      if (foundPerson) {
        if (
          window.confirm(
            `${newName} is already added to phonebook, replace the old number with a new one?`
          )
        ) {
          await personService.update(foundPerson.id, {
            ...foundPerson,
            number: newNumber,
          });

          setPersons((prevPersons) =>
            prevPersons.map((person) =>
              person.id === foundPerson.id
                ? { ...person, number: newNumber }
                : person
            )
          );
          setErrorMessage(`${foundPerson.name}'s number has changed`);
        }
        // setErrorMessage(
        //   `Information of ${foundPerson.name} has already removed from server.`
        // );
      } else {
        const newPerson = await personService.create({
          name: newName,
          number: newNumber,
        });

        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
        setErrorMessage(`Added ${newPerson.name}`);
      }
    } catch (error) {
      setErrorMessage(error.response.data.error);
    }
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      {errorMessage && <Notification message={errorMessage} />}

      <Filter filter={filterName} onChange={handleFilter} />

      <h2>add a new</h2>

      <PersonForm
        name={newName}
        number={newNumber}
        handleFormSubmit={handleFormSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} onDelete={handleDelete} />
    </div>
  );
};

export default App;
