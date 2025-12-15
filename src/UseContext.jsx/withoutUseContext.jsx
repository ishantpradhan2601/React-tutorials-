import React from 'react'
import {useState} from 'react'

const WithoutUseContext = () => {
    const [Subject,setSubject]=useState("React");
  return (
    <div>
      <h2>This is First Component and Passing the Subject as prop to c</h2>
      <ComponentA Subject={Subject}/>
    </div>
  )
}

const ComponentA =()=>{
    return(
        <div>
            <h2>This is the First component and Passing the subject as prop to c</h2>
            <ComponentB Subject={Subject}/>
        </div>
    )
}

const ComponentB=()=>{
    return(
        <div>
            <h2>This is the Second component and passing the subject as prop to c</h2>
            <Componentc Subject={Subject}/>
        </div>
    )
}

export default WithoutUseContext
