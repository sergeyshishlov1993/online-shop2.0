<template>
  <div class="container">
    <the-header />
    <router-view />
    <the-footer />
  </div>
</template>

<script setup>
import TheHeader from "@/components/UiBlock/TheHeader";
import TheFooter from "@/components/UiBlock/TheFooter";
</script>

<style lang="scss"></style>
