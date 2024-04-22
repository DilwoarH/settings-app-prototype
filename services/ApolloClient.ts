import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"

export const createApolloClient = (authToken: string) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.HASURA_URL,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }),
    cache: new InMemoryCache(),
  })
}

export const client = createApolloClient(process.env.HASURA_TOKEN as string)
