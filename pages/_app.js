import "../styles/scss/style.scss";
import Layout from "../layout/Layout";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { SessionProvider } from "next-auth/react"


const client = new ApolloClient({
  uri: "http://localhost:3000/graphql/",
  cache: new InMemoryCache()
});

function MyApp({ Component,
  pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
    <ApolloProvider client={client}>
      <Layout>
      <Component {...pageProps} />
    </Layout>

   
    </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
