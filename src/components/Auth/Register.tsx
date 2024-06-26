import { AppRoutes } from "../../constants/routes";
import { Title, Form } from "../index";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-80 sm:max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <div>
          <Title
            title="Register"
            styles="text-2xl font-bold text-gray-200 mb-4"
          />
          <Form
            type="register"
            idFieldEmail="email"
            idFieldFirstname="firstname"
            idFieldPass="password"
            idFieldConfirmPass="confirmPass"
            placeholderEmail="Email address"
            placeholderFirstName="Firstname"
            placeholderPass="Password"
            typeValueEmail="email"
            typeFirstname="text"
            placeholderConfirmPass="Confirm password"
            typePass="password"
            buttonText="Sign up"
            linkText="Sign In"
            actionRoute={AppRoutes.LOGIN}
            infoText="Already have an account?"
            isLogin={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
