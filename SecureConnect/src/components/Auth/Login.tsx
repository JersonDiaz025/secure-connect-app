import { Form, Title } from "../index";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
        <div>
          <Title title="Login" styles="text-2xl font-bold text-gray-200 mb-4" />
          <Form
            type="login"
            idFieldEmail="email"
            idFieldFirstname="firstName"
            idFieldPass="password"
            idFieldConfirmPass="confirmPass"
            placeholderEmail="Email address"
            placeholderFirstName="Firstname"
            placeholderPass="Password"
            typeValueEmail="email"
            typeFirstname="text"
            placeholderConfirmPass="Confirm password"
            typePass="password"
            buttonText="Login"
            linkText=" Signup"
            actionRoute="/register"
            infoText="Don't have an account"
            isLogin={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
