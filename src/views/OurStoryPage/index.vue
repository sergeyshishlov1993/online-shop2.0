<template>
  <div class="wrapper">
    <!-- --------------- -->

    <ui-text-h1 class="black fw-500 center">About</ui-text-h1>

    <ui-text-h3 class="black fw-400 center mt-24"
      >Who we are and why we do what we do!</ui-text-h3
    >
    <!-- --------------- -->
    <ui-text-h4 class="black fw-400 mt-46">
      Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
      sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
      pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
      placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
      sodales lectus placerat quis.
    </ui-text-h4>
    <!-- --------------- -->

    <ui-text-h2 class="black fw-400 mt-39">Top trends</ui-text-h2>
    <!-- --------------- -->

    <img src="@/assets/img/blog/blogImg1.png" alt="img" class="mt-24" />

    <!-- --------------- -->
    <ui-text-h4 class="black fw-400 mt-46"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
      maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
      consequat sed eu felis.
    </ui-text-h4>
    <!-- --------------- -->

    <ui-text-small class="black fw-400 mt-16"
      >● consectetur adipiscing elit. Aliquam placerat
      <br />
      ● Lorem ipsum dolor sit amet consectetur
    </ui-text-small>
    <!-- --------------- -->

    <ui-text-h2 class="black fw-400 mt-39">Produced with care</ui-text-h2>
    <!-- --------------- -->

    <img src="@/assets/img/blog/blogImg4.png" alt="img" class="mt-24" />
    <!-- --------------- -->

    <ui-text-h4 class="black fw-400 mt-46"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
      maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
      consequat sed eu felis.
    </ui-text-h4>
  </div>
</template>

<script setup>
import UiTextH1 from "@/components/Block/UiComponents/UiTextH1.vue";
import UiTextH2 from "@/components/Block/UiComponents/UiTextH2.vue";
import UiTextH3 from "@/components/Block/UiComponents/UiTextH3.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import UiTextSmall from "@/components/Block/UiComponents/UiTextSmall.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 96px;
  margin: 0 auto;
  width: 672px;
}
.center {
  text-align: center;
}
img {
  width: 100%;
}
.mt-16 {
  margin-top: 16px;
  line-height: 27px;
}
.mt-24 {
  margin-top: 24px;
}
.mt-39 {
  margin-top: 39px;
}
.mt-46 {
  margin-top: 46px;
  line-height: 27px;
}
</style>
