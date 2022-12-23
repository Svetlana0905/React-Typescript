import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { ComponentProps, ElementType } from "react";
import cn from "classnames";

let cx = classNames.bind(styles);

type ButtonOwnProps<E extends ElementType = ElementType> = {
  handleClick?: () => void;
  children?: React.ReactNode;
  primary?: boolean;
  secondary?: boolean;
  delete_btn?: boolean;
  liked_btn?: boolean;
  yellow_btn?: boolean;
  burger_btn?: boolean;
  triggerStyle?: boolean;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = "button";

export default function Button<E extends ElementType = typeof defaultElement>({
  handleClick,
  children,
  primary,
  secondary,
  delete_btn,
  liked_btn,
  yellow_btn,
  burger_btn,
  triggerStyle,
  as,
  ...otherProps
}: ButtonProps<E>) {
  const classes = cn({
    primary,
    secondary,
    delete_btn,
    liked_btn,
    yellow_btn,
    burger_btn,
  });
  const TagName = as || defaultElement;

  const btnStyle = cx(classes, {
    burger_btn__open: triggerStyle,
  });

  return (
    <TagName className={btnStyle} {...otherProps}>
      {children}
    </TagName>
  );
}
