import React from 'react'
import logo from '../public/logo512.png'
import {NavLink} from 'react-router-dom'

function Error404() {
  return (
    <div>
      <img src={logo} />
      <h1>Error page not found</h1>
      <NavLink to='/'>Volver al home</NavLink>
    </div>
  )
}

export default Error404