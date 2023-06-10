import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  return (
    <div className='Navbar'>
      <Link to="/"  className='link'>Home</Link>
      <Link to="/Student" className='link'>Student</Link>
      <Link to="/Contact" className='link'>Contact Us</Link> 
    </div>
  )
}

export default Navbar
