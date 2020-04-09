// import App from 'next/app'
import './styles.css';
import Head from 'next/head';
import App, { Container } from 'next/app';
import NavBar from '../components/NavBar/NavBar';
import 'react-quill/dist/quill.snow.css';


function MyApp({ Component, pageProps }) {

  return (    <Container>
     <Head>
     <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&display=swap" rel="stylesheet" />
       
     </Head>
     <NavBar />
    <Component {...pageProps} />
    </Container>
    
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