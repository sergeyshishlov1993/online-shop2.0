<template>
  <div class="order">
    <grey-block-message
      title="No order has been made yet."
      v-if="!orderData.orders.length"
    />
    <div v-else>
      <delivery-details />
    </div>
  </div>
</template>

<script setup>
import { useOrderData } from "@/stores/orderData";
const { orderData } = useOrderData();
import GreyBlockMessage from "../components/GreyBlockMessage.vue";
import DeliveryDetails from "../components/DeliveryDetails.vue";
</script>

<style lang="scss" scoped></style>
