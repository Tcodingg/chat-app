import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/index";

import dynamic from "next/dynamic";
const ChatEngine = dynamic(() =>
   import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
   import("react-chat-engine").then((module) => module.MessageFormSocial)
);

function Chats() {
   const { username, secret } = useContext(AuthContext);
   const [showCase, setShowCase] = useState(false);
   const router = useRouter();
   useEffect(() => {
      if (typeof document !== null) {
         setShowCase(true);
      }
   }, []);
   if (!showCase) return <div></div>;

   return (
      <div className="background">
         <div className="shadow">
            <ChatEngine
               height="calc(100vh - 300px)"
               projectID={process.env.processID}
               userName={username}
               userSecret={secret}
               renderNewMessageForm={() => <MessageFormSocial />}
            />
         </div>
      </div>
   );
}

export default Chats;
