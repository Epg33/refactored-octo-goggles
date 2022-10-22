import React, { useRef } from "react";
import {MdDriveFileRenameOutline, MdEmail, MdLock} from 'react-icons/md'
import Nav from "../Nav";
import axios from "axios";
import "../../styles/register/register.css";

function Index() {
  const regEx = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const $ = (e) => {
    return e.current.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ($(name).length < 3) {
      alert("Nombre no debe ser menor a 3 caracteres");
    } else if (!regEx.test(email.current.value)) {
      alert("ingrese un correo valido");
    } else if ($(password).length < 6) {
      alert("Password no debe ser menor a 6 caracteres");
    } else {
      requestRegisterUser();
    }
  };

  const validateUserExist = (res) => {
    if (res.response.status === 409) {
      alert("usuario ya existe");
    }
  };

  const validatedRegister = () => {
    alert("usuario registrado");
  };

  const requestRegisterUser = () => {
    axios
      .post("http://localhost:4000/register", {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => validatedRegister())
      .catch((err) => validateUserExist(err));
  };

  return (
    <>
      <Nav />
      <div className="register-body">
        <form className="register-form">
          <h2 className="register-title">Registro</h2>
          <div className="register-inputs-container">
            <label htmlFor="register-name" className="register-label">
              <MdDriveFileRenameOutline className="register-icon"/> 
              <input type="text" id="register-name" placeholder="Nombre:" className="register-input" minLength={3} required ref={name} />
            </label>
            <label htmlFor="register-email" className="register-label">
              <MdEmail className="register-icon"/>  
              <input type="email" id="register-email" placeholder="Email:" className="register-input" required ref={email} />
            </label>
            <label htmlFor="register-pass" className="register-label">
              <MdLock className="register-icon"/> 
              <input type="password" id="reigster-pass" placeholder="Contraseña:" className="register-input" minLength={6} required ref={password} />
            </label>
            <input type="submit" value='Registro' className="register-submit" onClick={handleSubmit} />
          </div>
        </form>
      </div>
    </>
  );
}

export default Index;
