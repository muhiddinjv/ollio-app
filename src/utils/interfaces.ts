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

interface ButtonProps {
  onPress: () => void;
  label: string;
}

interface IconProps {
  onPress: () => void;
}

export interface AppBarProps {
  title: string;
  backButton?: IconProps;
  hamburgerIcon?: IconProps;
  dropdown?: IconProps;
  searchIcon?: IconProps;
  clearButton?: IconProps;
  saveButton?: ButtonProps;
  closeButton?: IconProps;
  trashIcon?: IconProps;
  userIcon?: IconProps;
  transferButton?: ButtonProps;
}
