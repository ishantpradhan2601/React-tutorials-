import React from 'react'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './contact.jsx'
import DataFile from './DataFile.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

//  passing of data
// 1. query Parameters 2. state
const ParentRouting = () => {
    const aboutData = {
        compName:"Infosys",
        Location:"Bangalore",
        work:"Software Development"
    }
    const navigatePages = () => {
        const navigate = useNavigate();
        navigate('/about', {state: aboutData});
    }


  return (
    <div>
      <BrowserRouter>

        <div>
          <Link to="/">Home</Link> &nbsp;
          <Link to="/datafile?name=Ishannn&reg=12324904">DataFile</Link> &nbsp;
          <Link to="/about" state={aboutData}>About</Link> &nbsp;
          <Link to="/contact">Contact</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datafile" element={<DataFile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default ParentRouting

