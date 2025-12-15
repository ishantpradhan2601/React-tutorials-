import React, { useReducer } from 'react'
import UseRefExample2 from './UseRefExample2'

const UseReducerExample2 = () => {
    const intitialState = {Discount:'No Discount'}
    
    const reducerDiscount =(state,action)=>{
          switch (action.type){
            case 'apply':
                return {Discount:"Applied"}
            case 'Remove':
                return {Discount:"Removed"
                }
            default:
          }
    }
    const [discountState,dispatch]=useReducer(reducerDiscount,intitialState)
  return (
    <div>
      <h2>Discount:{discountState.Discount}</h2>
      <button onClick={()=>dispatch({type:"apply"})}>Apply Discount</button>
      <button onClick={()=>dispatch({type:"Remove"})}>Remove Discount</button>
    </div>
  )
  
}

export default UseReducerExample2
