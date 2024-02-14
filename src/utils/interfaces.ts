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

interface InputProps {
  onChangeText: () => void;
  label: string;
  value: string;
}

export interface AppBarProps {
  title?: string;
  backButton?: IconProps;
  hamburgerIcon?: IconProps;
  dropdown?: IconProps;
  searchIcon?: IconProps;
  searchInput?: InputProps;
  clearButton?: IconProps;
  saveButton?: ButtonProps;
  closeButton?: IconProps;
  trashIcon?: IconProps;
  userIcon?: IconProps;
  transferButton?: ButtonProps;
}
