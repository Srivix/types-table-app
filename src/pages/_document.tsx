import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'
import { resetServerContext } from 'react-beautiful-dnd'
type Props = {}

class TypesTableAppDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    resetServerContext()
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='es'>
        <Head>
          <link rel='wolf' href='/favicon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default TypesTableAppDocument
