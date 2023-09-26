<template>
  <div class="blog">
    <ui-text-h1 class="black">Blog</ui-text-h1>

    <!-- --------------------------- -->
    <div class="blog__wrapper">
      <blog-form />

      <div class="blog__wrapper-card">
        <blog-card
          v-for="(card, index) in blogData"
          :key="card.src"
          :src="card.src"
          :date="card.date"
          :title="card.title"
          :description="card.description"
          :id="card.id"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBlogData } from "@/stores/blogData";
import BlogCard from "./components/BlogCard.vue";
import BlogForm from "./components/BlogForm.vue";
import UiTextH1 from "@/components/Block/UiComponents/UiTextH1.vue";

const { blogData } = useBlogData();
</script>

<style lang="scss" scoped>
.blog {
  padding-top: 96px;
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: baseline;
    column-gap: 39px;
  }
  &__wrapper-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px 62px;
  }
}
</style>
