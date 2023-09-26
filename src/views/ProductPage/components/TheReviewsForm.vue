<template>
  <div class="wrapper-form">
    <!-- ---------------wrapper------------------- -->

    <ui-text-h3 class="black fw-400">Add a Review</ui-text-h3>
    <ui-text-h6 class="mt-10"
      >Your email address will not be published. Required fields are marked
      *</ui-text-h6
    >

    <ui-form class="mt-48 form-reviews" @submit.prevent="sendReviews">
      <!-- ---------------input------------------- -->

      <ui-input
        class="width-100"
        :value="reviewValue"
        :name="'review'"
        :type="'text'"
        :placeholder="'Your Review*'"
        @input="(event) => getInputValue(event, 'review')"
      />

      <ui-input
        class="mt-48 width-100"
        :value="nameInputValue"
        :name="'nameInp'"
        :type="'text'"
        :placeholder="'Enter your name*'"
        @input="(event) => getInputValue(event, 'nameInp')"
      />

      <ui-input
        class="mt-48 width-100"
        :value="emailInputValue"
        :name="'email'"
        :type="'email'"
        :placeholder="'Enter your name*'"
        @input="(event) => getInputValue(event, 'email')"
      />

      <!-- -------------check-box------------------ -->

      <div class="mt-59 wrapper__check">
        <ui-input-check-box
          class="mr-10"
          :checked="checkBoxValue"
          @change="(event) => getCheckBoxValue(event)"
        />
        <ui-text-small class="ml-8"
          >Save my name, email, and website in this browser for the next time I
          comment</ui-text-small
        >
      </div>

      <!-- ------------------rating----------- -->

      <ui-text-h5 class="mt-48">Your Rating*</ui-text-h5>
      <div class="mt-10">
        <the-star-counter
          :starsCount="starsCount"
          :rate="currentRate"
          @changeStar="(emitParam) => countLikeStar(emitParam)"
        ></the-star-counter>
      </div>

      <!-- -------------------button(submit)---------------- -->

      <ui-button-black class="mt-48">
        <ui-text-h4 class="white">Submit</ui-text-h4>
      </ui-button-black>
    </ui-form>

    <!-- ---------------wrapper /------------------- -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useItemStore } from "@/stores/fakeData";
import { useRoute } from "vue-router";

import UiForm from "@/components/Block/UiComponents/UiForm.vue";
import UiInput from "@/components/Block/UiComponents/UiInput.vue";
import UiInputCheckBox from "@/components/Block/UiComponents/UiInputCheckBox.vue";
import UiTextH3 from "@/components/Block/UiComponents/UiTextH3.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH5.vue";
import UiTextH5 from "@/components/Block/UiComponents/UiTextH5.vue";
import UiTextH6 from "@/components/Block/UiComponents/UiTextH6.vue";
import UiTextSmall from "@/components/Block/UiComponents/UiTextSmall.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";
import TheStarCounter from "./TheStarCounter.vue";

// --------------------stor----------------------------

const store = useItemStore();
const route = useRoute();

// -------------------------------------------------------

const date = new Date();
const reviewValue = ref("");
const nameInputValue = ref("");
const emailInputValue = ref("");
const checkBoxValue = ref();
const starsCount = ref(5);
const currentRate = ref(0);
const currentDate = ref();
const currentRoute = route.params.id;

function getCurrentDate() {
  const dateOptipn = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return (currentDate.value = new Intl.DateTimeFormat("en-Uk", dateOptipn));
} // - current-date -

function getInputValue(event, id) {
  // -----------add-input-review -value-----------
  if (id === "review") {
    reviewValue.value = event.target.value;
  }

  // -----------add-input-name-value-----------
  if (id === "nameInp") {
    nameInputValue.value = event.target.value;
  }

  // -----------add-input-email-value-----------
  if (id === "email") {
    emailInputValue.value = event.target.value;
  }
}

function getCheckBoxValue(event) {
  // ----------------add-checkbox-value-------------------

  checkBoxValue.value = event.target.checked;
}

function countLikeStar(emitParam) {
  currentRate.value = emitParam;
} // <!-get the user's star rating -->

function sendReviews() {
  // -----------------------push-data---------------------

  store.itemArr[currentRoute].reviews.push({
    namePersone: nameInputValue.value,
    date: getCurrentDate().format(date),
    stars: 5,
    gradeStar: currentRate.value,
    reviewText: reviewValue.value,
  });

  // -------------clear-form---------------------------

  reviewValue.value = "";
  nameInputValue.value = "";
  emailInputValue.value = "";
  currentRate.value = ref(0);
}
</script>

<style lang="scss" scoped>
.wrapper-form {
  padding-top: 42px;
  display: flex;
  flex-direction: column;
}
.wrapper__check {
  display: flex;
  align-items: center;
}
.form-reviews {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.mt-10 {
  margin-top: 10px;
}
.mt-48 {
  margin-top: 48px;
}
.mt-59 {
  margin-top: 59px;
}
.mr-10 {
  margin-right: 10px;
}
.width-100 {
  width: 100%;
}
</style>
