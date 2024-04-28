import { Login, Loader } from "../components";
import { stateAuth } from "../store/stateAuth";

const LoginPage = () => {
  const isLoading = stateAuth((state) => state.isLoading);
  return (
    <div>
      {isLoading && <Loader />}
      <Login />
    </div>
  );
};

export default LoginPage;
