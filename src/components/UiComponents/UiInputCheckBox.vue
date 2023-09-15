<template>
  <input type="checkbox" :checked="props.checked" />
</template>

<script setup>
const props = defineProps({
  checked: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
input {
  width: 18px;
  height: 18px;
  background: rgba(0, 0, 0, 1);
  border: 1px solid rgba(0, 0, 0, 1);
}
</style>
