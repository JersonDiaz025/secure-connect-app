import userStore from "../../store/user";
import { getAuthToken } from "../../utils/tokenHelper";

//Hook to verify auth user in app and set name user
const useCheckAuth = () => {
  const isAuthenticated = userStore((state) => state.isAuthenticated);
  const setIsAuthenticated = userStore((state) => state.setIsAuthenticated);
  const setNameUser = userStore((state) => state.setNameUser);

  const infoUser = getAuthToken();
  if (infoUser !== null) {
    const parserInfo = JSON.parse(infoUser);
    setNameUser(parserInfo.name);
    setIsAuthenticated(true);
  }

  return { isAuthenticated };
};

export default useCheckAuth;
