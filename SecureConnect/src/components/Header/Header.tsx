import { Link } from "react-router-dom";
import useAuthForm from "../../hooks/auth/useAuth";
import Title from "../Title/Title";
import { AppRoutes } from "../../constants/routes";

const Header = ({ nameUser }: { nameUser: string }): JSX.Element => {
  const { handleLogout } = useAuthForm();

  return (
    <div className="bg-gray-800 p-4">
      <div className="mx-auto flex justify-between items-center gap-3 sm:gap-0 flex-wrap">
        <div className="flex items-center flex-wrap">
          <Link to={AppRoutes.HOME}>
            <Title
              title="Secure connect"
              styles="text-red-500 italic font-extrabold text-xl sm:m-0 sm:mr-0 mr-0 sm:mr-4"
            />
          </Link>
          <nav className="gap-4 flex bg-slate-300 rounded px-2 py-1">
            <Link to={AppRoutes.PROFILE}>
              <span className=" underline rounded px-2 py-1  font-semibold">
                Profile
              </span>
            </Link>
            <Link to={AppRoutes.HOME}>
              <span className="underline rounded px-2 py-1  font-semibold">
                Home
              </span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center flex-wrap justify-end">
          <div className="flex gap-2">
            <Title title="Hello," styles="text-white font-extralight italic" />
            <h4 className="text-white font-semibold  mr-4">
              {nameUser ? nameUser : ""}
            </h4>
          </div>
          <button
            className="text-white font-semibold bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
