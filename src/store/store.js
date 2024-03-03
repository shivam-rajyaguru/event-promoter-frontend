import { create } from "zustand";

export const useAuthStore = create((set) => ({
  auth: {
    email: "",
    username: "",
    profile: "",
    userProvideType: "",
    active: false,
  },
  setEmail: (email) =>
    set((state) => ({ auth: { ...state.auth, email: email } })),
  setUsername: (username) =>
    set((state) => ({ auth: { ...state.auth, username: username } })),
  setProfile: (profile) =>
    set((state) => ({ auth: { ...state.auth, profile: profile } })),
  setUserProvideType: (userProvideType) =>
    set((state) => ({
      auth: { ...state.auth, userProvideType: userProvideType },
    })),
}));
