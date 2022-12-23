import styles from "./Text.module.scss";
import { FC } from "react";

interface TextProps {
  handleClick?: () => void;
  children: React.ReactNode;
}

export const TextUnderline: FC<TextProps> = ({ children }) => {
  return <h2 className={styles.title_underline}>{children}</h2>;
};
export const SubtitleText: FC<TextProps> = ({ children }) => {
  return <h3 className={styles.subtitle}>{children}</h3>;
};
