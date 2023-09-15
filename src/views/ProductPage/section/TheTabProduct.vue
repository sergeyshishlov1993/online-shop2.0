<template>
  <div>
    <ui-text-h-3 class="grey pr-96 fw-400">
      <slot />
    </ui-text-h-3>
    <div :class="{ tab: props.name === props.selectedTab }" />
  </div>
</template>

<script setup>
import UiTextH3 from "@/components/UiComponents/UiTextH3.vue";

const props = defineProps({
  selectedTab: {
    type: String,
    requered: true,
  },
  name: {
    type: String,
    requered: true,
  },
});
</script>

<style lang="scss" scoped>
div {
  position: relative;
  display: flex;
  flex-direction: column;
}
.pr-96 {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 96px;
  cursor: pointer;
}
.tab {
  width: calc(100% - 96px);
  position: absolute;
  bottom: -35px;
  border: 1px solid rgba(0, 0, 0, 1);
}
</style>
