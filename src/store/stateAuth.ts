import { create } from "zustand";
import { StateAuth } from "../interfaces/stateAuth.interface";

// Store for managing loadin process.
export const stateAuth = create<StateAuth>((set) => {
  return {
    isLoading: false,

    //Function to set loadin process.
    setIsLoading: (value: boolean) => set({ isLoading: value }),
  };
});
