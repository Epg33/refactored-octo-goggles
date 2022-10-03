import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
  const [isLogged, setIsLogged] = useState(false);
  return(
    <AuthContext.Provider value={{isLogged, setIsLogged}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;