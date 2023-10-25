<template>
  <div class="message__block">
    <icon-arrow-done />
    <ui-text-h4 class="black fw-400 ml-16">
      We’ve received your order
    </ui-text-h4>
  </div>
</template>

<script setup>
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import IconArrowDone from "@/components/UiIcon/IconArrowDone.vue";
</script>

<style lang="scss" scoped>
.message__block {
  margin-top: 96px;
  padding: 19px 0 21px 39px;
  display: flex;
  background: linear-gradient(0deg, #efefef, #efefef);
  border-top: 2px solid rgba(161, 138, 104, 1);
}
.ml-16 {
  margin-left: 16px;
}
</style>
