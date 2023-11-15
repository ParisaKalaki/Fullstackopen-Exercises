const PersonForm = ({
  name,
  number,
  handleFormSubmit,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        name: <input value={name} onChange={handleNameChange} />
        <div>
          number: <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
