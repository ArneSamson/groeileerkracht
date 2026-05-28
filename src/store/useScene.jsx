import { create } from "zustand";

export default create((set) => {
  return {
    enteredKwaliteitenPlain: false,
    isOverlayOpen: false,
    overlayData: null,
    viewMode: "3d",

    setEnteredKwaliteitenPlain: (entered) => set({ enteredKwaliteitenPlain: entered }),
    setIsOverlayOpen: (open) => set({ isOverlayOpen: open }),
    setOverlayData: (data) => set({ isOverlayOpen: true, overlayData: data }),
    setViewMode: (mode) => set({ viewMode: mode }),
  };
});