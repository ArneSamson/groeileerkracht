import { create } from "zustand";

export default create((set) => {
  return {
    enteredKwaliteitenPlain: false,

    setEnteredKwaliteitenPlain: (entered) => set({ enteredKwaliteitenPlain: entered }),
  };
});