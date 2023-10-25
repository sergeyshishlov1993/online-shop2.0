<template>
  <div class="addresses">
    <ui-text-h4 class="black fw-400"
      >The following addresses will be used on the checkout page by
      default.</ui-text-h4
    >
    <div class="block">
      <address-block title="Billing address" />
      <address-block title="Shipping address" />
    </div>
  </div>
</template>

<script setup>
import AddressBlock from "../components/AddressBlock.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
</script>

<style lang="scss" scoped>
.addresses {
  width: 1160px;
}
.block {
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
</style>
