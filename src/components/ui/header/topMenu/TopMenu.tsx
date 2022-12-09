import "./topMenu.scss";
import { IHeaderTopMenu } from "../../../../types/types";
import { splitString } from "../../../../hook/splitString";
import logo from "../../../../assets/icons/logo.svg";

interface TopMenuProps {
  props: IHeaderTopMenu[];
}

export const TopMenu: React.FC<TopMenuProps> = ({ props }) => {
  return (
    <div
      className="z-40 flex flex-row justify-between flex justify-between px-10 bg-gray-400 
    items-center text-gray-900 "
    >
      <p className="py-4">
        <a href="">
          <img
            src={logo}
            alt="link for home page. logotype"
            className="w-[56px]"
          />
        </a>
      </p>
      <p className="flex flex-row gap-12 pr-8">
        {props?.length &&
          props.map((item) => (
            <a
              key={item.key}
              className={item.styleLink}
              href={splitString(item.path) ? splitString(item.path) : "#"}
            >
              {item.title}
            </a>
          ))}
      </p>
    </div>
  );
};
