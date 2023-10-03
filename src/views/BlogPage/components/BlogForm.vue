<template>
  <div>
    <div class="input-search mt-36">
      <ui-input name="search" type="text" placeholder="Search..." />
      <icon-search />
    </div>

    <div class="search-categories mt-62">
      <ui-text-h3 class="black fw-500">Categories</ui-text-h3>
      <ui-text-h4 class="black fw-400 grey mt-22">Fashion</ui-text-h4>
      <ui-text-h4 class="black fw-400 grey mt-10">Style</ui-text-h4>
      <ui-text-h4 class="black fw-400 grey mt-10">Accessories</ui-text-h4>
      <ui-text-h4 class="black fw-400 grey mt-10">Season</ui-text-h4>
    </div>
  </div>
</template>

<script setup>
import UiInput from "@/components/Block/UiComponents/UiInput.vue";
import UiTextH3 from "@/components/Block/UiComponents/UiTextH3.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import IconSearch from "@/components/UiIcon/IconSearch.vue";
</script>

<style lang="scss" scoped>
.input-search {
  display: flex;
  align-items: center;
  width: 261px;
}
.mt-10 {
  margin-top: 10px;
}
.mt-22 {
  margin-top: 22px;
}
.mt-36 {
  margin-top: 36px;
}
.mt-62 {
  margin-top: 62px;
}
</style>
