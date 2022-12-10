import { Outlet } from "react-router-dom";
import { SideNav } from "../components/navigation/SideNav";
import { Header } from "../components/ui/header/Header";
import navSidebarConfig from "../config/navSidebarConfig";
import { useAppSelector } from "../hook";

export const Layout: React.FC = () => {
  const { message } = useAppSelector((state) => state.product);
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <div className="flex flex-row justify-between w-full grow  shrink-0">
        <SideNav props={navSidebarConfig} />
        <main className="w-full">
          <div
            className={
              message
                ? "fixed bg-green-600 w-full font-serif font-medium text-center text-white py-3 z-10"
                : ""
            }
          >
            {message}
          </div>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};
