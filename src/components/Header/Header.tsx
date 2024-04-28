import { Title, Button } from "../index";
import { menuItems } from "./menuItems";
import { Link } from "react-router-dom";
import useAuthForm from "../../hooks/auth/useAuth";
import { AppRoutes } from "../../constants/routes";
import { MenuItem } from "../../interfaces/menuItems.interface";

const Header = ({ nameUser }: { nameUser: string }): JSX.Element => {
  const { handleLogout } = useAuthForm();

  return (
    <div className="bg-gray-800 p-1 sm:p-4">
      <div className="mx-auto flex justify-between items-center gap-3 sm:gap-0 flex-wrap">
        <div className="flex items-center flex-wrap flex-col sm:flex-row">
          <Link to={AppRoutes.HOME}>
            <Title
              title="Secure connect"
              styles="text-red-500 italic font-extrabold text-xl sm:m-0 sm:mr-0 mr-0 sm:mr-4"
            />
          </Link>
          <nav className="gap-0 sm:gap-4 flex rounded px-2 py-1">
            {menuItems.map(({ label, href, id }: MenuItem) => (
              <Link to={href} key={id}>
                <span className="underline text-white px-2 py-1 font-semibold">
                  {label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex italic items-center flex-wrap justify-end flex-col sm:flex-row">
          <div className="flex gap-2">
            <Title title="Hello," styles="text-white font-extrabold" />
            <h4 className="text-white font-extrabold  mr-1 sm:mr-4">
              {nameUser ? nameUser : ""}
            </h4>
          </div>
          <div className="pt-1">
            <Button
              text="Logout"
              styles="text-white font-semibold bg-red-500 hover:bg-blue-600 py-1 px-2 sm:py-2 rounded"
              type="button"
              onClick={handleLogout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
