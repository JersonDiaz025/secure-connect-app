import KanvasCore, { genericAuthMiddleware } from "@kanvas/core";
import { GRAPHQL_API_URL, API_KEY } from "../constants/api";

// Function to retrieve the authentication token from cookies
export function handleClient(token: string) {
  const getKey = async (): Promise<string | null | undefined> => {
    try {
      if (token) {
        return token || null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Initialize Kanvas Core
  return new KanvasCore({
    url: GRAPHQL_API_URL,
    key: API_KEY,
    middlewares: [genericAuthMiddleware(getKey)],
  });
}
