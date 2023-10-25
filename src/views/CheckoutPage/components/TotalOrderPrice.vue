<template>
  <div class="details">
    <div class="text border">
      <ui-text-h4 class="black fw-400">PRODUCT</ui-text-h4>
      <ui-text-h4 class="black fw-400">TOTAL</ui-text-h4>
    </div>
    <!-- ----------------------------------- -->

    <div class="mt-22" :class="{ border: props.products.length != 0 }">
      <div
        class="price mt-22"
        v-for="product in calculationOfThePriceOfEachOrder"
        :key="product"
      >
        <ui-text-h4 class="black fw-400">{{ product.title }}</ui-text-h4>
        <ui-text-h4 class="black fw-400">$ {{ product.price }}</ui-text-h4>
      </div>
    </div>
    <!-- ----------------------------------- -->

    <div class="text mt-22 border">
      <ui-text-h4 class="black fw-400">SUBTOTAL</ui-text-h4>
      <ui-text-h4 class="black fw-400">$ {{ props.price() }}</ui-text-h4>
    </div>
    <!-- ----------------------------------- -->

    <div class="text mt-22 border">
      <ui-text-h4 class="black fw-400">SHIPPING</ui-text-h4>
      <ui-text-h4 class="grey fw-400">Free shipping</ui-text-h4>
    </div>
    <!-- ----------------------------------- -->

    <div class="text mt-22">
      <ui-text-h4 class="black">TOTAL</ui-text-h4>
      <ui-text-h4 class="black">$ {{ props.price() }}</ui-text-h4>
    </div>
    <!-- ----------------------------------- -->
  </div>
</template>

<script setup>
import { computed } from "vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
  price: {
    type: Object,
  },
});

const calculationOfThePriceOfEachOrder = computed(() => {
  return props.products.map((product) => ({
    title: product.title,
    price: parseInt(product.price.replace(/[^,\d]/g, "")) * product.quantity,
  }));
});
</script>

<style lang="scss" scoped>
.details {
  background: rgba(239, 239, 239, 1);
}
.text {
  padding-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.price {
  padding-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.border {
  border-bottom: 1px solid rgba(216, 216, 216, 1);
}

.mt-22 {
  margin-top: 22px;
}
</style>
