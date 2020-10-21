import React, { useState, useEffect } from 'react';
import DataRow from './DataRow'
import './App.scss';

const App = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [validation, setValidation] = useState({
    show: false,
    message: ''
  });

  // Infinite loop? Needs fixing...
  // useEffect(() => {
  //   const storedData = localStorage.getItem('To Do');
  //   console.log(storedData);
  //   if(storedData !== null){
  //     let newData = JSON.parse(storedData);
  //     setData(newData);
  //   }
  // });

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
    // check to see if we have an input value
    if (inputValue !== '') {
        // spread current data and add new item object
      const newData = [...data, { 
        text: inputValue,
        complete: false
      }];

      setData(newData);
      // revert input value to empty
      setInputValue('');
      setValidation({show: false, message:''})
    } else {
      setValidation({show: true, message: 'Please enter a value.'})
    }
  }

  const handleEdit = (index, value) => {
    const newData = [...data];
    // getting new value from child and updating data
    newData[index].text = value
    setData(newData);
  }

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  const handleComplete = (event, index) => {
    const newData = [...data];
    // getting completed boolean value from child and updates data
    newData[index].complete = event.target.checked;
    setData(newData);
  }

  return (
    <div className="to-do">
      <header className="to-do__header">
        Todo List
      </header>
        <div>
          <input className="to-do__main-input" value={inputValue} onChange={handleInputChange} onKeyPress={handleEnter} />
          <button className="to-do__btn" onClick={handleAdd}>Add</button>
        </div>
        {validation.show &&
          <p className="to-do__validation">{validation.message}</p>
        }
        {data.map((entry, index) => (
          <DataRow
              entry={entry}
              index={index}
              key={index}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              handleEdit={handleEdit}
          />
        ))}
        {data.length > 0 && <button className="to-do__btn to-do__btn--save" onClick={localStorage.setItem('To Do', JSON.stringify(data))}>Save my Todo's</button>}
    </div>
  );
}

export default App;
