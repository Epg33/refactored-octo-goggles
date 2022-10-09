import React from 'react'
import { useRef } from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/nav.css'

function Nav() {
  const boton = useRef();
  const theClass = () => {
    boton.current.classList.toggle('open')
  } 
  if(window.innerWidth<550){
    return(
      <>
        <nav className='nav'>
          <div className='burger-container'>
            <div className='burguer'>
              <button onClick={theClass} ref={boton}>
                <span className='top-line'></span>
                <span className='mid-line'></span>
                <span className='bottom-line'></span>
              </button>
            </div>
          </div>
        </nav>
      </>
    )
  }
  else{
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
}

export default Nav