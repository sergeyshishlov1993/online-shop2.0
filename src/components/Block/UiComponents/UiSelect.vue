<template>
  <div>
    <icon-arrow-bottom class="arrow"></icon-arrow-bottom>

    <select>
      <slot />
    </select>
  </div>
</template>

<script setup>
import IconArrowBottom from "@/components/UiIcon/IconArrowBottom.vue";
</script>

<style lang="scss" scoped>
div {
  position: relative;
}
.arrow {
  position: absolute;
  top: 22px;
  right: 22px;
  z-index: -1;
}
select {
  padding: 15px 22px 16px 12px;
  width: 261px;
  height: 53px;
  left: 99px;
  border-radius: 4px;
  background: none;
  border: 1px solid rgba(216, 216, 216, 1);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  &after {
    content: "";
    padding: 0 8px;
    font-size: 12px;
    position: absolute;
    right: 8px;
    top: 4px;
    z-index: 1;
    text-align: center;
    width: 10%;
    height: 100%;
    pointer-events: none;
    box-sizing: border-box;
  }
}
</style>
