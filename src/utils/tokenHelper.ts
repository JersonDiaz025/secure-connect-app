import { TOKEN_USER_KEY } from "../constants/tokenKey";
import { DataUser } from "../types/user.type";
// Function to save token
export const saveAuthToken = (dataUser: DataUser) => {
  const userDataString = JSON.stringify(dataUser);
  localStorage.setItem(TOKEN_USER_KEY, userDataString);
};

// Get token from local store
export const getAuthToken = (): string | null => {
  const info = localStorage.getItem(TOKEN_USER_KEY);
  return info !== null ? info : null;
};

// Delete token function
export const removeAuthToken = () => {
  localStorage.removeItem(TOKEN_USER_KEY);
};
