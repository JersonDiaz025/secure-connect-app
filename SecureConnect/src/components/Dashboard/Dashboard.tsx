import Header from "../Header/Header";
import Title from "../Title/Title";

const Dashboard = () => {
  return (
    <section>
      <Header />
      <div className="w-full p-5">
        <Title title={"Dashboard"} styles={"text-gray-800 font-extrabold text-xl"} />
      </div>
      <div className="w-full bg-white p-2 sm:p-7">
        <div className="w-full bg-gray-100 rounded-b-lg border-t-8 border-green-400 px-4 py-5 flex flex-col justify-around shadow-md">
          <p className="text-lg font-bold font-sans">Active user information</p>
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
          <div className="flex justify-between">
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
