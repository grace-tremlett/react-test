import React, { useState, createRef } from 'react';
import './App.scss';
import DataRow from './DataRow'

const App = () => {
  const [data, setData] = useState([]);

  let textInput = createRef();

  const handleAdd = () => {
    if (textInput.current.value !== '') {
    const newEntry = [...data, { 
      text: textInput.current.value,
      complete: false
    }];

    setData(newEntry);
    }
  }

  return (
    <div className="to-do">
      <header className="to-do__header">
      </header>
      <div className="input">
          <input ref={textInput} />
          <button onClick={handleAdd}>Add</button>
      </div>
      {data.map((entry, index) => (
        <DataRow
            entry={entry}
            index={index}
            key={index}
        />

      ))}
    </div>
  );
}

export default App;
