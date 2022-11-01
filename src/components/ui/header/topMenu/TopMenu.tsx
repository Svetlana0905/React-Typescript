import "./topMenu.scss";
import { IHeaderTopMenu } from "../../../../types/types";
import { splitString } from "../../../../hook/splitString";

interface TopMenuProps {
  props: IHeaderTopMenu[];
}

export const TopMenu: React.FC<TopMenuProps> = ({ props }) => {
  return (
    <div
      className="z-40 flex flex-row justify-between h-[50px] flex justify-between px-5 bg-gray-400 
    items-center text-gray-900 "
    >
      <p className="flex flex-row gap-12">
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
