import { Icon } from "../components/ui/icon/icon";
import { PREFIX_PATH } from "./AppConfig";

const homeNavTree = [
  {
    key: "home",
    path: `${PREFIX_PATH}`,
    title: "Главные",
    icon: "",
    breadcrumb: false,
    submenu: [
      {
        key: "home-about",
        path: `${PREFIX_PATH}/about`,
        title: "О нас",
        icon: <Icon type="AboutUs" />,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "home-any-page",
        path: `${PREFIX_PATH}/any-page`,
        title: "Вопрос-Ответ",
        icon: <Icon type="Question" />,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];
const productNavTree = [
  {
    key: "product",
    path: ``,
    title: "Товары",
    icon: null,
    breadcrumb: true,
    submenu: [
      {
        key: "product-any-page1",
        path: `${PREFIX_PATH}/product`,
        title: "Все товары",
        icon: <Icon type="Tags" />,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "product-any-page2",
        path: `${PREFIX_PATH}/product/any-page2`,
        title: "Страница товара",
        icon: <Icon type="Tag" />,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];
const navigationConfig = [...homeNavTree, ...productNavTree];

export default navigationConfig;
