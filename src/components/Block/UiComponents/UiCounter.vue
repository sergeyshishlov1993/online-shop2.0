<template>
  <div class="counter mr-23" :class="{ counter__cart: props.cart }">
    <button
      @click="
        changeCounter(updatedCounter !== 0 ? updatedCounter-- : updatedCounter)
      "
    >
      -
    </button>

    <slot />

    <button @click="changeCounter(updatedCounter++)">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["changeCounterValue"]);
const props = defineProps({
  counter: {
    type: Number,
    required: true,
  },
  cart: {
    type: Boolean,
    required: false,
  },
});

const updatedCounter = props.counter;

function changeCounter(counterValue) {
  emit("changeCounterValue", counterValue);
}
</script>

<style lang="scss" scoped>
button {
  height: 27px;
  width: 10px;
}
.counter {
  width: 102px;
  height: 53px;
  background: rgba(239, 239, 239, 1);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  &__cart {
    background: none;
    height: 0;
    width: 60px;
  }
}

.mr-23 {
  margin-right: 23px;
}
</style>
