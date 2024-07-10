// src/useStore.js
import create from 'zustand';

const useStore = create((set) => ({
  isLoggedIn: false,
  showDropdown: false,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false, showDropdown: false }),
  toggleDropdown: () => set((state) => ({ showDropdown: !state.showDropdown }))
}));

export default useStore;
