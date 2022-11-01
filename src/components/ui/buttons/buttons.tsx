import "./buttons.scss";
import { FC } from "react";

interface ButtonProps {
  handleClick?: () => void;
  children?: React.ReactNode;
  type: any;
  triggerStyle?: boolean;
  disabled?: boolean;
  buttonStyle?: string;
}

export const NavBarButton: FC<ButtonProps> = ({
  children,
  handleClick,
  buttonStyle,
  type,
}) => {
  return (
    <button onClick={handleClick} className={buttonStyle} type={type}>
      {children && children}
    </button>
  );
};

export const StandartButton: FC<ButtonProps> = ({
  type,
  handleClick,
  children,
}) => {
  return (
    <button
      type={type}
      className="py-2 px-4 border bg-yellow-400 hover:text-white rounded-lg"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export const RoundButton: FC<ButtonProps> = ({
  type,
  handleClick,
  children,
}) => {
  return (
    <button type={type} className="round-button" onClick={handleClick}>
      {children}
    </button>
  );
};

export const ProductButton: FC<ButtonProps> = ({
  children,
  handleClick,
  triggerStyle,
  type,
}) => {
  return (
    <button
      onClick={handleClick}
      className={
        triggerStyle
          ? "product-button product-button__active"
          : "product-button "
      }
      type={type}
    >
      {children}
    </button>
  );
};

export const DeleteButton: FC<ButtonProps> = ({
  children,
  handleClick,
  triggerStyle,
  type,
}) => {
  return (
    <button
      onClick={handleClick}
      className={
        triggerStyle
          ? "product-button product-button__delete product-button__delete-active"
          : "product-button product-button__delete"
      }
      type={type}
    >
      {children}
    </button>
  );
};
