import { createContext } from "react";

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
  label: string;
  icon: string;
  color: string;
  value: string;
  onChangeText: (text:string) => void;
  onIconPress: () => void;
}

export interface AppBarProps {
  title?: string;
  backButton?: IconProps;
  hamburgerIcon?: IconProps;
  threeDots?: IconProps;
  searchInput?: InputProps;
  clearButton?: IconProps;
  saveButton?: ButtonProps;
  closeButton?: IconProps;
  trashIcon?: IconProps;
  userPlusIcon?: IconProps;
  userCheckIcon?: IconProps;
  transferButton?: ButtonProps;
}

// CONTEXT PROVIDER STUFF -----
export interface ILanguage {
  message: string;
  locale: string;
}

export interface MenuProps {
  id: number;
  pid: number;
  state: string;
  code: number|string;
  lang: {
    message: string;
    locale: string;
  }[];
}

export const DefaultMenu = {
  id: 0,
  pid: 0,
  state: 'none',
  lang: [
    {message:"Net", locale:"ru"},
    {message:"None", locale:"en"},
    {message:"Yo'q", locale:"uz"}
  ],
  code: 1,
}

interface AppContextProps {
  openDrawer: boolean;
  setOpenDrawer: (open: boolean) => void;
}

export const AppContext = createContext<AppContextProps>({
  openDrawer: false,
  setOpenDrawer: () => {},
});

