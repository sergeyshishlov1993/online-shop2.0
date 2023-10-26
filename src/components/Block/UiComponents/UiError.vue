<template>
  <span>
    <ui-text-small class="red">{{ props.text }}</ui-text-small>
  </span>
</template>

<script setup>
import UiTextSmall from "./UiTextSmall.vue";
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
span {
  display: block;
  padding-top: 10px;
}
</style>
