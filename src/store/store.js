import { create } from "zustand";

export const useAuthStore = create((set) => ({
  auth: {
    email: "",
    username: "",
    profile: "",
    active: false,
  },
  setEmail: (email) =>
    set((state) => ({ auth: { ...state.auth, email: email } })),
  setUsername: (username) =>
    set((state) => ({ auth: { ...state.auth, username: username } })),
  setProfile: (profile) =>
    set((state) => ({ auth: { ...state.auth, profile: profile } })),
}));
