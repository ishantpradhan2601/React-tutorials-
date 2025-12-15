import React, { useEffect, useRef } from 'react'

const UseRefExample = () => {

    const Myref= useRef('');
    useEffect(()=>{
        Myref.current.focus();
    },[])


  return (
    <div>
        <input type="text" ref={Myref} className='outline-0 border-2 border-solid border-r-amber-600'/>
      
    </div>
  )
}

export default UseRefExample
