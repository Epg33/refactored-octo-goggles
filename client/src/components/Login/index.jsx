import React, { useRef, useContext } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import Nav from "../Nav";
import {AuthContext,AuthContextProvider} from '../context/AuthContext'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/login/login.css";

function Index() {
  const regEx = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$");
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  // const {setIsLogged} = useContext(AuthContext)
  const { setUserId } = useContext(AuthContext)

  const validateLogin = (e) => {
    e.preventDefault();
    if (!regEx.test(email.current.value)) {
      alert("ingrese un correo valido");
    } else {
      handleRequestOfLogin();
    }
  };

  const handleLoginResposeErr = (res) => {
    if (res.response.status === 409) {
      alert("contraseña incorrecta");
    } else if (res.response.status === 410) {
      alert("ingrese un usuario valido");
    }
  };

  const handleLoginRespose = () => {
    alert("usuario logueado exitosamente");
    window.setTimeout(() => {
      navigate("/account/tasks", { replace: true });
      window.clearTimeout();
    }, 2000);
  };

  const handleRequestOfLogin = () => {
    axios
      .post("http://localhost:4000/login", {
        email: email.current.value,
        password: password.current.value,
      })
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("AuthTokenForLoginInThisSpecificApp",res.data.token);
        console.log(window.localStorage.getItem("AuthTokenForLoginInThisSpecificApp"));
        setUserId(res.data.id)
        handleLoginRespose();
      })
      .catch((err) => handleLoginResposeErr(err));
  };

  return (
    <>
      <Nav />
      <div className="login-body">
        <form className="login-form">
          <h2 className="login-title">Log in</h2>
          <div className="login-inputs-container">
            <label className="login-label">
              <MdEmail className="login-icon" />
              <input type="email" className="login-input" placeholder="Correo: " required ref={email} />
            </label>
            <label className="login-label">
              <MdLock className="login-icon" />
              <input type="password" className="login-input" placeholder="Contraseña: " required ref={password} />
            </label>
            <input type="submit" className="login-submit" onClick={validateLogin} />
          </div>
        </form>
      </div>
    </>
  );
}

export default Index;
