import { ContextProvider } from "../context";
import "../styles/auth.css";

function MyApp({ Component, pageProps }) {
   return (
      <ContextProvider>
         <Component {...pageProps} />
      </ContextProvider>
   );
}

export default MyApp;
