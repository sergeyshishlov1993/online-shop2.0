<template>
  <div class="wrapper">
    <ui-text-h4 class="black fw-400 text"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
      maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
      consequat sed eu felis. Nunc sed porta augue.
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat,
      augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit
      ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu
      felis.
    </ui-text-h4>

    <img :src="currentImg" alt="scrin" class="mt-58" />

    <div class="wrapper__list mt-48">
      <ui-text-h2 class="black fw-400">Top trends</ui-text-h2>

      <ui-text-h4 class="black fw-400 mt-24"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero.</ui-text-h4
      >

      <ul class="mt-16">
        <li class="mt-16">● consectetur adipiscing elit. Aliquam placerat</li>

        <li class="mt-16">● Lorem ipsum dolor sit amet consectetur</li>

        <li class="mt-16">● sapien tortor faucibus augue</li>

        <li class="mt-16">
          ● a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        </li>
      </ul>
    </div>

    <div class="wrapper__share mt-91">
      <div class="wrapper__share-block">
        <ui-text-h4 class="black fw-400">Tags</ui-text-h4>
        <div class="line"></div>
        <ui-text-h4 class="grey fw-400">Fashion, Style, Season</ui-text-h4>
      </div>

      <div class="wrapper__share-block">
        <ui-text-h4 class="black fw-400">Share</ui-text-h4>
        <div class="line"></div>
        <icon-facebook />
        <icon-instagram />
        <icon-twiter />
      </div>
    </div>
  </div>
</template>

<script setup>
import UiTextH2 from "@/components/Block/UiComponents/UiTextH2.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH5.vue";
import IconFacebook from "@/components/UiIcon/IconFacebook.vue";
import IconInstagram from "@/components/UiIcon/IconInstagram.vue";
import IconTwiter from "@/components/UiIcon/IconTwiter.vue";

const props = defineProps({
  src: {
    type: String,
    requred: true,
  },
});

const currentImg = require(`@/assets/img/blog/${props.src}`);
</script>

<style lang="scss" scoped>
.wrapper {
  &__share {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 44px;
    border-bottom: 1px solid rgba(216, 216, 216, 1);
    &-block {
      min-width: 276px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}

.center {
  text-align: center;
}
.text {
  line-height: 27px;
}
.line {
  width: 64px;
  height: 1px;
  background: #000;
}
.mt-16 {
  margin-top: 16px;
}
.mt-24 {
  margin-top: 24px;
}
.mt-39 {
  margin-top: 39px;
}
.mt-48 {
  margin-top: 48px;
}
.mt-58 {
  margin-top: 58px;
}
.mt-91 {
  margin-top: 91px;
}
img {
  width: 100%;
}
</style>
