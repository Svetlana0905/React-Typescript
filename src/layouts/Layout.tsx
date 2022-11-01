import { Outlet } from "react-router-dom";
import { SideNav } from "../components/navigation/SideNav";
import { BottomMenu } from "../components/ui/header/bottomMenu/BottomMenu";
import { TopMenu } from "../components/ui/header/topMenu/TopMenu";
import navigationConfig from "../config/NavigationConfig";
import { headerTopNavTree } from "../config/headerTopMenuConfig";
import { useAppSelector } from "../hook";

export const Layout: React.FC = () => {
  const { message } = useAppSelector((state) => state.product);
  return (
    <>
      <TopMenu props={headerTopNavTree} />
      <BottomMenu />

      <div className="flex flex-row justify-between w-full h-full min-h-screen">
        <SideNav props={navigationConfig} />
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
    </>
  );
};
