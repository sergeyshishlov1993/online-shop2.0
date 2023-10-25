<template>
  <div class="grey-block">
    <ui-text-h4 class="black fw-400">{{ props.title }}</ui-text-h4>

    <router-link to="/shop">
      <ui-text-h4 class="yellow">BROWSE PRODUCT</ui-text-h4>
    </router-link>
  </div>
</template>

<script setup>
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.grey-block {
  padding: 19px 40px 21px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(0deg, #efefef, #efefef);
  border-top: 2px solid rgba(161, 138, 104, 1);
}
</style>
