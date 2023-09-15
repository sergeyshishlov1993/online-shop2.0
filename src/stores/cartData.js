import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useCartData = defineStore("cartData", () => {
  const cartData = reactive({
    cart: [],

    showDoneModal: ref(false),
    showCartBlock: ref(false),
  });

  return {
    cartData,
  };
});
