import KanvasCore, { genericAuthMiddleware } from "@kanvas/core";
import { GRAPHQL_API_URL, API_KEY } from "../constants/api";

// Function to retrieve the authentication token from cookies
const getKey = async (): Promise<string | null> => {
  return localStorage.getItem("token") || null; // wherever you have saved the user token
};

// Initialize Kanvas Core
export const client = new KanvasCore({
  url: GRAPHQL_API_URL,
  key: API_KEY,
  middlewares: [genericAuthMiddleware(getKey)],
});
