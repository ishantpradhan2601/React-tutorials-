import React ,{useState} from 'react'

const useStateExample = () => {
  const [count,setCount]=useState(0);
  const Inc = ()=>{
      setCount(preVal=> {
        return preVal + 1;
      });
  }
  const decr =()=>{
      setCount(preVal=>preVal-1);
  }

  return (
    <div>
         <h1>Count: {count}</h1>
         <button onClick={Inc}>Increment</button>
         <button onClick={decr}>Decrement</button>
      
    </div>
  )
}

export default useStateExample
