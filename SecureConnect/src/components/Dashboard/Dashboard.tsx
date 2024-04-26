import Header from "../Header/Header";
import Title from "../Title/Title";

const Dashboard = () => {
  return (
    <section>
      <Header />
      <div className="w-full p-5">
        <Title
          title={"Dashboard"}
          styles={"text-gray-800 font-extrabold text-xl"}
        />
      </div>
      <div className="w-full bg-white p-2 sm:p-7">
        <div className="w-full bg-gray-100 rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md">
          <Title
            title="Active user information"
            styles="text-lg font-bold font-sans"
          />
          <div className="py-3 g-5 flex flex-col border-t border-gray-400">
            <h2 className="text-blue-600 text-sm font-bold">
              Identification: <span className="text-red-400">8425943</span>
            </h2>
            <h2 className="text-blue-600 text-sm font-bold">
              Name: <span className="text-red-400">Jerson</span>
            </h2>
            <h2 className="text-blue-600 text-sm font-bold">
              E-mail: <span className="text-red-400">Jerson</span>
            </h2>
            <h2 className="text-blue-600 text-sm font-bold">
              Name: <span className="text-red-400">Jerson</span>
            </h2>
          </div>
          <div className="flex justify-between"></div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
