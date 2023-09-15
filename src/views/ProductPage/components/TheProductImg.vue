<template>
  <div class="wrapper__img">
    <img :src="props.srcImg" id="mainImg" alt="#" />
    <img :src="props.srcImg" alt="#" />
    <img :src="props.srcImg" alt="#" />
    <img :src="props.srcImg" alt="#" />
    <img :src="props.srcImg" alt="#" />
  </div>
</template>

<script setup>
const props = defineProps({
  srcImg: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.wrapper__img {
  display: grid;
  grid-template-columns: 120px 540px;
  grid-template-rows: repeat(4, 120px);
  gap: 40px;
  img {
    width: 100%;
    height: 100%;
  }
}
#mainImg {
  grid-row: 1/5;
  grid-column: 2;
}
</style>
