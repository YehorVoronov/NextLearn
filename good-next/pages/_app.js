import '../styles/globals.css'
import HeaderFooter from "./headerFooter";
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }) {
  return(
      <SessionProvider session={pageProps.session}>
      <HeaderFooter ><Component {...pageProps} /></HeaderFooter>
      </SessionProvider>
  )}
