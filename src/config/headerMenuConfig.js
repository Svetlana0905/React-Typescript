import { PREFIX_PATH } from "./AppConfig";
import { Icon } from "../components/ui/icon/icon";

export const headerTopNavTree = [
  {
    key: "feedback-mail",
    path: `${PREFIX_PATH}/mailto:johndoe@fakeemail.com`,
    title: "Обратная связь",
    styleLink: "feedback-mail",
  },
  {
    key: "phone",
    path: `${PREFIX_PATH}/tel:+79191234556`,
    title: "+7 (919)-123-45-56",
    styleLink: "phone",
  },
  {
    key: "delivery",
    path: `${PREFIX_PATH}/delivery`,
    title: "Бесконтактная доставка",
    styleLink: "delivery",
  },
];

export const headerBottomNavTree = [
  {
    key: "auth",
    path: `${PREFIX_PATH}/login-page`,
    title: "Вход/регистрация",
    styleLink: "auth",
    visibilityTitle: "isVisible",
    icon: <Icon type="Auth" className="icon-wrapper white" />,
  },
  {
    key: "liked-goods",
    path: `${PREFIX_PATH}/liked-goods`,
    title: "Избранные товары",
    styleLink: "liked-goods",
    visibilityTitle: "isHidden",
    icon: <Icon type="Heart" className="icon-wrapper white" />,
    visibleBadje: "isVisible",
  },
  {
    key: "basket",
    path: `${PREFIX_PATH}/basket`,
    title: "Перейти в корзину",
    styleLink: "basket",
    visibilityTitle: "isHidden",
    icon: <Icon type="Basket" className="icon-wrapper white" />,
    visibleBadje: "isVisible",
  },
];
