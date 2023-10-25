<template>
  <div class="added-to-cart">
    <div class="text-cart-done">
      <icon-arrow-done />

      <ui-text-h4 class="black fw-400 ml-13"
        >The item added to your Shopping bag.</ui-text-h4
      >
    </div>

    <button>
      <ui-text-h4 @click="goToOrderPage" class="yellow">VIEW CART</ui-text-h4>
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useCartData } from "@/stores/cartData";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import IconArrowDone from "@/components/UiIcon/IconArrowDone.vue";

const router = useRouter();
const { cartData } = useCartData();

function goToOrderPage() {
  router.push("/cart");
  cartData.showSuccessAlert = false;
}

function hideAlertSuccessMessage() {
  setInterval(() => {
    cartData.showSuccessAlert = false;
  }, 5000);
}

hideAlertSuccessMessage();
</script>

<style lang="scss" scoped>
.added-to-cart {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 24px 39px;
  border-top: 2px solid rgba(161, 138, 104, 1);
  background: linear-gradient(0deg, #efefef, #efefef);
}

.text-cart-done {
  display: flex;
  align-items: center;
}
.ml-13 {
  margin-left: 13px;
}
</style>
