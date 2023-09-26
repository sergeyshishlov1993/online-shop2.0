<template>
  <div class="post">
    <ui-text-h1 class="black center fw-500"
      >Fast Fashion, And Faster Fashion</ui-text-h1
    >

    <ui-text-h4 class="grey fw-400 center mt-16"
      >by
      <span class="black fw-400">ANNY JOHNSON</span>
      - October 8,2020</ui-text-h4
    >
    <img :src="mainImg" alt="scrin" class="mt-39" />

    <div class="post__wrapper">
      <blog-post :src="srcImg" />
      <blog-form />
      <blog-comments />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useBlogData } from "@/stores/blogData";
import BlogPost from "./sections/BlogPost.vue";
import BlogForm from "./sections/BlogForm.vue";
import BlogComments from "./sections/BlogComments.vue";

import UiTextH1 from "@/components/Block/UiComponents/UiTextH1.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";

const route = useRoute();
const { blogData } = useBlogData();

const cuurentId = route.params.id;
const srcImg = blogData[cuurentId].src;
const mainImg = require(`@/assets/img/blog/${srcImg}`);
</script>

<style lang="scss" scoped>
.post {
  padding-top: 96px;
  &__wrapper {
    margin: 0 auto;
    width: 670px;
    margin-top: 64px;
  }
}

.center {
  text-align: center;
}
.mt-16 {
  margin-top: 16px;
}
.mt-39 {
  margin-top: 39px;
}
img {
  width: 100%;
}
</style>
