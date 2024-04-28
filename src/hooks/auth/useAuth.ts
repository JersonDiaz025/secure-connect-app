import { toast } from "react-toastify";
import userStore from "../../store/user";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../constants/routes";
import { AuthData } from "../../interfaces/authData.interface";
import { handleClient } from "../../services/kanvasService";
import { TOKEN_USER_KEY } from "../../constants/tokenKey";
import { SetIsAuthenticated, DataUser } from "../../types/user.type";
import { useLocalstorage } from "../useLocalstorage";
import { stateAuth } from "../../store/stateAuth";
//import { getAuthToken, saveAuthToken } from "../../utils/tokenHelper";

/**
 * Authentication form component.
 * Handles user registration, login, and logout.
 * @returns Functions for handling registration, login, and logout.
 */
const useAuthForm = () => {
  const navigate = useNavigate();
  const setIsAuthenticated = userStore(
    (state) => state.setIsAuthenticated
  ) as SetIsAuthenticated;
  const setIsLoading = stateAuth((state) => state.setIsLoading);
  const [storedValue, setStoredValue] = useLocalstorage(TOKEN_USER_KEY, "");
  const client = handleClient(storedValue ? storedValue.token : "");

  /**
   * Handles registration form submission.
   * @param values - Registration form values.
   */
  const handleRegisterSubmit = async (values: AuthData) => {
    const { email, firstname, password, confirmPass } = values;
    setIsLoading(true);
    try {
      const dataUser = await client.users.register({
        email: email,
        firstname: firstname,
        password: password,
        password_confirmation: confirmPass,
        lastname: "",
      });
      // Check if registration was successful
      const registerData = (dataUser as any).register;
      if (dataUser && registerData.user) {
        const token = registerData.token.token;
        const displayname = registerData.user.displayname;
        setIsLoading(false);

        if (displayname && token) {
          toast.success(
            `Hello ${displayname} you have successfully logged in!`,
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
          navigate(AppRoutes.LOGIN);
        }
      }
    } catch (error) {
      const errorMsg: string | unknown = (error as Error).message;
      toast.error(`${errorMsg}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  /**
   * Handles login form submission.
   * @param values - Login form values.
   */
  const handleLoginSubmit = async (values: AuthData) => {
    const { email, password } = values;
    setIsLoading(true);
    try {
      const user = await client.auth.login(email, password);
      if (user && user.token) {
        setIsLoading(false);
        const dataUser: DataUser = {
          name: values.firstname,
          email: values.email,
          token: user.token,
          firstname: "",
        };
        setStoredValue(dataUser);
        setIsAuthenticated(true);
        navigate(AppRoutes.HOME);
      }
      toast.success("Successful login", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      const errorMsg: string | unknown = (error as Error).message;
      toast.error(`${errorMsg}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  /**
   * Handles logout action.
   */
  const handleLogout = () => {
    localStorage.removeItem(TOKEN_USER_KEY);
    setIsAuthenticated(false);
    navigate(AppRoutes.LOGIN);
  };

  return { handleRegisterSubmit, handleLoginSubmit, handleLogout };
};

export default useAuthForm;
