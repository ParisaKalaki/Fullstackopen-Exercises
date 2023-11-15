import Person from "./Person";

const Persons = ({ persons, onDelete }) => {
  return persons.map((person) => (
    <Person
      person={person}
      key={person.name}
      onDelete={() => onDelete(person.id, person.name)}
    />
  ));
};

export default Persons;
