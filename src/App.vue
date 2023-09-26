<template>
  <div class="container">
    <the-header />
    <router-view />
    <the-footer />
  </div>
</template>

<script setup>
import TheHeader from "@/components/Block/TheHeader";
import TheFooter from "@/components/Block/TheFooter";
</script>

<style lang="scss"></style>
