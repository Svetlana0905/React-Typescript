import { Outlet } from "react-router-dom";
import { Navigation } from "../components/layout-components/Navigation";
import { SideNav } from "../components/navigation/SideNav";
export const Layout = () => {
  return (
    <>
      <Navigation />
      <div className="flex flex-row justify-between w-full">
        <SideNav />
        <main className="w-full">
          <Outlet></Outlet>;
        </main>
      </div>
    </>
  );
};
