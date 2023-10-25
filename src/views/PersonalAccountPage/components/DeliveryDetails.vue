<template>
  <div class="block__title">
    <ui-text-h4 class="black fw-400">ORDER NUMBER</ui-text-h4>
    <ui-text-h4 class="black fw-400">DATE</ui-text-h4>
    <ui-text-h4 class="black fw-400">STATUS</ui-text-h4>
    <ui-text-h4 class="black fw-400">TOTAL</ui-text-h4>
    <ui-text-h4 class="black fw-400">ACTIONS</ui-text-h4>
  </div>

  <div class="info" v-for="order in orderData.orders" :key="order.orderPrice">
    <ui-text-h4 class="black fw-400">{{ order.orderNumber }}</ui-text-h4>
    <ui-text-h4 class="black fw-400 ml-192">{{ order.date }}</ui-text-h4>
    <ui-text-h4 class="black fw-400 ml-125">{{ order.status }}</ui-text-h4>
    <ui-text-h4 class="black fw-400 ml-185"
      >$ {{ order.orderPrice }}</ui-text-h4
    >
    <router-link to="/cart">
      <ui-text-h4 class="yellow fw-400 ml-208">View Order</ui-text-h4>
    </router-link>
  </div>
</template>

<script setup>
import { useOrderData } from "@/stores/orderData";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";

const { orderData } = useOrderData();

const props = defineProps({
  numberOrder: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.block__title {
  padding: 39px 120px 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 1);
}
.info {
  padding: 39px 0 16px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
}
.ml-125 {
  margin-left: 125px;
}
.ml-185 {
  margin-left: 185px;
}
.ml-192 {
  margin-left: 192px;
}
.ml-208 {
  margin-left: 208px;
}
</style>
