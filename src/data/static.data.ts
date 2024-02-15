import {
  burger_icon,
  category,
  discount_icon,
} from "../constants/icons";

export const homePages = [
  {
    screen: "ItemsScreen",
    name: "Items",
    icon: burger_icon,
  },
  {
    screen: "CategoriesScreen",
    name: "Categories",
    icon: category,
  },
  {
    screen: "",
    name: "Discounts",
    icon: discount_icon,
  },
];

export const sidebarItems = [
  {
    screen: "SalesScreen",
    name: "Sales",
    icon: "shopping",
  },
  {
    screen: "SalesScreen",
    name: "Check",
    icon: "receipt",
  },
  {
    screen: "ItemsScreen",
    name: "Items",
    icon: "format-list-bulleted",
  },
  {
    screen: "ItemsScreen",
    name: "Settings",
    icon: "cog",
  },
  {
    screen: "ItemsScreen",
    name: "Back office",
    icon: "office-building-cog",
  },
  {
    screen: "ItemsScreen",
    name: "Apps",
    icon: "apps",
  },
  {
    screen: "ItemsScreen",
    name: "Support",
    icon: "chat",
  },
];
