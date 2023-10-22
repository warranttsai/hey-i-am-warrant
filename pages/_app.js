/* This is the initialising  component. The global css could be used in this component */
import "../styles/Home.module.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
