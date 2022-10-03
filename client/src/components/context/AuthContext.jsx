import { createContext, useState } from "react";

export default AuthContext = createContext();

export function AuthContextProvider({children}){
  const [isLogged, setIsLogged] = useState(window.localStorage.getItem("TheActualTokenForAuthInThisSpecificApp"));
}