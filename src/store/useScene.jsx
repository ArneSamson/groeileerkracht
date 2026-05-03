import { create } from "zustand";

export default create((set) => {
  return {
    enteredKwaliteitenPlain: false,
    isOverlayOpen: false,

    setEnteredKwaliteitenPlain: (entered) => set({ enteredKwaliteitenPlain: entered }),
    setIsOverlayOpen: (open) => set({ isOverlayOpen: open }),
  };
});