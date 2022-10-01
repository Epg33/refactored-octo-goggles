import React from "react";
import Nav from "../Nav";
import "../../styles/login/login.css";

function Index() {
  return (
    <>
      <Nav />
      <div>
        <form>
          <h2>Log in</h2>
          <input type="email" required />
          <input type="password" required />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default Index;
