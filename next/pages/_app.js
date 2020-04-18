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
     
     <meta charset='utf-8' />
      <meta http-equiv="content-language" content="en-us" />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes' />
      <meta name='description' content='Description' />
      <meta name='keywords' content='Keywords' />
      <title>Stagetime</title>

      <link rel='manifest' href='/manifest.json' />
      <link href='./public/favicons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
      <link href='./public/favicons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
      <link rel='apple-touch-icon' href='/apple-icon.png'></link>
      <meta name='theme-color' content='#fde56e' />


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