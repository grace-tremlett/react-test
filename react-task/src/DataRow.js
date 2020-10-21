import React from 'react';

const DataRow = ({ entry }) => {
  console.log(entry)
  return (
    <div className="entry">
      <p>{entry.text}</p>
    </div>
    );
}

export default DataRow;
