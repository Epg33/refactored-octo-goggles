import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/nav.css'

function Nav() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/register'>Registro</NavLink>
      <NavLink to='/login'>Log in</NavLink>
    </nav>
  )
}

export default Nav