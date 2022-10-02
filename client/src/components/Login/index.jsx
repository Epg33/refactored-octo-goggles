import React, {useRef} from "react";
import Nav from "../Nav";
import axios from 'axios'
import "../../styles/login/login.css";

function Index() {
  const regEx = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
  const email = useRef();
  const password = useRef();

  const validateLogin = (e) => {
    e.preventDefault();
    if(!regEx.test(email.current.value)){
      alert("ingrese un correo valido")
    }
  }

  return (
    <>
      <Nav />
      <div>
        <form>
          <h2>Log in</h2>
          <input type="email" required ref={email} />
          <input type="password" required ref={password}/>
          <input type="submit" onClick={validateLogin}/>
        </form>
      </div>
    </>
  );
}

export default Index;
