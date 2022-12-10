export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}

export interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}
export interface IProductLiked {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
  status?: boolean;
  count?: number;
}

export interface ISub {
  key: string;
  path: string;
  title: string;
  icon: any;
  breadcrumb: boolean;
  submenu?: any;
}

export type INavLinks<T> = {
  key: string;
  path: string;
  title: string;
  icon: any;
  breadcrumb: boolean;
  submenu?: T[];
};

export type IHeaderTopMenu = {
  key: string;
  path: string;
  title: string;
  styleLink: string;
};
export type IHeaderBottomMenu = {
  key: string;
  path: string;
  title?: string;
  styleLink: string;
  visibilityTitle: string;
  icon?: any;
  visibleBadje?: string;
};

export interface ISliderData {
  imgpath: string;
  title: string;
  subtitle: string;
}
