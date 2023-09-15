<template>
  <svg
    :class="{ addlikeClass: props.like }"
    @click="addToLikeList((props.like = !props.like))"
    enable-background="new 0 0 128 128"
    id="Слой_1"
    version="1.1"
    width="25"
    height="25"
    viewBox="0 0 128 128"
    xml:space="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M89.6,14.8c-10.3,0-19.6,4.5-25.6,11.7c-6.3-7.2-15.5-11.7-25.6-11.7C19.5,14.8,4,30.1,4,49.2  C4,60,8.9,69.4,16.6,75.7l0,0l41.2,32.6c3.6,2.9,8.8,2.9,12.4,0l40.3-31.9l0,0c8.3-6.3,13.5-16.2,13.5-27.2  C124,30.3,108.7,14.8,89.6,14.8z"
      fill="#FFFFFF"
    />
    <path
      d="M15.7,76.9l41.2,32.6c2,1.6,4.6,2.5,7.1,2.5c0,0,0,0,0,0c2.6,0,5.1-0.9,7.1-2.5l40.3-31.9  c8.9-6.8,14.1-17.1,14.1-28.4c0-19.8-16.1-35.9-35.9-35.9c-9.9,0-19.1,4-25.6,10.9c-6.7-7-15.9-10.9-25.6-10.9  c-19.8,0-35.9,16.1-35.9,35.9C2.5,59.9,7.3,70,15.7,76.9z M38.4,16.3c9.3,0,18.3,4.1,24.5,11.2c0.3,0.3,0.7,0.5,1.1,0.5  c0.4,0,0.9-0.2,1.1-0.5c6-7.1,14.9-11.2,24.5-11.2c18.1,0,32.9,14.8,32.9,32.9c0,10.3-4.7,19.8-12.9,26l-40.3,31.9  c-1.5,1.2-3.4,1.8-5.3,1.8c-1.9,0-3.8-0.7-5.3-1.8L17.5,74.5c-7.7-6.3-12-15.5-12-25.4C5.5,31,20.3,16.3,38.4,16.3z"
      fill="#000"
      stroke="black"
      stroke-width="10"
    />
  </svg>
</template>

<script setup>
const emit = defineEmits(["addLike"]);
const props = defineProps({
  like: {
    type: Boolean,
    required: true,
  },
});

const addToLikeList = (arg) => {
  emit("addLike", arg);
};
</script>

<style lang="scss" scoped>
.addlikeClass {
  path {
    fill: black;
  }
}
</style>
