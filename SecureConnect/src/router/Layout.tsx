import { Suspense } from "react";
import userStore from "../store/user";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

const Layout = () => {
  const nameUser = userStore((state) => state.nameUser);
  return (
    <>
      <Header nameUser={nameUser} />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
