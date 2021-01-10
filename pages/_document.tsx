import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import { theme } from '../utils/theme'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <html lang="en">
          <Head>
            {/* PWA primary color */}
            <meta name="theme-color" content={theme.color.primary} />
            <link rel="icon" href="/images/favicon.png" type="image/png" />
            <link
              href="https://fonts.googleapis.com/css?family=Caveat&display=swap"
              rel="stylesheet"
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </html>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  }
}

export default MyDocument
