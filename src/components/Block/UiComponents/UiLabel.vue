<template>
  <label :for="props.for">
    <ui-text-small class="red">{{ props.text }}</ui-text-small>
  </label>
</template>

<script setup>
import UiTextSmall from "./UiTextSmall.vue";
const props = defineProps({
  for: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
label {
  display: block;
  padding-top: 10px;
}
</style>
