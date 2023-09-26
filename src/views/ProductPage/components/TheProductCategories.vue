<template>
  <div class="mt-10">
    <ui-text-h-4 class="black fw-400"> {{ props.title }}</ui-text-h-4>
    <ui-text-h-4 class="grey ml-13 fw-400">{{ props.value }}</ui-text-h-4>
  </div>
</template>

<script setup>
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
}
.ml-13 {
  margin-left: 13px;
}
.mt-10 {
  margin-top: 10px;
}
</style>
