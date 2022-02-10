import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context";
import axios from "axios";

export default function Auth() {
   //const { userName } = useContext(AuthContext);
   const { userName, setUserName, secrets, setSecret } =
      useContext(AuthContext);
   console.log(userName);

   return (
      <div className="background">
         <div className="auth-container">
            <form className="auth-form">
               <div className="auth-title">Chat App</div>
               <div className="input-container">
                  <input
                     type="text"
                     placeholder="Email"
                     className="text-input"
                  />
               </div>
            </form>
         </div>
      </div>
   );
}
