<template>
  <textarea
    :name="props.name"
    :id="props.id"
    :rows="props.rows"
    :value="props.value"
    :placeholder="props.placeholder"
  ></textarea>
</template>

<script setup>
const props = defineProps({
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
  id: {
    type: String,
    required: false,
  },
  rows: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
textarea {
  padding: 10px;
}
</style>
