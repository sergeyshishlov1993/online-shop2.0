<template>
  <div class="navbar">
    <!-- ------------ -->
    <ul>
      <nav-bar-link>
        <router-link to="/shop">Shop</router-link>

        <span
          class="border mt-24"
          v-if="currentRoute === 'shop' || currentRoute === 'product'"
        ></span>
      </nav-bar-link>

      <!-- ---------- -->
      <nav-bar-link class="ml-64">
        <router-link to="/blog"> Blog</router-link>

        <span
          v-if="currentRoute === 'blog' || currentRoute === 'blog-coments'"
          class="border mt-24"
        ></span>
      </nav-bar-link>

      <!-- ----------- -->
      <nav-bar-link class="ml-64">
        <router-link to="/our-story">Our Story</router-link>

        <span class="border mt-24" v-if="currentRoute === 'our-story'"></span>
      </nav-bar-link>

      <!-- ------line----- -->
      <icon-vertical-line class="ml-48 mr-48" />

      <!-- -----icon btn------ -->
      <nav-bar-link>
        <router-link to="#">
          <icon-search />
        </router-link>
      </nav-bar-link>

      <nav-bar-link class="ml-39">
        <icon-shopping-bag @click="cartData.showCartBlock = true" />
      </nav-bar-link>

      <nav-bar-link class="ml-39">
        <router-link to="#">
          <icon-person />
        </router-link>
      </nav-bar-link>
    </ul>
  </div>
</template>

<script setup>
import { useCartData } from "@/stores/cartData";

import NavBarLink from "./components/NavBarLink.vue";
import IconVerticalLine from "@/components/UiIcon/IconVerticalLine.vue";
import IconSearch from "@/components/UiIcon/IconSearch.vue";
import IconShoppingBag from "@/components/UiIcon/IconShoppingBag.vue";
import IconPerson from "@/components/UiIcon/IconPerson.vue";

const { cartData } = useCartData();

const props = defineProps({
  currentRoute: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  align-items: baseline;
}
a {
  color: inherit;
}
.mt-24 {
  margin-top: 24px;
}
.ml-39 {
  margin-left: 39px;
}
.ml-48 {
  margin-left: 48px;
}
.mr-48 {
  margin-right: 48px;
}
.ml-64 {
  margin-left: 64px;
}
.border {
  width: 40px;
  border: 1px solid rgba(0, 0, 0, 1);
}
</style>
