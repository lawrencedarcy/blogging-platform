// import App from 'next/app'
import './styles.css';
import Head from 'next/head';
import App from 'next/app';
import NavBar from '../components/NavBar/NavBar';
import 'react-quill/dist/quill.snow.css';

import { Auth0Provider } from 'use-auth0-hooks';



function MyApp({ Component, pageProps }) {

  return (   
    <div>
     <Head>
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />
     </Head>
     <NavBar />
     <Auth0Provider
     domain={'dev-yf8xdikq.eu.auth0.com'}
     clientId={'k6MOcu2j7WVg5ZfForZqdq6RVVIwyNpm'}
     redirectUri={'http://localhost:3000'}>
     
    <Component {...pageProps} />
    </Auth0Provider>
  </div>
    
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp