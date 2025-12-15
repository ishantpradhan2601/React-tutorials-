import React from 'react'

const DataFile = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name');
    const regnno = queryParams.get('regnno');
  return (
    
    <div>
      <p>This is Data file</p>
      <p>Name: {name}</p>
      <p>Registration Number: {regnno}</p>
    </div>
  )
}

export default DataFile
