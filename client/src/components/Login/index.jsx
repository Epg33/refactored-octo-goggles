import React, {useRef} from "react";
import Nav from "../Nav";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import "../../styles/login/login.css";

function Index() {
  const regEx = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const validateLogin = (e) => {
    e.preventDefault();
    if(!regEx.test(email.current.value)){
      alert("ingrese un correo valido")
    }
    else {
      handleRequestOfLogin()
    }
  }

  const handleLoginResposeErr = (res) =>{
    if(res.response.status===409){
        alert('contraseña insorrecta')
    } else if(res.response.status===410){
        alert('ingrese un usuario valido')
    }
  }

  const handleLoginRespose = () =>{
    alert('usuario logueado exitosamente');
    window.setTimeout(() => {
      navigate("/account/tasks", { replace: true });
      window.clearTimeout();
    }, 2000)
  }

  const handleRequestOfLogin = () => {
    axios.post('http://localhost:4000/login', {
      email: email.current.value,
      password: password.current.value
    })
    .then(res =>
      handleLoginRespose())
    .catch(err=>handleLoginResposeErr(err))
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
