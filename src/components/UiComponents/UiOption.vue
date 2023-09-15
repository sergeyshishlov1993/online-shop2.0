<template>
  <option :value="props.value">
    <slot />
  </option>
</template>

<script setup>
const props = defineProps({
  value: {
    type: String,
    require: true,
  },
});
</script>
