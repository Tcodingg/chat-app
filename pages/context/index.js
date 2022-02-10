import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = () => {
   const [userName, setUserName] = useState("");
   const [secrets, setSecret] = useState("");

   const value = {
      userName,
      setUserName,
      secrets,
      setSecret,
   };

   return <Context.Provider value={value}></Context.Provider>;
};
