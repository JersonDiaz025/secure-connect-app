import { AppRoutes } from "../../constants/routes";
import { MenuItem } from "../../interfaces/menuItems.interface";
// All menu items to used in top navbar
export const menuItems: MenuItem[] = [
  { label: "Profile", href: AppRoutes.PROFILE, id: 0 },
  { label: "Dashboard", href: AppRoutes.HOME, id: 1 },
];
