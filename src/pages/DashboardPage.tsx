import { Dashboard, Title } from "../components";

const DashboardPage = () => {
  return (
    <div>
      <div className="w-full p-5">
        <Title
          title={"Dashboard"}
          styles={"text-gray-800 font-extrabold text-xl"}
        />
      </div>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
