<template>
  <form v-if="showBlock">
    <user-info :title="props.title" />
    <ui-button-black class="btn">
      <ui-text-h4>SAVE ADDRESS</ui-text-h4>
    </ui-button-black>
  </form>

  <div v-else>
    <ui-text-h3 class="black fw-400">{{ props.title }}</ui-text-h3>
    <button @click="handlerClick">
      <ui-text-h4 class="yellow mt-24">ADD</ui-text-h4>
    </button>

    <ui-text-h5 class="grey fw-400 mt-14"
      >You have not set up this type of address yet.</ui-text-h5
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import UiTextH3 from "@/components/Block/UiComponents/UiTextH3.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import UiTextH5 from "@/components/Block/UiComponents/UiTextH5.vue";
import UserInfo from "@/views/CheckoutPage/sections/UserInfo.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const showBlock = ref(false);

function handlerClick() {
  showBlock.value = !showBlock.value;
}
</script>

<style lang="scss" scoped>
.mt-14 {
  margin-top: 14px;
}
.mt-24 {
  margin-top: 24px;
}

.btn {
  width: 288px;
  margin-top: 64px;
}
</style>
