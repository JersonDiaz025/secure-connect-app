//All menu items for navbar
export type MenuItem = {
  label: string;
  url: string;
  id: number;
};

const menuItems: MenuItem[] = [{ label: "Home", url: "/", id: 1 }];

export default menuItems;
