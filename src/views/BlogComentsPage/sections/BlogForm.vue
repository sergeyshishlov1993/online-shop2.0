<template>
  <div class="form__title">
    <ui-text-h2 class="black fw-400"> Leave a reply </ui-text-h2>
    <ui-text-h5 class="grey fw-400 mt-16">
      Your email address will not be published. Required fields are marked *
    </ui-text-h5>
  </div>

  <ui-form class="form mt-74" @submit.prevent="sendComment">
    <ui-input
      class="width-100"
      name="name"
      type="text"
      placeholder="Enter your name*"
      :value="nameInput"
      @input="(event) => getInputValue(event, 'name')"
    />
    <ui-input
      class="width-100 mt-50"
      name="email"
      type="text"
      placeholder="Enter your Email*"
      :value="emailInput"
      @input="(event) => getInputValue(event, 'email')"
    />
    <ui-input
      class="width-100 mt-50"
      name="website"
      type="text"
      placeholder="Enter your Website"
      :value="websiteInput"
      @input="(event) => getInputValue(event, 'website')"
    />

    <div class="check-box">
      <ui-input-check-box :checked="isRememberUser" @change="saveUserInfo" />

      <ui-text-small class="grey fw-400 ml-9"
        >Save my name, email, and website in this browser for the next time I
        comment</ui-text-small
      >
    </div>
    <ui-input-text-area
      class="width-100 textaria mt-74"
      name="coments"
      id="coments"
      rows="3"
      placeholder="Your Comment*"
      :value="commentInput"
      @input="(event) => getInputValue(event, 'comment')"
    />

    <ui-button-black class="btn">
      <ui-text-h4> POST COMMENT </ui-text-h4>
    </ui-button-black>
  </ui-form>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useBlogData } from "@/stores/blogData";

import UiForm from "@/components/Block/UiComponents/UiForm.vue";
import UiInput from "@/components/Block/UiComponents/UiInput.vue";
import UiInputCheckBox from "@/components/Block/UiComponents/UiInputCheckBox.vue";
import UiInputTextArea from "@/components/Block/UiComponents/UiInputTextArea.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";
import UiTextH2 from "@/components/Block/UiComponents/UiTextH2.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import UiTextH5 from "@/components/Block/UiComponents/UiTextH5.vue";
import UiTextSmall from "@/components/Block/UiComponents/UiTextSmall.vue";

const route = useRoute();
const { getСomment } = useBlogData();

const nameInput = ref("");
const emailInput = ref("");
const websiteInput = ref("");
const commentInput = ref("");
const isRememberUser = ref(false);

const currentRoute = route.params.id;

function getInputValue(event, id) {
  if (id === "name") {
    nameInput.value = event.target.value;
  }
  if (id === "email") {
    emailInput.value = event.target.value;
  }
  if (id === "website") {
    websiteInput.value = event.target.value;
  }
  if (id === "comment") {
    commentInput.value = event.target.value;
  }
}

function saveUserInfo(event) {
  return (isRememberUser.value = event.target.checked);
}

function sendComment() {
  getСomment(
    nameInput.value,
    commentInput.value,
    currentRoute,
    isRememberUser.value
  );

  nameInput.value = "";
  emailInput.value = "";
  websiteInput.value = "";
  commentInput.value = "";
  isRememberUser.value = false;
}
</script>

<style lang="scss" scoped>
.form__title {
  padding-top: 48px;
}
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.check-box {
  display: flex;
  margin-top: 34px;
}
.btn {
  width: 200px;
  margin-top: 64px;
}
.width-100 {
  width: 100%;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
}
.textaria {
  width: 100%;
  height: 111px;
}
.mt-16 {
  margin-top: 16px;
}
.mt-50 {
  margin-top: 50px;
}
.mt-74 {
  margin-top: 74px;
}
.ml-9 {
  margin-left: 9px;
}
</style>
