<template>
  <select></select>

  <div class="select" @click="showOption">
    <ui-text-h4 class="grey fw-400" v-if="props.mainTitle">{{
      props.mainTitle
    }}</ui-text-h4>

    <ui-text-small class="grey fw-400" :class="{ checkout: props.checkout }">
      {{ hidenList }}
    </ui-text-small>

    <icon-arrow-bottom v-if="!open" />
    <icon-arrow-up v-else />
  </div>

  <div v-if="open">
    <ui-option-custom v-for="option in props.selectOption" :key="option">
      <ui-text-small
        @click="getSelectValue(option.value, option.name)"
        class="black"
        >{{ option.name }}</ui-text-small
      >
    </ui-option-custom>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import UiTextSmall from "./UiTextSmall.vue";
import UiTextH4 from "./UiTextH4.vue";
import IconArrowBottom from "@/components/UiIcon/IconArrowBottom.vue";
import IconArrowUp from "@/components/UiIcon/IconArrowUp.vue";
import UiOptionCustom from "@/components/Block/UiComponents/UiOptionCustom.vue";

const open = ref(false);
const option = ref("");
const nameOption = ref("");

function showOption() {
  open.value = !open.value;
  emit("open");
}

function getSelectValue(value, name) {
  emit("selectValue", value);
  option.value = value;
  nameOption.value = name;
  open.value = false;
}

const hidenList = computed(() => {
  // ------clear-select value after submit form-----------
  if (props.submitForm) {
    option.value = "";
    nameOption.value = "";
  }

  return option.value == "" || props.submitForm
    ? props.title
    : nameOption.value;
});

const emit = defineEmits(["selectValue", "open"]);

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  mainTitle: {
    type: String,
    required: false,
  },
  selectOption: {
    type: Array,
    required: false,
  },
  checkout: {
    type: Boolean,
    required: false,
  },
  submitForm: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
select {
  display: none;
}

.select {
  padding-bottom: 13px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
  cursor: pointer;
}
.checkout {
  font-family: DM Sans;
  font-size: 16px;
  font-weight: 400;
  color: rgba(112, 112, 112, 1);
}
</style>
