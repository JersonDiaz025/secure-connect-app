import { stateAuth } from "../store/stateAuth";
import { Dashboard, Title, Loader } from "../components";

const DashboardPage = () => {
  const isLoading = stateAuth((state) => state.isLoading);
  return (
    <div>
      {isLoading && <Loader />}
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
