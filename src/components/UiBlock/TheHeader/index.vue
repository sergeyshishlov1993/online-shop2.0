<template>
  <header>
    <!-- --------- -->
    <div
      :class="{ 'wrapper__border-none': currentRoute == 'home' }"
      class="wrapper"
    >
      <!-- ---------- -->
      <router-link to="/">
        <icon-logo />
      </router-link>

      <!-- ------------->
      <nav-bar :current-route="currentRoute" />
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import IconLogo from "@/components/UiIcon/IconLogo.vue";
import NavBar from "../Navbar";

const route = useRoute();
// const { cartData } = useCartData();

const currentRoute = computed(() => {
  return route.name;
});
</script>

<style lang="scss" scoped>
header {
  padding-top: 64px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
  &__border-none {
    border: none;
  }
}
</style>
