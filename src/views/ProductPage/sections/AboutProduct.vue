<template>
  <div class="wrapper">
    <!-- ------------------- -->
    <the-product-img :src-img="srcImg" />

    <div class="wrapper__description">
      <!-- ------------------- -->
      <ui-text-h2 class="black">
        {{ props.productInformation.title }}
      </ui-text-h2>

      <ui-text-h3 class="yellow mt-24">
        {{ props.productInformation.price }}
      </ui-text-h3>

      <!-- ------------------- -->
      <div class="wrapper__star">
        <icon-star
          v-for="(star, index) in 5"
          :key="star"
          :class="{ grade: index + 1 <= calculateAverageScore }"
          class="mt-70 mr-10"
        />

        <ui-text-h4 class="black ml-13">1 customer review</ui-text-h4>
      </div>

      <!-- ------------------- -->
      <ui-text-h4 class="fw-400 mt-18 grey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.
      </ui-text-h4>

      <!-- ------------------- -->
      <div class="wrapper__add-cart mt-48">
        <ui-counter
          :counter="counter"
          @change-counter-value="(counterValue) => changeCounter(counterValue)"
        >
          <ui-text-h4 class="black">{{ counter }}</ui-text-h4>
        </ui-counter>

        <ui-button-main class="btn__cart" @click="addProductToCart">
          <ui-text-h4 class="black">ADD TO CART</ui-text-h4>
        </ui-button-main>
      </div>

      <!-- ------------------- -->
      <div class="wrapper__social mt-70">
        <icon-heard :like="like" @addLike="addToLikeList" />
        <icon-vertical-line class="mr-39 ml-39" />
        <icon-letter class="mr-23" />
        <icon-instagram class="mr-23" />
        <icon-facebook class="mr-23" />
        <icon-twiter class="mr-23" />
      </div>

      <!-- ------------------- -->
      <div class="wrapper__categories mt-59">
        <the-product-categories title="SKU:" value="12" />
        <the-product-categories title="Categories:" value="Fashion, Style" />
      </div>
      <!-- ------------------- -->
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useItemStore } from "@/stores/fakeData";
import { useLikeListData } from "@/stores/likeListData";

import TheProductImg from "../components/TheProductImg.vue";
import UiTextH2 from "@/components/Block/UiComponents/UiTextH2.vue";
import UiTextH3 from "@/components/Block/UiComponents/UiTextH3.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import IconStar from "@/components/UiIcon/IconStar.vue";
import UiCounter from "@/components/Block/UiComponents/UiCounter.vue";
import UiButtonMain from "@/components/Block/UiComponents/UiButtonMain.vue";

import IconHeard from "@/components/UiIcon/IconHeard.vue";
import IconVerticalLine from "@/components/UiIcon/IconVerticalLine.vue";
import IconLetter from "@/components/UiIcon/IconLetter.vue";
import IconInstagram from "@/components/UiIcon/IconInstagram.vue";
import IconFacebook from "@/components/UiIcon/IconFacebook.vue";
import IconTwiter from "@/components/UiIcon/IconTwiter.vue";

import TheProductCategories from "../components/TheProductCategories.vue";

const props = defineProps({
  productInformation: {
    type: Object,
    required: true,
  },
});

const route = useRoute();
const { itemArr, getProductToCart } = useItemStore(); //get arrays from store
const { likeList } = useLikeListData();

const currentRoute = route.params.id;
const counter = ref(1); //variable for counting ordered goods
const like = ref(false);
const srcImg = require(`@/assets/img/firstScrin/Card/${props.productInformation.src}`);

const calculateAverageScore = computed(() => {
  let currentGrate = 0;
  const { reviews } = itemArr[currentRoute];
  reviews.forEach((item) => (currentGrate += item.gradeStar));
  return (currentGrate / reviews.length).toFixed();
}); //calculate an average rating based on the ratings we receive in reviews

function changeCounter(counterValue) {
  counter.value = counterValue;
}

function addProductToCart() {
  getProductToCart(counter.value, currentRoute);
  counter.value = 1;
}

function addToLikeList() {
  like.value = !like.value;

  if (like.value) {
    likeList.push(itemArr[currentRoute]);
  } else {
    const indexLikeList = likeList.findIndex(
      (item) => item == itemArr[currentRoute]
    );
    likeList.splice(indexLikeList, 1);
  }
}

function checkLikeArrayContent() {
  if (likeList.indexOf(itemArr[currentRoute]) !== -1) {
    like.value = true;
  }
}

checkLikeArrayContent();
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 128px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;
  &__star {
    display: flex;
    align-items: flex-end;
  }
  &__add-cart {
    display: flex;
  }
}
.btn__cart {
  padding: 16px 0;
  width: 360px;
  height: 53px;
  border: 1px solid black;
  border-radius: 6px;
}
svg {
  height: 20px;
}
.grade {
  fill: black;
}
.mt-18 {
  margin-top: 18px;
}
.mt-24 {
  margin-top: 24px;
}
.mt-48 {
  margin-top: 48px;
}
.mt-59 {
  margin-top: 59px;
}
.mt-70 {
  margin-top: 70px;
}
.mr-10 {
  margin-right: 10px;
}
.mr-23 {
  margin-right: 23px;
}
.mr-39 {
  margin-right: 39px;
}
.ml-13 {
  margin-left: 13px;
}
.ml-39 {
  margin-left: 39px;
}
</style>
