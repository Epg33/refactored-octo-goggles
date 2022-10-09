import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/nav.css'

function Nav() {
  return (
    <nav className='nav'>
      <div className='links-container'>
        <NavLink className='nav-link' to='/'>Home</NavLink>
        <NavLink className='nav-link' to='/register'>Registro</NavLink>
        <NavLink className='nav-link' to='/login'>Log in</NavLink>
      </div>
    </nav>
  )
}

export default Nav