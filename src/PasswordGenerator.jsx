import React from 'react'
import { useEffect, useState } from 'react'
import './Talwindcss.css'
const PasswordGenerator = () => {
  const [length,setLength]=useState(4);
  const [numberAllowed,setNumberAllowed]= useState(false);
  const[charAllowed,setCharAllowed]=useState(False);
  
  return (
    <div className='bg-slate-400 rounded-2xl shadow-amber-50 h-max'>
      <h1 className='  font-extrabold text-center text 4xl p-20'>Passoword generator</h1>
    </div>
  )
}

export default PasswordGenerator
