import React, { useState } from 'react';

const DynamicInputForm = () => {
  const [inputFields, setInputFields] = useState(['']);

  const handleChange = (index, event) => {
    const values = [...inputFields];
    values[index] = event.target.value;
    setInputFields(values);
  };

  const handleAddField = () => {
    setInputFields([...inputFields, '']);
  };

  const handleRemoveField = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted values:', inputFields);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Dynamic Input Fields</h2>
      <form onSubmit={handleSubmit}>
        {inputFields.map((value, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <input
              type="text"
              value={value}
              onChange={(e) => handleChange(index, e)}
              placeholder={`Field ${index + 1}`}
              style={{ padding: '8px', width: '70%' }}
            />
            <button
              type="button"
              onClick={() => handleRemoveField(index)}
              style={{ marginLeft: '10px' }}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddField}>
          Add More
        </button>
        <br />
        <button type="submit" style={{ marginTop: '10px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicInputForm;