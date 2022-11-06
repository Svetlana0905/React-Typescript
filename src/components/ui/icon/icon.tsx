import "./icon.scss";
import { DOMAttributes } from "react";
import { ReactComponent as Home } from "../../../assets/icons/home.svg";
import { ReactComponent as Tags } from "../../../assets/icons/tags.svg";
import { ReactComponent as AboutUs } from "../../../assets/icons/about-us.svg";
import { ReactComponent as Tag } from "../../../assets/icons/tag.svg";
import { ReactComponent as Question } from "../../../assets/icons/question.svg";
import { ReactComponent as Basket } from "../../../assets/icons/basket.svg";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { ReactComponent as Auth } from "../../../assets/icons/log-in__log-out.svg";

export type IconType = "Home" | "Tags" | "Heart";

const IconTypes = new Map([
  ["Home", <Home />],
  ["Tags", <Tags />],
  ["AboutUs", <AboutUs />],
  ["Tag", <Tag />],
  ["Question", <Question />],
  ["Basket", <Basket />],
  ["Heart", <Heart />],
  ["Auth", <Auth />],
]);

export interface IIconProps extends DOMAttributes<HTMLSpanElement> {
  className?: string;
  type: IconType;
}

const getIcon = (type: IconType): JSX.Element =>
  IconTypes.get(type) as JSX.Element;

export const Icon: React.FC<IIconProps> = ({ className, type, ...rest }) => {
  return (
    <span className={className} {...rest}>
      {getIcon(type)}
    </span>
  );
};
