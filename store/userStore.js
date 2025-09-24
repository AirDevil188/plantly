import { create } from "zustand";

export const useUserStore = create((set) => ({
  hasFinishedOnboarding: false,
  toggleHasOnboarded: () => {
    set((state) => {
      return {
        ...state,
        hasFinishedOnboarding: !state.hasFinishedOnboarding,
      };
    });
  },
}));
