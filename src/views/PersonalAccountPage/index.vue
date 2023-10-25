<template>
  <ui-text-h1 class="black fw-500 center mt-96">My Account</ui-text-h1>

  <div class="tabs">
    <the-tab-product
      v-for="tab in tabs"
      :key="tab.name"
      class="mr-50"
      @click="changeTab(tab.name)"
      :selectedTab="currentTab"
      :name="tab.name"
      >{{ tab.name }}</the-tab-product
    >
  </div>

  <div class="wrapper">
    <tabs-dashboard v-if="currentTab === 'Dashboard'" />
    <tabs-orders v-if="currentTab === 'Orders'" />
    <tabs-downloads v-if="currentTab === 'Downloads'" />
    <tabs-addresses v-if="currentTab === 'Addresses'" />
    <tabs-account-details v-if="currentTab === 'Account details'" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import UiTextH1 from "@/components/Block/UiComponents/UiTextH1.vue";
import TheTabProduct from "@/views/ProductPage/sections/TheTabProduct.vue";
import TabsDashboard from "./TabsContent/TabsDashboard.vue";
import TabsOrders from "./TabsContent/TabsOrders.vue";
import TabsDownloads from "./TabsContent/TabsDownloads.vue";
import TabsAddresses from "./TabsContent/TabsAddresses.vue";
import TabsAccountDetails from "./TabsContent/TabsAccountDetails.vue";

const router = useRouter();
const currentTab = ref("Dashboard");
const tabs = [
  { name: "Dashboard" },
  { name: "Orders" },
  { name: "Downloads" },
  { name: "Addresses" },
  { name: "Account details" },
  { name: "Logout" },
];

function changeTab(name) {
  if (name == "Logout") {
    router.push("/auth");
  }
  return (currentTab.value = name);
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 40px;
}
.tabs {
  position: relative;
  padding: 64px 0 34px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
}
.center {
  text-align: center;
}

.mt-96 {
  margin-top: 96px;
}
.mr-50 {
  margin-right: 50px;
}
</style>
