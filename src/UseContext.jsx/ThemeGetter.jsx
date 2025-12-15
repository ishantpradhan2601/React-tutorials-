import React, { useContext } from 'react'
import { themeContext } from './ThemeProvider'


const ThemeGetter = () => {
  const { theme, setTheme } = useContext(themeContext)

  const changecolor = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <div className='text-center'>
      <h2>Current Theme: {theme}</h2>
      <button className="border rounded-b-4xl bg-amber-700" onClick={changecolor}>Toggle</button>
    </div>
  )
}

export default ThemeGetter
