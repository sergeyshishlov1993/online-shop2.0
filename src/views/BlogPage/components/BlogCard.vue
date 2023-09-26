<template>
  <div class="blog__card">
    <img :src="imgSrc" alt="#" />

    <ui-text-h5 class="grey fw-400 mt-22">
      {{ props.date }}
    </ui-text-h5>

    <ui-text-h3 class="black fw-400 mt-5">
      {{ props.title }}
    </ui-text-h3>

    <ui-text-h4 class="grey fw-400 mt-14">
      {{ props.description }}
    </ui-text-h4>

    <router-link to="#">
      <ui-text-h4 class="yellow mt-22" @click="goToComentsPage(props.id)"
        >Read More</ui-text-h4
      >
    </router-link>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

import UiTextH5 from "@/components/Block/UiComponents/UiTextH5.vue";
import UiTextH3 from "@/components/Block/UiComponents/UiTextH3.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";

const props = defineProps({
  src: {
    type: String,
    requred: true,
  },
  date: {
    type: String,
    requred: true,
  },
  title: {
    type: String,
    requred: true,
  },
  description: {
    type: String,
    requred: true,
  },
  id: {
    type: Number,
    requred: true,
  },
  index: {
    type: Number,
    requred: true,
  },
});

const imgSrc = require(`@/assets/img/blog/${props.src}`);
const router = useRouter();

const currentId = props.index;

function goToComentsPage() {
  router.push(`/blog/${currentId}`);
}
</script>

<style lang="scss" scoped>
.blog__card {
  width: 450px;
}
.mt-5 {
  margin-top: 5px;
}
.mt-14 {
  margin-top: 14px;
}
.mt-22 {
  margin-top: 22px;
}
</style>
