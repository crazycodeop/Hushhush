import { create } from "zustand";

export const useAuthStore = create((set) => ({
    userName: "",
    email: "",
    setUserName: (newName) => set((state) => ({ userName: newName })),
    setEmail: (newEmail) => set((state) => ({ email: newEmail })),
}));
