<template>
  <div class="slider">
    <ui-text-h1>Gold big hoops </ui-text-h1>

    <ui-text-h3 class="mt-18">$ 68,00</ui-text-h3>

    <ui-button-main class="mt-48">
      <ui-text-h3 class="center">VIEW PRODUCT</ui-text-h3>
    </ui-button-main>

    <!-- -------------------slider-button-------------- -->
    <div class="slider__circle">
      <ui-button-slider class="ml-13 active" />
      <ui-button-slider class="ml-13" />
      <ui-button-slider class="ml-13" />
      <ui-button-slider class="ml-13" />
      <ui-button-slider class="ml-13" />
    </div>
  </div>
</template>

<script setup>
import UiTextH1 from "@/components/UiComponents/UiTextH1.vue";
import UiTextH3 from "@/components/UiComponents/UiTextH3.vue";
import UiButtonMain from "@/components/UiComponents/UiButtonMain.vue";
import UiButtonSlider from "@/components/UiComponents/UiButtonSlider.vue";
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  margin-top: 16px;
  padding: 226px 570px 24px 39px;
  background-image: url("@/assets//img/firstScrin/FirstScrin.png");
  min-height: 646px;
  &__circle {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translateY(-50%);
  }
}
.active {
  width: 16px;
  height: 16px;
  background: none;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 100%;
}
.mt-18 {
  margin-top: 18px;
}
.mt-48 {
  margin-top: 18px;
}
.ml-13 {
  margin-left: 13px;
}
</style>
