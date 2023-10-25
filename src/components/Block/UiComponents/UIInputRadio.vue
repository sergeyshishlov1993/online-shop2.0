<template>
  <label :for="props.name" class="radio" @click="toggleRadio">
    <div class="custom-input">
      <input
        type="radio"
        :name="props.name"
        :value="props.value"
        :id="props.id"
      />
      <div :class="{ active: props.checked }"></div>
    </div>
  </label>
</template>

<script setup>
const toggleRadio = () => {
  emit("changeRadio", props.id);
};

const emit = defineEmits(["changeRadio"]);

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.radio {
  position: relative;
}
input {
  position: absolute;
  opacity: 0;
}
.custom-input {
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid black;
  border-radius: 100%;
  cursor: pointer;
}
.active {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background: #000;
  border-radius: 100%;
}
</style>
