import { ContextProvider } from "../context";
import "../styles/index.css";
import "../styles/auth.css";

function MyApp({ Component, pageProps }) {
   return (
      <ContextProvider>
         <Component {...pageProps} />
      </ContextProvider>
   );
}

export default MyApp;
