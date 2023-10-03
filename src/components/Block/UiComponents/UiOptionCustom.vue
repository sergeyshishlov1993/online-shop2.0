<template>
  <option></option>

  <div class="option">
    <slot />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
option {
  display: none;
}
.option {
  width: 100%;
  margin-top: 15px;
  cursor: pointer;
}
</style>
