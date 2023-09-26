<template>
  <div class="card">
    <img :src="path" alt="" />

    <ui-text-h3 class="black mt-24 fw-400">{{ props.title }} </ui-text-h3>

    <ui-text-h3 class="yellow mt-16 fw-500">{{ props.subtitle }} </ui-text-h3>
  </div>
</template>

<script setup>
import UiTextH3 from "@/components/Block/UiComponents/UiTextH3.vue";

const path = require(`@/assets/img/firstScrin/Card/${props.path}`);

const props = defineProps({
  path: String,
  title: String,
  subtitle: String,
});
</script>

<style lang="scss" scoped>
.mt-24 {
  margin-top: 24px;
}
.mt-16 {
  margin-top: 16px;
}
</style>
