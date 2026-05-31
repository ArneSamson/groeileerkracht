import { create } from "zustand";

export default create((set) => {
  return {
    enteredKwaliteitenPlain: false,
    enteredUitdagingenPlain: false,
    isOverlayOpen: false,
    overlayData: null,
    viewMode: "menu",
    isTimelineOpen: false,

    setEnteredKwaliteitenPlain: (entered) => set({ enteredKwaliteitenPlain: entered }),
    setEnteredUitdagingenPlain: (entered) => set({ enteredUitdagingenPlain: entered }),
    setIsOverlayOpen: (open) => set({ isOverlayOpen: open }),
    setOverlayData: (data) => set({ isOverlayOpen: true, overlayData: data }),
    setViewMode: (mode) => set({ viewMode: mode }),
    setIsTimelineOpen: (open) => set({ isTimelineOpen: open }),
  };
});