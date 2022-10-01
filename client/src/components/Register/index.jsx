import React, {useRef} from "react";
import Nav from "../Nav";
import axios from 'axios'
import "../../styles/register/register.css";

function Index() {
  const regEx = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const $ = (e) => {return e.current.value}

  const handleSubmit =(e)=>{
    e.preventDefault();
    if ($(name).length < 3) {
      alert("Nombre no debe ser menor a 3 caracteres");
    } 
    else if(!regEx.test(email.current.value)){
      alert('ingrese un correo valido')
    }
     else if ($(password).length < 6) {
      alert("Password no debe ser menor a 6 caracteres");
    } else {
      requestRegisterUser();
    }
  }

  const validateUserExist = (res) =>{
    if(res.response.status == 409){
      alert('usuario ya existe')
    }
  }

  const validatedRegister =()=>{
    alert('usuario registrado')
  }

  const requestRegisterUser = () =>{
    axios.post('http://localhost:4000/register', {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value
    })
    .then(res =>validatedRegister())
    .catch(err =>validateUserExist(err))
  }

  return (
    <>
      <Nav />
      <div>
        <form>
          <h2>Registro</h2>
          <input type='text' minLength={3} required ref={name}/>
          <input type='email' required ref={email}/>
          <input type='password' minLength={6} required ref={password}/>
          <input type='submit' onClick={handleSubmit}/>
        </form>
      </div>
    </>
  );
}

export default Index;
