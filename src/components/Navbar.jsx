import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Tasks from '../pages/Tasks'
import Contact from '../pages/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
      <nav className=' flex items-center justify-between bg-accent1 p-4'>
        <Link to='' className='font-bold text-white text-lg'><FontAwesomeIcon icon={faHome} className='mr-5 text-3xl'/>Fountain Designs</Link>
        <div className='flex space-x-6'>
        <NavLink to='/' className='text-white nav-link' element={<Home/>}>Home</NavLink>
        <NavLink to='/about' className='text-white nav-link' element={<About/>}>About Us</NavLink>
        <NavLink to='/services' className='text-white nav-link' element={<Services/>}>Services</NavLink>
        <NavLink to='/projects' className='text-white nav-link' element={<Tasks/>}>Projects</NavLink>
        <NavLink to='/contact' className='text-white nav-link' element={<Contact/>}>Contact Us</NavLink>
        </div>
        
      </nav>
  )
}

export default Navbar
