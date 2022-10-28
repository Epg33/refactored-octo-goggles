import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState('')
  return(
    <AuthContext.Provider value={{isLogged, setIsLogged, userId, setUserId}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;