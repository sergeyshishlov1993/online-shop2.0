<template>
  <div>
    <ui-text-h2 class="black fw-400"> Order Details </ui-text-h2>

    <div class="wrapper">
      <div class="block">
        <div>
          <ui-text-h4 class="black fw-400">ORDER NUMBER</ui-text-h4>
          <ui-text-h4 class="grey fw-400">{{ props.orderNumber }}</ui-text-h4>
        </div>

        <div class="mt-39">
          <ui-text-h4 class="black fw-400">EMAIL</ui-text-h4>
          <ui-text-h4 class="grey fw-400">{{ props.email }}</ui-text-h4>
        </div>

        <div class="mt-39">
          <ui-text-h4 class="black fw-400">PAYMENT METHOD</ui-text-h4>
          <ui-text-h4 class="grey fw-400">{{ props.paymentMethod }}</ui-text-h4>
        </div>

        <div class="mt-39">
          <ui-text-h4 class="black fw-400">ORDER DATE</ui-text-h4>
          <ui-text-h4 class="grey fw-400">{{ props.date }}</ui-text-h4>
        </div>
      </div>
      <!-- ---------------------------------------------- -->

      <div class="block ml-139">
        <div>
          <ui-text-h4 class="black fw-400">DELIVERY OPTIONS</ui-text-h4>
          <ui-text-h4 class="grey fw-400">Standard delivery</ui-text-h4>
        </div>

        <div class="mt-39">
          <ui-text-h4 class="black fw-400">DELIVERY ADDRESS</ui-text-h4>
          <ui-text-h4 class="grey fw-400"
            >{{ props.country }}
            {{ props.city }}
            {{ props.street }}
            {{ props.postcode }}
          </ui-text-h4>
        </div>

        <div class="mt-39">
          <ui-text-h4 class="black fw-400">CONTACT NUMBER</ui-text-h4>
          <ui-text-h4 class="grey fw-400">{{ props.number }}</ui-text-h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import UiTextH2 from "@/components/Block/UiComponents/UiTextH2.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";

const props = defineProps({
  orderNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 29px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.block {
  display: flex;
  flex-direction: column;
}
.mt-39 {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 39px;
}
.ml-139 {
  margin-left: 139px;
}
</style>
