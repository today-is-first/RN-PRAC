import { create } from 'zustand';

const useMenuOrderStore = create((set) => ({
  id: 0,
  increaseId: () => set((prev) => ({ id: prev.id + 1 })),
  menuList: [],
  initMenuList: () => set({ menuList: [], id: 0, totalPrice: 0 }),
  addMenuList: (val) => {
    set((prev) => {
      const existIndex = prev.menuList.findIndex(
        (menu) => menu.menu === val.menu,
      );
      if (existIndex >= 0) {
        const updatedMenuList = prev.menuList.map((menu, idx) =>
          idx === existIndex ? { ...menu, amount: menu.amount + 1 } : menu,
        );
        return {
          menuList: updatedMenuList,
          totalPrice: prev.totalPrice + val.price,
        };
      }
      const newState = {
        menuList: [
          ...prev.menuList,
          {
            id: prev.id + 1,
            menu: val.menu,
            option: val.option,
            price: val.price,
            amount: 1,
          },
        ],
        id: prev.id + 1,
        totalPrice: prev.totalPrice + val.price,
      };
      return newState;
    });
  },
  setAmount: ({ id, amountChange, price }) =>
    set((prev) => {
      const updatedMenuList = prev.menuList.map((menu) => {
        if (menu.id === id)
          return { ...menu, amount: menu.amount + Number(amountChange) };
        return menu;
      });
      return {
        menuList: updatedMenuList,
        totalPrice: prev.totalPrice + price * amountChange,
      };
    }),
  removeMenuList: (id) =>
    set((prev) => ({ menuList: prev.menuList.filter((e) => e.id !== id) })),
  totalPrice: 0,
  increasePrice: (price) =>
    set((prev) => ({ totalPrice: prev.totalPrice + price })),
  decreasePrice: (price) =>
    set((prev) => ({
      totalPrice: prev.totalPrice - price < 0 ? 0 : prev.totalPrice - price,
    })),
}));

export default useMenuOrderStore;
