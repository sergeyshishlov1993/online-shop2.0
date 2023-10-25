<template>
  <div class="wrapper">
    <sucses-message />

    <div
      class="invoce"
      v-for="order in orderData.orders"
      :key="order.orderNumber"
    >
      <order-information
        :orderNumber="order.orderNumber"
        :email="order.persone.email"
        :date="order.date"
        :number="order.persone.phone"
        :country="order.persone.country"
        :city="order.persone.city"
        :street="order.persone.streetAddress"
        :postcode="order.persone.postcode"
        :paymentMethod="order.persone.paymentMethod"
      />

      <div>
        <ui-text-h2 class="black fw-400">ORDER Summary</ui-text-h2>

        <div class="order__details mt-39">
          <total-order-price
            :products="orderArr"
            :price="calculationOfTheOrderAmount"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useOrderData } from "@/stores/orderData";
import SucsesMessage from "./components/SucsesMessage.vue";
import OrderInformation from "./components/OrderInformation";
import UiTextH2 from "@/components/Block/UiComponents/UiTextH2.vue";
import TotalOrderPrice from "@/views/CheckoutPage/components/TotalOrderPrice.vue";

const { orderData, calculationOfTheOrderAmount, order } = useOrderData();

const orderArr = order;
</script>

<style lang="scss" scoped>
.invoce {
  margin-top: 96px;
  display: flex;
  justify-content: space-between;
}
.order__details {
  padding: 39px 59px 40px 59px;
  background: rgba(239, 239, 239, 1);
  width: 580px;
}
.mt-39 {
  margin-top: 39px;
}
</style>
