<template>
  <div class="wrapper">
    <ui-text-h1 class="black fw-500 center">Shopping Cart</ui-text-h1>

    <div class="wrapper__cart">
      <div class="wrapper__cart-item mt-64">
        <!-- ------------------- -->

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
          @remove-item-cart="removeItem(index)"
        />
        <!-- ------------------- -->

        <ui-button-main v-if="cartData.cart.length != 0" class="mt-55">
          <ui-text-h4 class="black">UPDATE CART</ui-text-h4>
        </ui-button-main>
        <!-- ------------------- -->

        <ui-form @submit.prevent="sendCouponCode" class="mt-64 form">
          <ui-input
            type="text"
            placeholder="Coupon Code"
            name="code"
            :value="couponCode"
            @input="getInputCode"
          />

          <ui-button-black class="btn">
            <ui-text-h4>APPLY COUPON</ui-text-h4>
          </ui-button-black>
        </ui-form>
      </div>

      <!-- ------------------------ -->

      <div class="cart-total">
        <cart-total />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartData } from "@/stores/cartData";

import CartTotal from "./sections/CartTotal.vue";

import UiTextH1 from "@/components/Block/UiComponents/UiTextH1.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import BagCard from "@/components/Block/TheHeader/components/BagCard.vue";
import UiButtonMain from "@/components/Block/UiComponents/UiButtonMain.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";
import UiForm from "@/components/Block/UiComponents/UiForm.vue";
import UiInput from "@/components/Block/UiComponents/UiInput.vue";

const { cartData } = useCartData();

const couponCode = ref("");

function getInputCode(event) {
  couponCode.value = event.target.value;
}

function removeItem(index) {
  cartData.cart.splice(index, 1);
} //completely remove the item from the cart

function sendCouponCode() {
  // send the discount code to the server
  couponCode.value = "";
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 96px;
  &__cart {
    display: flex;
    justify-content: space-between;
    &-item {
      width: 578px;
      display: flex;
      flex-direction: column;
    }
  }
}

.btn {
  margin-left: 76px;
  width: 100%;
}
.form {
  width: 580px;
  display: flex;
  align-self: flex-end;
}
.center {
  text-align: center;
}
.mt-55 {
  align-self: flex-end;
  margin-top: 55px;
  border: 1px solid rgba(0, 0, 0, 1);
}
.mt-64 {
  margin-top: 64px;
}
</style>
