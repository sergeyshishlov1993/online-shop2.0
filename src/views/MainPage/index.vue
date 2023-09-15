<template>
  <main-page-slider />
  <div class="wrapper__title">
    <ui-h1 class="black">Shop The Latest</ui-h1>

    <router-link to="/shop">
      <ui-h3 class="yellow">View All</ui-h3>
    </router-link>
  </div>

  <card-wrapper class="mt-39">
    <card-item
      v-for="(card, id) in itemArr"
      :key="card.price"
      :path="card.src"
      :title="card.title"
      :subtitle="card.price"
      @click="goToAboutCard(id)"
    />
  </card-wrapper>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useItemStore } from "@/stores/fakeData";

import MainPageSlider from "./components/MainPageSlider.vue";
import UiH1 from "@/components/UiComponents/UiTextH1.vue";
import UiH3 from "@/components/UiComponents/UiTextH3.vue";
import CardWrapper from "@/components/UiBlock/Card/components/CardWrapper.vue";
import CardItem from "../../components/UiBlock/Card/components/CardItem.vue";

const { itemArr } = useItemStore();
const router = useRouter();

function goToAboutCard(id) {
  router.push(`/product/${id}`);
}
</script>

<style lang="scss" scoped>
.wrapper__title {
  margin-top: 39px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mt-39 {
  margin-top: 39px;
}
</style>
