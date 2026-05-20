import { create } from "zustand";

export default create((set) => {
  return {
    enteredKwaliteitenPlain: false,
    isOverlayOpen: false,
    viewMode: "3d",

    setEnteredKwaliteitenPlain: (entered) => set({ enteredKwaliteitenPlain: entered }),
    setIsOverlayOpen: (open) => set({ isOverlayOpen: open }),
    setViewMode: (mode) => set({ viewMode: mode }),
  };
});