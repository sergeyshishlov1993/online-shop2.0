<template>
  <div class="card mt-48">
    <!-- -----------img product----------- -->

    <img :src="path" alt="#" />

    <div class="wrapper ml-30">
      <!-- -----------title && close button ----------- -->

      <div>
        <ui-text-h5>{{ props.title }}</ui-text-h5>

        <!-- -----------characteristics && price product ----------- -->
        <ui-text-h5 class="mt-5"
          >{{ props.color }}/{{ props.material }}</ui-text-h5
        >
        <ui-text-h5 class="yellow mt-8">{{ props.price }}</ui-text-h5>
      </div>

      <!-- -----------counter quantity of goods ----------- -->
      <div class="wrapper__counter mt-34">
        <ui-text-small v-if="props.cart" class="yellow">QTY:</ui-text-small>
        <!-- -----------counter ----------- -->
        <div class="mr-23">
          <ui-counter
            :cart="props.cart"
            :counter="props.quantity"
            @change-counter-value="
              (counterValue) => changeCounter(counterValue)
            "
          >
            <ui-text-h5>
              {{ props.quantity }}
            </ui-text-h5>
          </ui-counter>
        </div>
      </div>
    </div>
    <ui-btn-close @click="removeItemCart" />
  </div>
</template>

<script setup>
import { useCartData } from "@/stores/cartData";

import UiTextH5 from "@/components/Block/UiComponents/UiTextH5.vue";
import UiTextSmall from "@/components/Block/UiComponents/UiTextSmall.vue";
import UiBtnClose from "@/components/Block/UiComponents/UiButtonClose.vue";
import UiCounter from "@/components/Block/UiComponents/UiCounter.vue";

const { cartData } = useCartData();

const emit = defineEmits(["removeItemCart", "changeCounterValue"]);
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  cart: {
    type: Boolean,
    required: false,
  },
});
const path = require(`@/assets/img/firstScrin/Card/${props.path}`); //path to product card image

function removeItemCart() {
  emit("removeItemCart");
} //emit click event

function changeCounter(counterValue) {
  cartData.cart[props.index].quantity = counterValue;
}
</script>

<style lang="scss" scoped>
img {
  width: 136px;
  object-fit: cover;
}

.card {
  display: flex;
  justify-content: space-between;
  padding: 36px 36px;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
}

.wrapper {
  display: flex;
  flex-direction: column;
  &__counter {
    display: flex;
    align-items: center;
  }
}
.mt-5 {
  margin-top: 5px;
}
.mt-8 {
  margin-top: 8px;
}
.mt-34 {
  margin-top: 34px;
}
.mr-23 {
  margin-right: 23px;
}
.ml-30 {
  margin-left: 30px;
}
</style>
