import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, rest } from './CounterSlice'

const CounterUI = () => {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(rest())}>Reset</button>
    </div>
  )
}

export default CounterUI
