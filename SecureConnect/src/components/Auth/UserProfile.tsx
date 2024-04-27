import useGetInfoUser from "../../hooks/useGetInfoUser";
const UserProfile = () => {
  const { dataUser } = useGetInfoUser();
  return (
    <div className="w-full bg-gray-100 rounded-lg border-t-8 border-blue-400 px-4 py-5 flex flex-col justify-around shadow-md">
      <div className="py-9 gap-4 flex text-sm flex-col border-t border-gray-400">
        <div className="flex items-cente">
          <div className="w-96 rounded-lg border-2 border-blue-400 bg-transparent p-4 text-center shadow-lg bg-gray-400">
            <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                fill="currentColor"
                className="bi bi-person-fill "
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
              </svg>
            </figure>
            <h2 className="mt-4 text-xl font-bold text-indigo-600 ">
              {dataUser.firstname}
            </h2>
            <p className="mb-4 text-gray-600 ">
              I am <span className="font-bold">{dataUser.firstname}</span> an
              active user of Secure connect app, my pleasure.
            </p>
            <div className="mb-4 text-gray-600 flex flex-col gap-1">
              <label className="text-left text-slate-950 font-bold">ID</label>
              <span className="font-bold border-2 p-2 rounded">
                {dataUser.id}
              </span>
            </div>
            <div className="mb-4 text-gray-600 flex flex-col gap-1">
              <label className="text-left text-slate-950 font-bold">
                First name
              </label>
              <span className="font-bold border-2 p-2 rounded">
                {dataUser.firstname}
              </span>
            </div>
            <div className="mb-4 text-gray-600 flex flex-col gap-1">
              <label className="text-left text-slate-950 font-bold">
                E-mail
              </label>
              <span className="font-bold border-2 p-2 rounded">
                {dataUser.email}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between"></div>
    </div>
  );
};

export default UserProfile;
