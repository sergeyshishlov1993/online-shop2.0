<template>
  <div class="mt-66">
    <ui-text-h2 class="black fw-400">Similar Items</ui-text-h2>

    <div class="similar-product mt-48">
      <!-- -------------render random cards on the page---- -->
      <card-item
        v-for="card in randomItemCard"
        :key="card.price"
        :path="card.src"
        :title="card.title"
        :subtitle="card.price"
        @click="goToAboutCard(card.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useItemStore } from "@/stores/fakeData";
import { useRouter } from "vue-router";

import CardItem from "@/components/Block/Card/CardItem.vue";
import UiTextH2 from "@/components/Block/UiComponents/UiTextH2.vue";

const { itemArr } = useItemStore();
const router = useRouter();

function getRandomIndex() {
  const randomIndex = new Set();

  while (randomIndex.size < 3) {
    randomIndex.add(Math.floor(Math.random() * itemArr.length));
  }

  return Array.from(randomIndex);
}

const randomIndexArrayItem = getRandomIndex(); //get a random index of an array of cards and write it to an array and use set to make an array of unique indexes

function getRandomItemCard() {
  const result = [];
  for (let i = 0; i < randomIndexArrayItem.length; i++) {
    result.push(itemArr[randomIndexArrayItem[i]]);
  }
  return result;
}

const randomItemCard = getRandomItemCard(); //at each iteration we get a random card from the array

function goToAboutCard(id) {
  router.push(`/product/${id - 1}`);
}
</script>

<style lang="scss" scoped>
.similar-product {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.mt-48 {
  margin-top: 48px;
}
.mt-66 {
  margin-top: 66px;
}
</style>
