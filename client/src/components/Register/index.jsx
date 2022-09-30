import React from "react";
import Nav from "../Nav";
import "../../styles/register/register.css";

function index() {
  return (
    <>
      <Nav />
      <div>
        <form>
          <h2>Registro</h2>
          <input type='text' pattern="[a-zA-Z]++" required/>
          <input type='email' required/>
          <input type='password' required/>
          <input type='submit' />
        </form>
      </div>
    </>
  );
}

export default index;
