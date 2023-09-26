import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCartData = defineStore("cartData", () => {
  const cartData = reactive({
    cart: [],

    showSuccessAlert: false,
    showCartBlock: false,
  });

  return {
    cartData,
  };
});
