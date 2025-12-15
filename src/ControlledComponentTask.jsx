import React, { useState } from 'react'

const ControlledComponentTask = () => {
      // const[firstname , setFirstName]=useState("")
      // const[lastname,  setLastname]= useState("")
      // const[review,setReview]=useState("")

      const [myData , setMyData] = useState({
        fname:"",
        lname:"",
        review:"",
        show:"GOT"

      });
      const changeData=(e)=>{
        const{name,value} = e.target;
        setMyData((myData)=>({...myData,
          [name]:value

        }))
      }

      const handleSubmit =(e)=>{
        e.preventDefault();
        alert(`Welcome ${myData.fname} ${myData.lname} and review: ${myData.review} show selected: ${myData.show}`);
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            FirstName : <input type="text" name="fname" value={myData.fname} onChange={changeData} />
            <br />
            LastName : <input type="text" name="lname" value={myData.lname} onChange={changeData} />
            <br />
            Review : <textarea name="review" value={myData.review} onChange={changeData}></textarea>
            <br />
            <select name="show" id="show" value={myData.show} onChange={changeData}>
              <option value="GOT">GOT</option>
              <option value="breaking bad">breaking bad</option>
              <option value="friends">friends</option>
              <option value="the office">the office</option>
            </select>
          
            <button type="submit">submit</button>
            
        </form>
        <h1>
          FirstName: {myData.fname} <br />
          LastName: {myData.lname} <br />
          Review: {myData.review} <br />
          Show Selected: {myData.show}
        </h1>
      
    </div>
  )
}

export default ControlledComponentTask
