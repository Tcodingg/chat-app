import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const ContextProvider = (props) => {
   const [userName, setUserName] = useState("");
   const [secrets, setSecret] = useState("");

   const value = {
      userName,
      setUserName,
      secrets,
      setSecret,
   };

   return (
      <AuthContext.Provider value={value}>
         {props.children}
      </AuthContext.Provider>
   );
};
