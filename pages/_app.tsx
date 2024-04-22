import "../styles/css/main.css"
import "@/styles/globals.css"

import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { client } from "@/services/ApolloClient"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
