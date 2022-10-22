import navigationConfig from "../../config/NavigationConfig";
// import { IProduct } from "../../types/types";

export const SideNav = () => {
  return (
    <div className="flex flex-col gap-5 w-60 pl-3 pt-4 bg-gray-100 min-h-full drop-shadow-gray-300 drop-shadow-md hover:shadow-xl ">
      {navigationConfig.map((menu) =>
        menu.submenu.length > 0 ? (
          <div key={menu.key}>
            <p className="text-xl"> {menu.title}</p>
            <div>
              {menu.submenu.map((item) => (
                <p key={item.key} className="flex gap-2">
                  {item.icon}
                  <span>{item.title}</span>
                </p>
              ))}
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};
