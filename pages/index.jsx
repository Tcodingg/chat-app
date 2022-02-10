import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context";
import axios from "axios";

export default function Auth() {
   const { username, setUsername, secret, setSecret } = useContext(AuthContext);
   const router = useRouter();
   const onSubmit = (e) => {
      e.preventDefault();
      if (username.length === 0 || secret.length === 0) return;
      axios
         .put(
            "https://api.chatengine.io/users/",
            { username, secret },
            {
               headers: {
                  "PRIVATE-KEY": process.env.privateKey,
               },
            }
         )
         .then((r) => router.push("/chats"));
   };

   return (
      <div className="background">
         <div className="auth-container">
            <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
               <div className="auth-title">Chat App</div>
               <div className="input-container">
                  <input
                     type="text"
                     placeholder="Email"
                     className="text-input"
                     onChange={(e) => setUsername(e.target.value)}
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
