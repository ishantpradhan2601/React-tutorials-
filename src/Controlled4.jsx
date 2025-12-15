//controlledcomponents with select tag

import React,{useState} from 'react'



const Controlled4 = () => {
    const[selectShow, setSelectShow]=useState("GOT");
    
    const handleSelects=(e)=>{
        setSelectShow(e.target.value);
        alert(`you have selected ${e.target.value} show`)
   }
    
  return (
    <div>
      <select name="selectShow" id="selectShow" value={selectShow} onChange={handleSelects}>
        <option value="GOT">GOT</option>
        <option value="breaking bad">breaking bad</option>
        <option value="friends">friends</option>
        <option value="the office">the office</option>
      </select>
      <h1>Show Selected: {selectShow}</h1>
    </div>
  )
}

export default Controlled4
