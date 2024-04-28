import { create } from "zustand";
import { UserState } from "../interfaces/userInfo.interface";

// Store for managing user authentication state and user information.
const userStore = create<UserState>((set) => {
  return {
    // Flag indicating whether the user is authenticated.
    isAuthenticated: false,

    //The name of the authenticated user.
    nameUser: "",

    //Function to set the authentication state of the user.
    setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),

    //Function to set the name of the authenticated user.
    setNameUser: (value) => set({ nameUser: value }),
  };
});

export default userStore;
