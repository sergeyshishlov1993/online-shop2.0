<template>
  <div class="dashboard">
    <ui-text-h4 class="black fw-400">
      Hello Vitatheme (not Vitatheme?
      <router-link class="yellow" to="#">Log out</router-link>)
    </ui-text-h4>

    <ui-text-h4 class="black fw-400 mt-10">
      From your account dashboard you can view your
      <router-link class="yellow" to="#">recent orders</router-link>, manage
      your
      <router-link class="yellow" to="#"
        >shipping and billing addresses</router-link
      >
      , and edit your
      <router-link class="yellow" to="#"
        >password and account details.</router-link
      >
    </ui-text-h4>
  </div>
</template>

<script setup>
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
</script>

<style lang="scss" scoped>
.mt-10 {
  margin-top: 10px;
}
</style>
