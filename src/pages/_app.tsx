import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function TypesTableApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>IvanCity</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
