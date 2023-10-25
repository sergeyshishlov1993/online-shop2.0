<template>
  <section>
    <about-product :productInformation="productInformation" />
  </section>

  <section>
    <div class="tabs">
      <the-tab-product
        class="mr-96"
        @click="changeTab('Description')"
        :selectedTab="currentTab"
        :name="'Description'"
        >Description</the-tab-product
      >

      <the-tab-product
        class="mr-96"
        @click="changeTab('Aditional information')"
        :selectedTab="currentTab"
        :name="'Aditional information'"
        >Aditional information</the-tab-product
      >

      <the-tab-product
        class="mr-96"
        @click="changeTab('Reviews')"
        :selectedTab="currentTab"
        :name="'Reviews'"
        >Reviews({{ calculatesTheNumberOfReviews }})</the-tab-product
      >
    </div>
    <the-contents-of-tabs :item="currentTabsItem" :selectedTab="currentTab" />
  </section>

  <section>
    <similar-product />
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

import { useItemStore } from "@/stores/fakeData";
import { useRoute } from "vue-router";

import AboutProduct from "./sections/AboutProduct.vue";
import TheTabProduct from "./sections/TheTabProduct.vue";
import TheContentsOfTabs from "./components/TheContentsOfTabs.vue";
import SimilarProduct from "./sections/SimilarProduct.vue";

const route = useRoute();
const { itemArr } = useItemStore();
const currentRoute = route.params.id;

const currentTab = ref("Description");
const currentTabsItem = itemArr[currentRoute]; //-data about the current product array of objects -

const productInformation = computed(() => {
  const indexSrc = itemArr[currentRoute];
  return indexSrc;
}); //calculate the dynamic path to the image of the current route--

const calculatesTheNumberOfReviews = computed(() => {
  return itemArr[currentRoute].reviews.length;
}); // - calculates the number of reviews --

function changeTab(name) {
  return (currentTab.value = name);
}
</script>

<style lang="scss" scoped>
.tabs {
  position: relative;
  padding: 96px 0 34px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
}
.mr-96 {
  margin-right: 96px;
}
</style>
