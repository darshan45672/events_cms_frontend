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
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
      <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
   
    </ApolloProvider>
  );
}

export default MyApp;
