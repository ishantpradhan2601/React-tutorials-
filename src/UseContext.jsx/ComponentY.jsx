import React, { useContext } from 'react'
import { SnameContext, MarksContext } from './ProviderComponent'

const ComponentY = () => {
  const sname = useContext(SnameContext)
  const marks = useContext(MarksContext)

  return (
    <div>
      <h3>Student Name: {sname}</h3>
      <h3>Marks: {marks}</h3>
    </div>
  )
}

export default ComponentY
