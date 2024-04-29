import { useState } from "react";
import { menuItems } from "./menuItems";
import { Link } from "react-router-dom";
import { Title, Button } from "../index";
import useAuthForm from "../../hooks/auth/useAuth";
import { AppRoutes } from "../../constants/routes";
import { MenuItem } from "../../interfaces/menuItems.interface";

const Header = ({ nameUser }: { nameUser: string }): JSX.Element => {
  const { handleLogout } = useAuthForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(!isModalOpen);
  };

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
        <div onClick={handleClose} className="flex items-center relative">
          <div className="h-10 w-10  border-2 border-green-500  rounded-full overflow-hidden bg-gray-200 ">
            <span className="h-full w-full flex items-center justify-center text-gray-600 text-xl font-bold">
              {nameUser ? nameUser.charAt(0).toUpperCase() : ""}
            </span>
          </div>
        </div>
        {isModalOpen && (
          <div
            onClick={handleClose}
            className="absolute shadow-lg  italic p-4 top-16 right-4 w-64 h-36 flex flex-col justify-between bg-slate-200 rounded-md"
          >
            <div className="flex gap-1 ">
              <Title title="Hello," styles="font-extrabold" />
              <h4 className="font-extrabold  mr-1 sm:mr-4">
                {nameUser ? nameUser : ""}
              </h4>
            </div>
            <div className="pt-1 flex flex-col gap-2 border-t border-gray-400">
              <Link to={AppRoutes.PROFILE} onClick={handleClose}>
                <Title
                  title="Profile"
                  styles="border-b border-gray-400 font-semibold"
                />
              </Link>
              <Button
                text="Logout"
                styles="text-white w-full font-semibold bg-red-500  py-1 px-2 sm:py-2 rounded"
                type="button"
                onClick={() => {
                  handleLogout(), handleClose;
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
