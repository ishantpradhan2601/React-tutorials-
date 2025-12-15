
import React from 'react'
import { useLocation } from 'react-router-dom'


const About = () => {
    
  return (
    <div>
      const Location = useLocation();
      const {compName, Location, work} = loc.state;
      <h2>This is About Component</h2>
      <p>Company Name: {compName}</p>
      <p>Location: {Location}</p>
      <p>Work: {work}</p>
    </div>
  )
}

export default About
