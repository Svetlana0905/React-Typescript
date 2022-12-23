import styles from "./TopMenu.module.scss";
import { IHeaderTopMenu } from "../../../../types/types";
import { splitString } from "../../../../hook/splitString";
import logo from "../../../../assets/icons/logo.svg";

interface TopMenuProps {
  props: IHeaderTopMenu[];
}

export const TopMenu: React.FC<TopMenuProps> = ({ props }) => {
  return (
    <article className={styles.top_menu}>
      <p>
        <a href="/">
          <img
            src={logo}
            alt="Link for home page. Logotype"
            className={styles.top_menu__logo}
          />
        </a>
      </p>
      <p className={styles.top_menu__link_list}>
        {props?.length &&
          props.map((item) => (
            <a
              key={item.key}
              className={styles[`${item.styleLink}`]}
              href={splitString(item.path) ? splitString(item.path) : "#"}
            >
              <span>{item.title}</span>
            </a>
          ))}
      </p>
    </article>
  );
};
