import styles from "./SideNav.module.scss";
import { Link } from "react-router-dom";
import { INavLinks, ISub } from "../../types/types";
import { useAppSelector } from "../../hook";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

interface ProductProps {
  props: Array<INavLinks<ISub>>;
}

export const SideNav: React.FC<ProductProps> = ({ props }) => {
  let isOpen = useAppSelector((state) => state.sidebar.status);

  const btnStyle = cx(styles.nav, {
    nav__open: isOpen,
  });

  console.log(isOpen + " isOpen");
  return (
    <nav className={btnStyle}>
      {props.map((menu) =>
        menu.submenu ? (
          <div key={menu.key} className={styles.nav__link_block}>
            <Link
              className={styles.nav__link_title}
              to={menu?.path ? menu.path : ""}
            >
              {menu.title}
            </Link>
            <div className={styles.nav__links_items}>
              {menu.submenu.map((item) => (
                <p key={item.key} className={styles.nav__sublink_block}>
                  {item.icon}
                  <Link className={styles.nav__link} to={item.path}>
                    {item.title}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </nav>
  );
};
