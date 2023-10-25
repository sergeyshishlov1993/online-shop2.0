import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export const useOrderData = defineStore("orderData", () => {
  const orderData = reactive({
    orders: [],
  });

  const calculationOfTheOrderAmount = () => {
    let result = 0;
    orderData.orders.forEach((item) => (result += item.orderPrice));
    return result;
  };

  const order = computed(() => {
    return orderData.orders.flatMap((order) => order.order);
  });

  return {
    orderData,
    calculationOfTheOrderAmount,
    order,
  };
});
