import { createContext, useEffect, useState } from "react";

export const signup = createContext();

const initialValue = {
  isAuth: false,
  Token: null,
};

export function SingupProvider({ children }) {
    const [state, setstate] = useState({
        isAuth: false,
        token: null,
      });
    
      const login = (token) => {
        setstate({ ...state, isAuth: true, token });
      };

  const value = {
   state,
    login,
  };

  return (
    <>
      <signup.Provider value={value}>{children}</signup.Provider>
    </>
  );
}
