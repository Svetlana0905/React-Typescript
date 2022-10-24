import "./text.scss";
import { FC } from "react";

interface TextProps {
  handleClick?: () => void;
  children: React.ReactNode;
}

export const TextUnderline: FC<TextProps> = ({ children }) => {
  return <p className="title-underline">{children}</p>;
};
