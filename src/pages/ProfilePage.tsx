import { stateAuth } from "../store/stateAuth";
import { Profile, Title, Loader } from "../components";

const ProfilePage = () => {
  const isLoading = stateAuth((state) => state.isLoading);
  return (
    <>
      {isLoading && <Loader />}
      <div className="p-2 sm:p-7">
        <div className="w-full p-5">
          <Title
            title={"Profile"}
            styles={"text-gray-800 font-extrabold text-xl"}
          />
        </div>
        <Profile />
      </div>
    </>
  );
};

export default ProfilePage;
