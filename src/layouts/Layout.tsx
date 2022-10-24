import { Outlet } from "react-router-dom";
import { Navigation } from "../components/layout-components/Navigation";
import { SideNav } from "../components/navigation/SideNav";
import navigationConfig from "../config/NavigationConfig";
import { useAppSelector } from "../hook";

export const Layout: React.FC = () => {
  const { message } = useAppSelector((state) => state.product);
  return (
    <>
      <Navigation />
      <div className="flex flex-row justify-between w-full h-full min-h-screen">
        <SideNav props={navigationConfig} />
        <main className="w-full">
          <div className={message ? "bg-green-500 w-full" : ""}>{message}</div>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};
