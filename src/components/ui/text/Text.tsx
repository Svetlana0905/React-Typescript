import "./text.scss";
import { FC } from "react";

interface TextProps {
  handleClick?: () => void;
  children: React.ReactNode;
}

export const TextUnderline: FC<TextProps> = ({ children }) => {
  return <h2 className="title-underline">{children}</h2>;
};
export const SubtitleText: FC<TextProps> = ({ children }) => {
  return <h3 className="text-lg text-gray-900">{children}</h3>;
};
