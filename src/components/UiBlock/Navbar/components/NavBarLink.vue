<template>
  <li>
    <slot />
  </li>
</template>

<script setup></script>

<style lang="scss" scoped>
li {
  display: flex;
  flex-direction: column;
  align-items: baseline;

  font-family: DM Sans;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0em;
}
</style>
