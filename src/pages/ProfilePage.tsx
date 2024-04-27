import { Profile, Title } from "../components";

const ProfilePage = () => {
  return (
    <div className="p-2 sm:p-7">
      <div className="w-full p-5">
        <Title
          title={"Profile"}
          styles={"text-gray-800 font-extrabold text-xl"}
        />
      </div>
      <Profile />
    </div>
  );
};

export default ProfilePage;
