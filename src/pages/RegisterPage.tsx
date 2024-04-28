import { Register, Loader } from "../components";
import { stateAuth } from "../store/stateAuth";

const RegisterPage = () => {
  const isLoading = stateAuth((state) => state.isLoading);
  return (
    <div>
      {isLoading && <Loader />}
      <Register />
    </div>
  );
};

export default RegisterPage;
