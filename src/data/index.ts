import ItemsScreen from "../screens/items";
import SignInScreen from "../screens/signin";
import SignupScreen from "../screens/signup";
import SplashScreen from "../screens/splash";
import SelectScreen from "../screens/select_store";
import BottomTabs from "../components/bottom_tabs";
import TabView from "../screens/tabview";
import SearchScreen from "../screens/search";
import EditItem from "../screens/edit_item";
import AddCustomerScreen from "../screens/customer/add_customer";
import PinCodeScreen from "../screens/enter_pin";
import SaveTicketScreen from "../screens/orders/save_ticket";
import Confirmation from "../screens/enter_pin";
import SalesScreen from "../screens/sales";
import OrdersScreen from "../screens/orders";
import RefundScreen from "../screens/refund";
import CustomersScreen from "../screens/customer/customer_list";
import EditCustomerScreen from "../screens/customer/edit_customer";
import CustomerProfileScreen from "../screens/customer/customer_profile";
import QuantityScreen from "../screens/payment/quantity";
import PaymentScreen from "../screens/payment/pay";
import PaidScreen from "../screens/paid";
import AddToCartScreen from "../screens/customer/add_to_cart/index";
import TicketScreen from "../screens/payment/ticket";
import AssignTicketTo from "../screens/orders/assign_ticket_to";
import TestAi from "../screens/aigen/test";

export const homePages = [
  {
    screen: "ItemsScreen",
    name: "Items",
    icon: "format-list-bulleted",
  },
  {
    screen: "CategoriesScreen",
    name: "Categories",
    icon: "content-copy",
  },
  {
    screen: "DiscountsScreen",
    name: "Discounts",
    icon: "percent",
  },
];

export const sidebarItems = [
  {
    screen: "SalesScreen",
    name: "Sales",
    icon: "shopping",
  },
  {
    screen: "OrdersScreen",
    name: "Orders",
    icon: "receipt",
  },
  {
    screen: "ItemsScreen",
    name: "Items",
    icon: "format-list-bulleted",
  },
  {
    screen: "SearchScreen",
    name: "Settings",
    icon: "cog",
  },
  {
    screen: "CustomersScreen",
    name: "Admin",
    icon: "alpha-a-box",
  },
  {
    screen: "PaymentScreen",
    name: "Apps",
    icon: "apps",
  },
  {
    screen: "ItemsScreen",
    name: "Support",
    icon: "chat",
  },
];

export const screens = [
  { name: "Sales", screen: SalesScreen, icon: "shopping" },
  { name: "Items", screen: ItemsScreen, icon: "format-list-bulleted" },
  { name: "Orders", screen: OrdersScreen, icon: "receipt" },
  { name: "AiGen", screen: TestAi, icon: "account" },
  { name: "Splash", screen: SplashScreen, icon: "account" },
  { name: "Signin", screen: SignInScreen, icon: "account" },
  { name: "Signup", screen: SignupScreen, icon: "account" },
  { name: "SelectStore", screen: SelectScreen, icon: "account" },
  { name: "Confirmation", screen: Confirmation, icon: "account" },
  { name: "EditItem", screen: EditItem, icon: "account" },
  { name: "TabView", screen: TabView, icon: "account" },
  { name: "Search", screen: SearchScreen, icon: "account" },
  { name: "AddCustomer", screen: AddCustomerScreen, icon: "account" },
  { name: "PinCode", screen: PinCodeScreen, icon: "account" },
  { name: "SaveTicket", screen: SaveTicketScreen, icon: "account" },
  { name: "Refund", screen: RefundScreen, icon: "account" },
  { name: "Customers", screen: CustomersScreen, icon: "account" },
  { name: "EditCustomer", screen: EditCustomerScreen, icon: "account" },
  { name: "CustomerProfile", screen: CustomerProfileScreen, icon: "account" },
  { name: "Quantity", screen: QuantityScreen, icon: "account" },
  { name: "Payment", screen: PaymentScreen, icon: "account" },
  { name: "Paid", screen: PaidScreen, icon: "account" },
  { name: "AddToCart", screen: AddToCartScreen, icon: "account" },
  { name: "Ticket", screen: TicketScreen, icon: "account" },
  { name: "AssignTicketTo", screen: AssignTicketTo, icon: "account" },
  { name: "BottomTabs", screen: BottomTabs, icon: "account" },
];
