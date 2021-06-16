import { defineStore } from "pinia";

export const useGlobalStore = defineStore({
  id: "global",
  state: () => ({
    loading: false,
    counter: 0,
  }),
  actions: {
    incrementCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
    async runWithLoader(callback, errorMessage) {
      try {
        this.loading = true;
        await callback();
        this.loading = false;
        return true;
      } catch (error) {
        this.loading = false;
        throw new Error(errorMessage);
      }
    },
  },
});
