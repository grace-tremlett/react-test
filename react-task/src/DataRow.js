import React from 'react';

const DataRow = ({ entry, index, handleDelete, handleComplete }) => {
  return (
    <div className="entry">
      <p className={entry.complete ? 'completed' : ''}>{entry.text}</p>
      <button onClick={() => handleDelete(index)}>Remove</button>
      <input type="checkbox" onChange={(event) => handleComplete(event, index)} />
    </div>
    );
}

export default DataRow;
