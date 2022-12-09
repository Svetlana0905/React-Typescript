import { Icon } from "../components/ui/icon/icon";
import { PREFIX_PATH } from "./AppConfig";

const homeNavTree = [
  {
    key: "home",
    path: `${PREFIX_PATH}`,
    title: "Главная",
    icon: "",
    breadcrumb: false,
    submenu: [
      {
        key: "home-about",
        path: `${PREFIX_PATH}/about`,
        title: "О нас",
        icon: <Icon type="AboutUs" className="icon-wrapper black" />,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "home-any-page",
        path: `${PREFIX_PATH}/any-page`,
        title: "Вопрос-Ответ",
        icon: <Icon type="Question" className="icon-wrapper black" />,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];
const productNavTree = [
  {
    key: "product",
    path: `${PREFIX_PATH}/product`,
    title: "Товары",
    icon: null,
    breadcrumb: true,
    submenu: [
      {
        key: "product-any-page1",
        path: `${PREFIX_PATH}/product`,
        title: "Все товары",
        icon: <Icon type="Tags" className="icon-wrapper black" />,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "product-liked-product",
        path: `${PREFIX_PATH}/product/liked-product`,
        title: "Избранные товары",
        icon: <Icon type="Tag" className="icon-wrapper black" />,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "product-cart",
        path: `${PREFIX_PATH}/product/basket`,
        title: "Корзина",
        icon: <Icon type="Basket" className="icon-wrapper black" />,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];
const navSidebarConfig = [...homeNavTree, ...productNavTree];

export default navSidebarConfig;
