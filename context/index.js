import React, { createContext, useState } from "react";

export const AuthContext = createContext();
export const ContextProvider = (props) => {
   const [username, setUsername] = useState("");
   const [secret, setSecret] = useState("");

   const value = {
      username,
      setUsername,
      secret,
      setSecret,
   };

   return (
      <AuthContext.Provider value={value}>
         {props.children}
      </AuthContext.Provider>
   );
};
