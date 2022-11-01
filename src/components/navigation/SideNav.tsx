import { Link } from "react-router-dom";
import { INavLinks, ISub } from "../../types/types";

interface ProductProps {
  props: Array<INavLinks<ISub>>;
}

export const SideNav: React.FC<ProductProps> = ({ props }) => {
  return (
    <nav className="flex flex-col gap-5 w-60 pl-3 pt-4 bg-gray-100 min-h-full shadow-sky-800/50 shadow-md hover:shadow-xl hover:shadow-sky-900/50">
      {props.map((menu) =>
        menu.submenu ? (
          <div key={menu.key}>
            <Link
              className="text-xl hover:font-medium text-sky-800 hover:text-slate-700 transition-all ease-in-out duration-200"
              to={menu?.path ? menu.path : ""}
            >
              {menu.title}
            </Link>
            <div>
              {menu.submenu.map((item) => (
                <p key={item.key} className="flex gap-2">
                  {item.icon}
                  <Link
                    className="hover:font-medium text-sky-800/90 hover:text-slate-700 transition-all ease-in-out duration-200"
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </nav>
  );
};
