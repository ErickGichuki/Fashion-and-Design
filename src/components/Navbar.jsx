import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBagShopping, faTimes } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav className='flex items-center justify-between bg-accent1 p-4'>
        <Link to='/' className='font-bold text-white text-lg'>
          <FontAwesomeIcon icon={faBagShopping} className='mr-5 text-3xl'/>
          Fountain Designs
        </Link>

        <div className='md:hidden'>
          <button 
          onClick={toggleNav}
          className='text-white p-2'
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className='text-2xl'/>
          </button>
        </div>

        <div className={`flex-col md:flex md:flex-row md:space-x-6 md:items-center ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <NavLink 
            to='/' 
            className='text-white nav-link' 
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <NavLink 
            to='/about'
            className='text-white nav-link' 
            onClick={() => setIsOpen(false)} 
          >
            About Us
          </NavLink>

          <NavLink 
            to='/services' 
            className='text-white nav-link' 
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>

          <NavLink 
            to='/projects' 
            className='text-white nav-link' 
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>

          <NavLink 
            to='/contact' 
            className='text-white nav-link' 
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      </nav>
  )
}

export default Navbar
