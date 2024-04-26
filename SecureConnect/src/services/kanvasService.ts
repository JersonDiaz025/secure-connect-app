import KanvasCore, { genericAuthMiddleware } from "@kanvas/core";
import { GRAPHQL_API_URL, API_KEY } from "../constants/api";
import { TOKEN_USER_KEY } from "../constants/tokenKey";

// Function to retrieve the authentication token from cookies
const getKey = async (): Promise<string | null> => {
  return localStorage.getItem(TOKEN_USER_KEY) || null; 
};

// Initialize Kanvas Core
export const client = new KanvasCore({
  url: GRAPHQL_API_URL,
  key: API_KEY,
  middlewares: [genericAuthMiddleware(getKey)],
});
