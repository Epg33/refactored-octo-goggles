import React, {useRef} from "react";
import Nav from "../Nav";
import axios from 'axios'
import "../../styles/register/register.css";

function Index() {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit =(e)=>{
    e.preventDefault()
  }

  const requestRegisterUser = () =>{

  }

  return (
    <>
      <Nav />
      <div>
        <form>
          <h2>Registro</h2>
          <input type='text' pattern="[a-zA-Z]++" minLength={3} required ref={name}/>
          <input type='email' required ref={email}/>
          <input type='password' minLength={6} required ref={password}/>
          <input type='submit' onClick={handleSubmit}/>
        </form>
      </div>
    </>
  );
}

export default Index;
