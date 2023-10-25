<template>
  <div class="wrapper">
    <ui-text-h2 class="black fw-400 left">YOUR ORDER</ui-text-h2>

    <div class="wrapper__invoice">
      <total-order-price
        :products="cartData.cart"
        :price="calculationOfTheOrderAmount"
      />

      <div class="wrapper__invoice-payment mt-61">
        <div class="input__wrapper">
          <UIInputRadio
            @input="getRadioBtnValue"
            id="1"
            :checked="isRadioChecked(1)"
            name="payment"
            @change="handleRadioChange(1)"
            value="Direct bank transfer"
          />
          <ui-text-h4 class="black fw-400 ml-8"
            >Direct bank transfer</ui-text-h4
          >
        </div>

        <ui-text-small class="grey mt-22">
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account
        </ui-text-small>

        <div class="input__wrapper mt-22">
          <UIInputRadio
            @input="getRadioBtnValue"
            id="2"
            :checked="isRadioChecked(2)"
            name="payment"
            @change="handleRadioChange(2)"
            value="Check payments"
          />
          <ui-text-h4 class="black fw-400 ml-8">Check payments</ui-text-h4>
        </div>

        <div class="input__wrapper mt-22">
          <UIInputRadio
            @input="getRadioBtnValue"
            id="3"
            :checked="isRadioChecked(3)"
            name="payment"
            @change="handleRadioChange(3)"
            value="Cash on delivery"
          />
          <ui-text-h4 class="black fw-400 ml-8">Cash on delivery</ui-text-h4>
        </div>

        <div class="input__wrapper mt-22">
          <UIInputRadio
            @input="getRadioBtnValue"
            id="4"
            :checked="isRadioChecked(4)"
            name="payment"
            @change="handleRadioChange(4)"
            value="PayPal "
          />
          <ui-text-h4 class="black fw-400 ml-8">PayPal</ui-text-h4>
          <icon-pay-pal class="ml-8" />
        </div>
      </div>
      <!-- ----------------------------------- -->

      <ui-button-black class="width-100 mt-45">
        <ui-text-h4>PLACE ORDER</ui-text-h4>
      </ui-button-black>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartData } from "@/stores/cartData";
import UiTextH2 from "@/components/Block/UiComponents/UiTextH2.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import UiTextSmall from "@/components/Block/UiComponents/UiTextSmall.vue";
import UIInputRadio from "@/components/Block/UiComponents/UIInputRadio.vue";
import IconPayPal from "@/components/UiIcon/IconPayPal.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";
import TotalOrderPrice from "../components/TotalOrderPrice.vue";

const { cartData, calculationOfTheOrderAmount } = useCartData();
const emit = defineEmits(["sendRadioBtnValue"]);

const selectedRadio = ref(1);

const isRadioChecked = (id) => {
  return selectedRadio.value === id;
};
const handleRadioChange = (id) => {
  selectedRadio.value = id;
};

function getRadioBtnValue(event) {
  emit("sendRadioBtnValue", event.target.value);
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 580px;
  &__invoice {
    background: rgba(239, 239, 239, 1);
    padding: 39px 59px 40px 59px;
  }
}
.input__wrapper {
  display: flex;
  align-items: center;
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
.left {
  text-align: left;
}
.width-100 {
  width: 100%;
}
.ml-8 {
  margin-left: 8px;
}
.mt-22 {
  margin-top: 22px;
}
.mt-45 {
  margin-top: 45px;
}
.mt-61 {
  margin-top: 61px;
}
</style>
