import React, { createContext, useContext, useState } from "react";

type MenuItem = {
  id: string;
  category: string;
  name: string;
  price: string;
  description: string;
};

type MenuContextType = {
  menu: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
  removeMenuItem: (id: string) => void;
  updateMenuItem: (id: string | null, updatedItem: Partial<MenuItem>) => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menu, setMenu] = useState<MenuItem[]>([
    {
      id: "1",
      category: "Appetizers",
      name: "Bruschetta",
      price: "R10",
      description: "Toasted bread topped with diced tomatoes, garlic, basil, and olive oil",
    },
    {
      id: "2",
      category: "Main dishes",
      name: "Grilled Ribeye Steak",
      price: "R25",
      description: "A juicy ribeye steak grilled to perfection and served with sides.",
    },
    {
      id: "3",
      category: "Desserts",
      name: "Tiramisu",
      price: "R15",
      description: "A layered Italian dessert made of coffee-soaked ladyfingers and mascarpone cheese.",
    },
  ]);

  // Add a new menu item
  const addMenuItem = (item: MenuItem) => {
    setMenu((prevMenu) => [...prevMenu, item]);
  };

  // Remove a menu item by ID
  const removeMenuItem = (id: string) => {
    setMenu((prevMenu) => prevMenu.filter((item) => item.id !== id));
  };

  // Update an existing menu item by ID
  const updateMenuItem = (id: string | null, updatedItem: Partial<MenuItem>) => {
    setMenu((prevMenu) =>
      prevMenu.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  return (
    <MenuContext.Provider value={{ menu, addMenuItem, removeMenuItem, updateMenuItem }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

