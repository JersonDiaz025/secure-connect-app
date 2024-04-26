import { AuthData } from "../../interfaces/AuthData";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../../graphql/mutations/login.mutation";
import { REGISTER_MUTATION } from "../../graphql/mutations/register.mutation";
import { TOKEN_USER_KEY } from "../../constants/tokenKey";
import userStore from "../../store/user";
import { getAuthToken, saveAuthToken } from "../../utils/tokenHelper";
import { SetIsAuthenticated, DataUser } from "../../types/user";
import { toast } from "react-toastify";
import { AppRoutes } from "../../constants/routes";

const AuthForm = () => {
  const [register] = useMutation(REGISTER_MUTATION);
  const [login] = useMutation(LOGIN_MUTATION);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setIsAuthenticated = userStore(
    (state) => state.setIsAuthenticated
  ) as SetIsAuthenticated;
  const navigate = useNavigate();

  const handleRegisterSubmit = async (values: AuthData) => {
    try {
      const { data } = await register({
        variables: {
          data: {
            email: values.email,
            firstname: values.firstName,
            password: values.password,
            password_confirmation: values.confirmPass,
          },
        },
      });

      toast.success(`Hola ${data.firstName} has logrado un registro exitoso!`, {
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

  const handleLoginSubmit = async (values: AuthData) => {
    try {
      const { data } = await login({
        variables: {
          data: {
            email: values.email,
            password: values.password,
          },
        },
      });
      if (data && data.login) {
        const dataUser: DataUser = {
          name: values.firstName,
          email: values.email,
          token: data.login.token,
        };
        saveAuthToken(dataUser);
        const infoUser = getAuthToken();
        if (infoUser !== null) {
          navigate(AppRoutes.HOME);
          const parserInfo = JSON.parse(infoUser);
          setIsAuthenticated(parserInfo.token);
        }
      }
      toast.success("Inicio de sesión exitoso", {
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

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_USER_KEY);
    setIsAuthenticated(false);
    navigate(AppRoutes.LOGIN);
  };

  return { handleRegisterSubmit, handleLoginSubmit, handleLogout };
};

export default AuthForm;
