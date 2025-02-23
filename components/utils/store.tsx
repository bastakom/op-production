import { create } from "zustand";

//Open är förberedd till hamburgermeny, används ingenstans just nu.

interface IsOpenMenu {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const useStore = create<IsOpenMenu>((set) => ({
  open: false,
  setOpen: (value) => set({ open: value }),
}));

export default useStore;
