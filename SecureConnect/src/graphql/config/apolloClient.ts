import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { GRAPHQL_API_URL } from "../../constants/api";

const apolloClient = new ApolloClient({
  uri: GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

export default apolloClient;
