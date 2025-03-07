import { create } from "zustand";

interface IsOpenMenu {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}

const useStore = create<IsOpenMenu>((set) => ({
  openMenu: false,
  setOpenMenu: (value) => set({ openMenu: value }),
}));

export default useStore;
