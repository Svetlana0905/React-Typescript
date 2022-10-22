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
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

export interface INavLinks {
  key: string;
  path: string;
  title: string;
  icon: any;
  breadcrumb: boolean;
  submenu?: INavLinks;
}

export interface ServerResponse<T> {
  data: T[];
}
