import React, { useState } from 'react';

const DataRow = ({ entry, index, handleEdit, handleDelete, handleComplete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [rowText, setRowText] = useState(entry.text);

  // to handle what element to return
  const handleOnClickEdit = () => {
    setIsEdit(true)
  }

  // updating row value on input change
  const handleOnChange = (event) => {
    setRowText(event.target.value)
  }

  // callback to parent edit function
  const handleSave = () => {
    handleEdit(index, rowText)
    setIsEdit(false)
  }
  
  // sets back to original state value
  const handleCancel = () => {
    setIsEdit(false)
    setRowText(entry.text)
  }

  return (
    <div className="entry">
      {isEdit ? 
      <>
        <input className={entry.complete ? 'completed' : ''} onChange={handleOnChange} />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </> :
      <>
        <p className={entry.complete ? 'completed' : ''}>{rowText}</p>
        <button onClick={handleOnClickEdit}>Edit</button>
        <button onClick={() => handleDelete(index)}>Remove</button>
        <input type="checkbox" onChange={(event) => handleComplete(event, index)} />
      </>
      }
    </div>
    );
}

export default DataRow;
