import "./buttons.scss";
import { FC, useState, useEffect } from "react";

interface ButtonProps {
  handleClick?: () => void;
  children?: React.ReactNode;
  type: any;
  triggerStyle?: boolean;
  disabled?: boolean;
  buttonStyle?: string;
  ariaLabel?: string;
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
  ariaLabel,
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
      aria-label={ariaLabel}
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
  ariaLabel,
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
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
export const LikedProductButton: FC<ButtonProps> = ({
  children,
  handleClick,
  triggerStyle,
  type,
  ariaLabel,
}) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={triggerStyle}
      aria-label={ariaLabel}
      className={
        triggerStyle ? "liked-button" : "liked-button liked-button__disabled"
      }
    >
      {children}
      <span className="absolute lef-0  top-0 h-6 opacity-0 hover:opacity-70 bg-white hover:w-52 hover:h-6">
        {triggerStyle ? "Уже добавлен" : "Добавить в избранные"}
      </span>
    </button>
  );
};
