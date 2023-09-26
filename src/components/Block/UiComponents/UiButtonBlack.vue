<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  width: 123px;
  height: 53px;
  border-radius: 4px;
  background: linear-gradient(0deg, #000000, #000000),
    linear-gradient(0deg, #ffffff, #ffffff);
}
</style>
