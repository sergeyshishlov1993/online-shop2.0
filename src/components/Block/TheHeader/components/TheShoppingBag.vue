<template>
  <div class="wrapper__shoping-bag">
    <!-- ----------header-cart-title------------ -->

    <div class="wrapper__title">
      <div class="wrapper__close">
        <ui-text-h4 class="black fw-400">Shopping bag</ui-text-h4>
        <ui-button-close @click="cartData.showCartBlock = false" />
      </div>

      <ui-text-small class="mt-18"
        >{{ cartData.cart.length }} items</ui-text-small
      >
    </div>

    <!-- ----------order-card------------ -->

    <bag-card
      v-for="(item, index) in cartData.cart"
      :key="item.src"
      :index="index"
      :path="item.src"
      :title="item.title"
      :color="item.aditionalInformation.colours"
      :material="item.aditionalInformation.material"
      :price="item.price"
      :quantity="item.quantity"
      :cart="true"
      @remove-item-cart="removeItem(index)"
    />
    <!-- ----------footer-cart------------ -->

    <div class="order-amount mt-59">
      <div class="wrapper__price">
        <ui-text-h4 class="black"
          >Subtotal ({{ cartData.cart.length }} items)</ui-text-h4
        >

        <ui-text-h4 class="black ml-88"
          >$ {{ calculationOfTheOrderAmount() }}</ui-text-h4
        >
      </div>

      <ui-button-main class="border mt-18" @click="goToCart"
        >VIEW CART</ui-button-main
      >
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import { useCartData } from "@/stores/cartData";
import { useRouter } from "vue-router";

import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import UiTextSmall from "@/components/Block/UiComponents/UiTextSmall.vue";
import BagCard from "./BagCard.vue";
import UiButtonMain from "@/components/Block/UiComponents/UiButtonMain.vue";
import UiButtonClose from "@/components/Block/UiComponents/UiButtonClose.vue";

const { cartData, calculationOfTheOrderAmount } = useCartData();
const router = useRouter();

function removeItem(index) {
  cartData.cart.splice(index, 1);
} //completely remove the item from the cart

// const calculationOfTheOrderAmount = computed(() => {
//   let result = 0;
//   cartData.cart.forEach(
//     (item) =>
//       (result += item.quantity * parseInt(item.price.replace(/[^,\d]/g, "")))
//   );
//   return result;
// }); //calculate the total order amount

function goToCart() {
  router.push("/cart");
}
</script>

<style lang="scss" scoped>
.wrapper__shoping-bag {
  padding-top: 36px;
  position: absolute;
  top: 0;
  right: 0;
  width: 360px;
  min-height: 945px;
  border: 1px solid rgba(216, 216, 216, 1);
  background: var(--var-body-bg);
  z-index: 1;
}
.wrapper__close {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.wrapper__title {
  padding: 0 36px;
}

.wrapper__price {
  display: flex;
}

.order-amount {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.border {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 1);
}

.mt-18 {
  margin-top: 18px;
}
.mt-59 {
  margin-top: 59px;
}
.ml-88 {
  margin-left: 88px;
}
</style>
