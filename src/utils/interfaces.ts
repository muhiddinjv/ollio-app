export interface IBase {
  title: string;
  subtitle?: string;
  price?: number|string;
  iconColor?: string;
  icon?: any;
}

export interface IProduct {
  price?: number | string;
  time?: string;
  productNumber?: string;
  state?: string;
}

export interface INavigation {
  navigation?: any;
  route?: string;
}
