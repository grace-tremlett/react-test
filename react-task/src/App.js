import React, { useState } from 'react';
import DataRow from './DataRow'
import './App.scss';

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleEnter = (event) => {
    // below allows to capture more browsers
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if (keyCode === 13) {
      handleAdd();
    }
  }

  const handleAdd = () => {
    if (inputValue !== '') {
    const newEntry = [...data, { 
      text: inputValue,
      complete: false
    }];

    setData(newEntry);
    setInputValue('');
    }
  }

  const handleDelete = (index) => {
    const newEntry = [...data];
    newEntry.splice(index, 1);
    setData(newEntry);
  }

  const handleComplete = (event, index) => {
    const newEntry = [...data];
    newEntry[index].complete = event.target.checked;
    setData(newEntry);
  }

  return (
    <div className="to-do">
      <header className="to-do__header">
        To Do
      </header>
      <div className="input">
        <input value={inputValue} onChange={handleInputChange} onKeyPress={handleEnter} />
        <button onClick={handleAdd}>Add</button>
      </div>
      {data.map((entry, index) => (
        <DataRow
            entry={entry}
            index={index}
            key={index}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
        />

      ))}
    </div>
  );
}

export default App;
