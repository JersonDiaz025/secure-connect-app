import { Title } from "../index";
import useGetInfoUser from "../../hooks/useGetInfoUser";

const Dashboard = () => {
  const { dataUser } = useGetInfoUser();

  return (
    <div className="w-full bg-white p-2 sm:p-7">
      <div className="w-full bg-gray-100 rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md">
        <Title
          title="Active user information"
          styles="text-lg font-bold font-sans"
        />
        <div className="py-9 gap-4 flex text-sm flex-col border-t border-gray-400">
          <h2 className="text-blue-600 sm:text-lg font-bold">
            Identification: <span className="text-red-400">{dataUser.id}</span>
          </h2>
          <h2 className="text-blue-600 text-sm sm:text-lg font-bold">
            Name: <span className="text-red-400">{dataUser.firstname}</span>
          </h2>
          <h2 className="text-blue-600 text-sm sm:text-lg font-bold">
            E-mail: <span className="text-red-400">{dataUser.email}</span>
          </h2>
        </div>
        <div className="flex justify-between"></div>
      </div>
    </div>
  );
};

export default Dashboard;
