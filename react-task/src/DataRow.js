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
    <div className="to-do__entry">
      {isEdit ? 
      <>
        <div className="to-do__text">
          <input className={entry.complete ? 'completed' : ''} onChange={handleOnChange} />
        </div>
        <div className="to-do__actions">
          <button className="to-do__btn" onClick={handleSave}>Save</button>
          <button className="to-do__btn" onClick={handleCancel}>Cancel</button>
        </div>
      </> :
      <>
        <div className="to-do__text">
          <p className={entry.complete ? 'to-do__text to-do__text--completed' : 'to-do__text'}>{rowText}</p>
        </div>
        <div className="to-do__actions">
          <button className="to-do__btn" onClick={handleOnClickEdit}>Edit</button>
          <button className="to-do__btn" onClick={() => handleDelete(index)}>Remove</button>
          <input className="to-do__checkbox" type="checkbox" onChange={(event) => handleComplete(event, index)} />
        </div>
      </>
      }
    </div>
    );
}

export default DataRow;
