import styles from "./Images.module.scss";
// import { IImage } from "../../../types/types";

interface ImageProps {
  title: string;
  path: string;
  class: string;
}

export const ImageProduct: React.FC<ImageProps> = (props) => {
  return (
    <div className={styles.product_image}>
      <img
        src={props.path}
        alt={props.title}
        className={styles.product_image__img}
      />
    </div>
  );
};
