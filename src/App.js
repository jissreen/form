import React, { useState } from 'react';

const DynamicForm = () => {
  const [argumentsList, setArgumentsList] = useState([{ name: '', value: false }]);
  const [operatorsList, setOperatorsList] = useState(['AND']);
  const [result, setResult] = useState(undefined);

  const handleArgumentChange = (index, event) => {
    const { name, value } = event.target;
    const updatedArgumentsList = [...argumentsList];
    updatedArgumentsList[index] = { ...updatedArgumentsList[index], [name]: value };
    setArgumentsList(updatedArgumentsList);
  };

  const handleOperatorChange = (index, event) => {
    const { value } = event.target;
    const updatedOperatorsList = [...operatorsList];
    updatedOperatorsList[index] = value;
    setOperatorsList(updatedOperatorsList);
  };

  const handleAddArgument = () => {
    setArgumentsList([...argumentsList, { name: '', value: false }]);
  };

  const handleRemoveArgument = (index) => {
    const updatedArgumentsList = [...argumentsList];
    updatedArgumentsList.splice(index, 1);
    setArgumentsList(updatedArgumentsList);
  };

  const handleResultChange = (event) => {
    setResult(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform desired logic based on the arguments, operators, and result
    console.log('Arguments:', argumentsList);
    console.log('Operators:', operatorsList);
    console.log('Result:', result);
  };

  return (
    <form onSubmit={handleSubmit}>
      {argumentsList.map((argument, index) => (
        <div key={index}>
          <label>
            Argument {index + 1}:
            <input
              type="text"
              name="name"
              value={argument.name}
              onChange={(event) => handleArgumentChange(index, event)}
              required
            />
            <select
              value={argument.value}
              name="value"
              onChange={(event) => handleArgumentChange(index, event)}
              required
            >
              <option value={false}>false</option>
              <option value={true}>true</option>
            </select>
            <button type="button" onClick={() => handleRemoveArgument(index)}>
              Remove
            </button>
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddArgument}>
        Add Argument
      </button>
      {operatorsList.map((operator, index) => (
        <div key={index}>
          
        </div>
      ))}
      <label>
        My Arg...
        <select value={result} onChange={handleResultChange} required>
        <option value="constant">Select...</option>
          <option value="constant">Constant</option>
          <option value="argument">Argument</option>
          
          <option value="and">AND</option>
          <option value="or">OR</option>
        </select>
      </label>
      <p>Result :</p>
    </form>
  );
};

export default DynamicForm;
