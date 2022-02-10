import { createContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
   const [userName, setUserName] = useState("");
   const [secrets, setSecret] = useState("");

   const value = {
      userName,
      setUserName,
      secrets,
      setSecret,
   };

   return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
