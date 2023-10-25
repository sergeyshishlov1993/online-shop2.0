<template>
  <div class="account-details">
    <ui-text-h1 class="black fw-500 center">Account details</ui-text-h1>

    <ui-form class="form">
      <ui-input placeholder="First name*" name="First name" class="mt-37" />
      <ui-input placeholder="Last name*" name="Last name" class="mt-37" />

      <label for="Display name">
        <ui-input
          placeholder="Display name*"
          name="Display name"
          class="mt-37"
        />

        <ui-text-small class="black mt-8">
          This will be how your name will be displayed in the account section
          and in reviews.
        </ui-text-small>
      </label>

      <ui-input
        placeholder="Email address*"
        name="Email address"
        class="mt-37"
      />
      <!-- ---------------------------------- -->
      <ui-text-h4 class="black mt-48">Password change</ui-text-h4>

      <ui-input
        placeholder="Current password (leave blank to leave unchanged)"
        name="Current password"
        class="mt-37"
      />

      <ui-input
        placeholder="New password (leave blank to leave unchanged)"
        name="New password"
        class="mt-37"
      />

      <ui-input
        placeholder="Confirm new password"
        name="Confirm new password"
        class="mt-37"
      />

      <ui-button-black class="btn">
        <ui-text-h4>SAVE CHANGES</ui-text-h4>
      </ui-button-black>
    </ui-form>
  </div>
</template>

<script setup>
import UiTextH1 from "@/components/Block/UiComponents/UiTextH1.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import UiTextSmall from "@/components/Block/UiComponents/UiTextSmall.vue";
import UiForm from "@/components/Block/UiComponents/UiForm.vue";
import UiInput from "@/components/Block/UiComponents/UiInput.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";
</script>

<style lang="scss" scoped>
.form {
  margin: 0 auto;
  width: 500px;
}
.btn {
  margin-top: 64px;
  width: 100%;
}
.center {
  text-align: center;
}
.mt-8 {
  margin-top: 8px;
}
.mt-37 {
  margin-top: 37px;
}
.mt-48 {
  margin-top: 48px;
}
</style>
