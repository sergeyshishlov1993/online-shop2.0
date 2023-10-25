<template>
  <div class="wrapper">
    <ui-text-h2 class="black fw-400">
      {{ props.title ? props.title : "Billing Details" }}</ui-text-h2
    >

    <div class="name mt-27">
      <ui-input
        type="text"
        placeholder="First name *"
        name="first name"
        :value="firstName"
        @input="(event) => getFormData(event, 'first name')"
      />

      <ui-input
        type="text"
        name="last name"
        placeholder="last name *"
        class="ml-40"
        @input="(event) => getFormData(event, 'last name')"
      />
    </div>

    <ui-input
      type="text"
      name="company"
      placeholder="Company Name"
      class="mt-37"
      @input="(event) => getFormData(event, 'Company Name')"
    />

    <div class="mt-37">
      <ui-select-custom
        title="Country *"
        :submit-form="props.submitForm"
        :selectOption="selectArrCountry"
        :checkout="true"
        @selectValue="(value) => getSelectValue(value)"
        @open="clearSelectValue"
      />
    </div>

    <ui-input
      type="text"
      placeholder="Street Address *"
      class="mt-37"
      name="street"
      @input="(event) => getFormData(event, 'Street Address')"
    />

    <ui-input
      type="text"
      name="zip"
      placeholder="Postcode / ZIP *"
      class="mt-37"
      @input="(event) => getFormData(event, 'Postcode')"
    />

    <ui-input
      type="text"
      name="city"
      placeholder="Town / City *"
      class="mt-37"
      @input="(event) => getFormData(event, 'City')"
    />

    <ui-input
      type="phone"
      name="phone"
      placeholder="Phone *"
      class="mt-37"
      @input="(event) => getFormData(event, 'Phone')"
    />

    <ui-input
      type="email"
      name="email"
      placeholder="Email *"
      class="mt-37"
      @input="(event) => getFormData(event, 'Email')"
    />

    <div class="mt-37" v-if="props.showChecbox">
      <div class="checkbox">
        <ui-input-check-box
          @input="(event) => getCheckboxValue(event, 'create accout')"
        />
        <ui-text-h4 class="black fw-400 ml-8">Create an acoount?</ui-text-h4>
      </div>

      <div class="checkbox">
        <ui-input-check-box
          class="mt-18"
          @input="(event) => getCheckboxValue(event, 'different address')"
        />

        <ui-text-h4 class="black fw-400 ml-8"
          >Ship to a different address?</ui-text-h4
        >
      </div>

      <ui-input
        type="text"
        name="order"
        placeholder="Order notes"
        class="mt-37"
        @input="(event) => getFormData(event, 'Order notes')"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import UiTextH2 from "@/components/Block/UiComponents/UiTextH2.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import UiInput from "@/components/Block/UiComponents/UiInput.vue";
import UiInputCheckBox from "@/components/Block/UiComponents/UiInputCheckBox.vue";
import UiSelectCustom from "@/components/Block/UiComponents/UiSelectCustom.vue";

const emit = defineEmits([
  "sendFormData",
  "selectValio",
  "sendCheckBox",
  "clearSelectValue",
]);

const props = defineProps({
  inputValue: {
    type: Object,
  },

  submitForm: {
    type: Boolean,
  },

  title: {
    type: String,
    required: false,
  },
  showChecbox: {
    type: Boolean,
    required: false,
  },
});

function getFormData(event, id) {
  emit("sendFormData", event.target.value, id);
}

function getSelectValue(value) {
  emit("selectValio", value);
}

function getCheckboxValue(event, id) {
  emit("sendCheckBox", event.target.checked, id);
}
function clearSelectValue() {
  emit("clearSelectValue");
}

const selectArrCountry = reactive([
  { value: "", name: "SELECT A COUNTRY" },
  { value: "AT", name: "Austria" },
  { value: "AL", name: "Albania" },
  { value: "IT", name: "Italy" },
  { value: "CA", name: "Canada" },
  { value: "CN", name: "China" },
  { value: "PL", name: "Poland" },
  { value: "UA", name: "Ukraine" },
  { value: "FR", name: "France" },
]);
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
.name {
  display: flex;
}
.checkbox {
  display: flex;
  align-items: flex-end;
}
.ml-8 {
  margin-left: 8px;
}
.mt-18 {
  margin-top: 18px;
}
.mt-27 {
  margin-top: 27px;
}
.mt-37 {
  margin-top: 37px;
}
.ml-40 {
  margin-left: 40px;
}
</style>
