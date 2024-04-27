import KanvasCore, { genericAuthMiddleware } from "@kanvas/core";
import { GRAPHQL_API_URL, API_KEY } from "../constants/api";
import { getAuthToken } from "../utils/tokenHelper";

// Function to retrieve the authentication token from cookies
const getKey = async () => {
  const infoUser = getAuthToken();
  if (infoUser !== null) {
    const parserInfo = JSON.parse(infoUser);
    return parserInfo.token;
  }
};

// Initialize Kanvas Core
export const client = new KanvasCore({
  url: GRAPHQL_API_URL,
  key: API_KEY,
  middlewares: [genericAuthMiddleware(getKey)],
});
