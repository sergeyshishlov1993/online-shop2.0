<template>
  <div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
div {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, auto));
  grid-template-rows: repeat(2, auto);
  gap: 50px;
}
</style>
