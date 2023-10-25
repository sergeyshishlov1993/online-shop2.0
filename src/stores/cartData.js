import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCartData = defineStore("cartData", () => {
  const cartData = reactive({
    cart: [],

    showSuccessAlert: false,
    showCartBlock: false,
  });

  const calculationOfTheOrderAmount = () => {
    let result = 0;
    cartData.cart.forEach(
      (item) =>
        (result += item.quantity * parseInt(item.price.replace(/[^,\d]/g, "")))
    );
    return result;
  };

  return {
    cartData,
    calculationOfTheOrderAmount,
  };
});
