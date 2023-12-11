import { CssBaseline } from '@mui/material'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function TypesTableApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokemon Types</title>
      </Head>
      <CssBaseline />
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  )
}
