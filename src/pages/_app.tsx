import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function TypesTableApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IvanCity</title>
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}
