import { AuthData } from "../../interfaces/AuthData";
import { useNavigate } from "react-router-dom";
import { TOKEN_USER_KEY } from "../../constants/tokenKey";
import userStore from "../../store/user";
import { getAuthToken, saveAuthToken } from "../../utils/tokenHelper";
import { SetIsAuthenticated, DataUser } from "../../types/user";
import { toast } from "react-toastify";
import { AppRoutes } from "../../constants/routes";
import { client } from "../../services/kanvasService";

/**
 * Authentication form component.
 * Handles user registration, login, and logout.
 * @returns Functions for handling registration, login, and logout.
 */
const useAuthForm = () => {
  const setIsAuthenticated = userStore(
    (state) => state.setIsAuthenticated
  ) as SetIsAuthenticated;
  const navigate = useNavigate();

  /**
   * Handles registration form submission.
   * @param values - Registration form values.
   */
  const handleRegisterSubmit = async (values: AuthData) => {
    const { email, firstName, password, confirmPass } = values;
    try {
      const dataUser = await client.users.register({
        email,
        firstname: firstName,
        password,
        password_confirmation: confirmPass,
      });
      // Check if registration was successful
      if (
        dataUser &&
        dataUser.register &&
        dataUser.register.token &&
        dataUser.register.user
      ) {
        const token = dataUser.register.token.token;
        const displayname = dataUser.register.user.displayname;

        if (displayname && token) {
          toast.success(
            `Hello ${displayname} you have successfully logged in.!`,
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
    try {
      const user = await client.auth.login(email, password);
      if (user && user.token) {
        const dataUser: DataUser = {
          name: values.firstName,
          email: values.email,
          token: user.token,
        };
        saveAuthToken(dataUser);
        const infoUser = getAuthToken();
        if (infoUser !== null) {
          navigate(AppRoutes.HOME);
          const parserInfo = JSON.parse(infoUser);
          setIsAuthenticated(parserInfo.token);
        }
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
