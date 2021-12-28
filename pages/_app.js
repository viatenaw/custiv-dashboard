import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme';
import { CssBaseline } from '@mui/material';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300&display=swap" rel="stylesheet"/>
      </Head>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
  )

}

export default MyApp
