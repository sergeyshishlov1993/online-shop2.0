<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    :value="props.value"
    :name="props.name"
  />
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
input {
  padding-bottom: 11px;
  width: 261px;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
}
</style>
