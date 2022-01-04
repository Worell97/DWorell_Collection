// import App from 'next/app'
import '../global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}