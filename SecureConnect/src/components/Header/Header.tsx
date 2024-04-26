import AuthForm from "../../hooks/auth/useAuth";
import Title from "../Title/Title";
import userStore from "../../store/user";

const Header = () => {
  const { handleLogout } = AuthForm();
  const nameUser: string = userStore((state) => state.nameUser);

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="mx-auto flex justify-between items-center">
          <div>
            <Title
              title="Secure connect"
              styles="text-white font-extrabold text-xl sm:m-0 sm:mr-0 mr-0 sm:mr-4"
            />
          </div>
          <div className="flex items-center flex-wrap justify-end">
            <div className="flex gap-2">
              <Title title="Hello," styles="text-white font-extralight" />
              <h4 className="text-white font-semibold mr-4">
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
      </nav>
    </div>
  );
};

export default Header;
