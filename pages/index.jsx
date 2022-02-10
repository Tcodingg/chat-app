import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Context } from "../context";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Auth() {
   const { userName, setUserName, secrets, setSecret } = useContext(Context);
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
