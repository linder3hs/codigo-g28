import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  // Funciones para poder cambiar el valor de user, isAuthenticated
  setUser: (userData) =>
    set({
      user: userData,
      isAuthenticated: true,
    }),
  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));

export default useUserStore;
