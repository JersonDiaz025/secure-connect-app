import { Button } from "../index";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { FormItems } from "../../types/FormItems";
import useAuthForm from "../../hooks/auth/useAuth";
import { validationSchema, initialValues } from "./formSchema";
import { AuthData } from "../../interfaces/authData.interface";

const Form = (props: FormItems & { isLogin?: boolean }) => {
  const {
    placeholderEmail,
    placeholderFirstName,
    placeholderPass,
    typeValueEmail,
    typeFirstname,
    placeholderConfirmPass,
    idFieldEmail,
    idFieldFirstname,
    idFieldPass,
    idFieldConfirmPass,
    typePass,
    buttonText,
    linkText,
    actionRoute,
    infoText,
    isLogin,
  } = props;

  const { handleRegisterSubmit, handleLoginSubmit } = useAuthForm();
  //Handling the case of context-dependent user action functions
  const submitHandler = isLogin ? handleLoginSubmit : handleRegisterSubmit;

  // Formik method config
  const formik = useFormik<AuthData>({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: submitHandler,
  });

  return (
    <form className="flex flex-col" onSubmit={formik.handleSubmit}>
      <input
        id={idFieldEmail}
        value={formik.values.email}
        placeholder={placeholderEmail}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        type={typeValueEmail}
      />
      {formik.touched.email && formik.errors.email && (
        <div className="text-red-500">{formik.errors.email}</div>
      )}
      <input
        id={idFieldFirstname}
        value={formik.values.firstname}
        placeholder={placeholderFirstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        type={typeFirstname}
      />
      {formik.touched.firstname && formik.errors.firstname && (
        <div className="text-red-500">{formik.errors.firstname}</div>
      )}
      <input
        id={idFieldPass}
        value={formik.values.password}
        placeholder={placeholderPass}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        type={typePass}
      />
      {formik.touched.password && formik.errors.password && (
        <div className="text-red-500">{formik.errors.password}</div>
      )}
      <input
        id={idFieldConfirmPass}
        value={formik.values.confirmPass}
        placeholder={placeholderConfirmPass}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
        type={typePass}
      />
      {formik.touched.confirmPass && formik.errors.confirmPass && (
        <div className="text-red-500">{formik.errors.confirmPass}</div>
      )}
      <div className="flex ml-4 mr-4 gap-1 items-center justify-between flex-wrap">
        <p className="text-white flex gap-2 mt-4 mr-4">
          {infoText}
          <Link to={actionRoute}>
            <span className="text-sm text-blue-500 underline mt-4">
              {linkText}
            </span>
          </Link>
        </p>
      </div>
      <Button
        type="submit"
        text={buttonText}
        styles="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
        disabled={!formik.isValid}
      />
    </form>
  );
};

export default Form;
