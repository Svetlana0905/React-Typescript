import styles from "./SideNav.module.scss";
import { Link } from "react-router-dom";
import { INavLinks, ISub } from "../../types/types";

interface ProductProps {
  props: Array<INavLinks<ISub>>;
}

export const SideNav: React.FC<ProductProps> = ({ props }) => {
  return (
    <nav className={styles.nav}>
      {props.map((menu) =>
        menu.submenu ? (
          <div key={menu.key}>
            <Link className="" to={menu?.path ? menu.path : ""}>
              {menu.title}
            </Link>
            <div>
              {menu.submenu.map((item) => (
                <p key={item.key} className={styles.nav__sublinkBlock}>
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
