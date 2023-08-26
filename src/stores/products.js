import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),

  actions: {
    async fetchProductsFromDB() {
      const response = await fetch("https://dummyjson.com/products");
      const json = await response.json();
      this.products = json.products;
    },
  },
});
