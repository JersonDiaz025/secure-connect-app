import { TOKEN_USER_KEY } from "../../constants/tokenKey";
import userStore from "../../store/user";
import { useLocalstorage } from "../useLocalstorage";

//Hook to verify auth user in app and set name user
const useCheckAuth = () => {
  const isAuthenticated: boolean = userStore((state) => state.isAuthenticated);
  const setIsAuthenticated = userStore((state) => state.setIsAuthenticated);
  const setNameUser = userStore((state) => state.setNameUser);
  const [storedValue] = useLocalstorage(TOKEN_USER_KEY, "");

  if (storedValue && storedValue.token) {
    setNameUser(storedValue.name);
    setIsAuthenticated(true);
  }

  return { isAuthenticated };
};

export default useCheckAuth;
