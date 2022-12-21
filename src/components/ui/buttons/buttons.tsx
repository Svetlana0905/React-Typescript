import styles from "./Button.module.scss";
import { FC, forwardRef } from "react";
import { motion } from "framer-motion";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

interface ButtonProps {
  handleClick?: () => void;
  children?: React.ReactNode;
  type: "button" | "reset" | "submit";
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

export const StandartButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, handleClick, children }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className="max-w-fit py-2 px-4 border bg-yellow-400 hover:text-white rounded-lg"
        onClick={handleClick}
      >
        {children}
      </button>
    );
  }
);
export const MStandartButton = motion(StandartButton);

export const RoundButton: FC<ButtonProps> = ({
  type,
  handleClick,
  children,
}) => {
  return (
    <button type={type} className={styles.RoundButton} onClick={handleClick}>
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
  const btnStyle = cx("productButton", {
    productButton__active: triggerStyle,
  });
  return (
    <button
      onClick={handleClick}
      className={btnStyle}
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
  const btnStyle = cx("likedButton", {
    likedButton__disabled: triggerStyle,
  });

  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={triggerStyle}
      aria-label={ariaLabel}
      className={btnStyle}
    >
      {children}
      <span className={styles.likedButton__text}>
        {triggerStyle ? "Добавлен" : "Добавить в избранные"}
      </span>
    </button>
  );
};
export const AddToCartButton: FC<ButtonProps> = ({
  children,
  handleClick,
  type,
  ariaLabel,
}) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      aria-label={ariaLabel}
      className={styles.addCartButton}
    >
      {children}
    </button>
  );
};
export const BurgerBtn: FC<ButtonProps> = ({ handleClick, triggerStyle }) => {
  return (
    <button
      // className={triggerStyle ? "burger burger_open" : "burger"}
      onClick={handleClick}
    >
      'dsvsdvsdvds'
    </button>
  );
};

// export const BurgerBtn = (props) => {
//   const toggle = () => props.setCurrent(!props.current());
//   return (
//     <button
//       // Вынесла стили в отдельный файл, т.к. писать здесь портянку стилей очень неудобно
//       className={props.current() ? "burger burger_open" : "burger "}
//       onClick={toggle}
//     >
//       {/* <For each={Array.from({ length: 3 })}>
//         {(i) => (
//           <img
//             src={lineSvg}
//             alt={props.current() ? "Закрыть меню" : "Открыть меню"}
//           />
//         )}
//       </For> */}
//     </button>
//   );
// };
