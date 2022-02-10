import React, { useContext } from "react";
import { Router, useRouter } from "next/router";
import { AuthContext } from "../context";
import axios from "axios";

export default function Auth() {
   //const { userName } = useContext(AuthContext);
   const { userName, setUserName, secrets, setSecret } =
      useContext(AuthContext);
   console.log(userName);

   const onSubmit = (e) => {
      e.preventDefault();
      if (userName.length === 0 || secrets.length === 0) return;
      axios
         .put(
            "https://api.chatengine.io/users/",
            { userName, secrets },
            { headers: { "Private-key": process.env.PRIVATE_KEY } }
         )
         .then((r) => Router.push("/chats"));
   };

   return (
      <div className="background">
         <div className="auth-container">
            <form className="auth-form" onSubmit={onSubmit}>
               <div className="auth-title">Chat App</div>
               <div className="input-container">
                  <input
                     type="text"
                     placeholder="Email"
                     className="text-input"
                     onChange={(e) => setUserName(e.target.value)}
                  />
                  <input
                     type="password"
                     placeholder="Password"
                     className="text-input"
                     onChange={(e) => setSecret(e.target.value)}
                  />
                  <button type="submit" className="submit-button">
                     Login / Sign Up
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}
