import "../styles/globals.css";
import "tailwindcss/tailwind.css";

// 要チェック!!
interface Prop {
  Component: any;
  pageProps: any;
}

function MyApp({ Component, pageProps }: Prop) {
  return <Component {...pageProps} />;
}

export default MyApp;
