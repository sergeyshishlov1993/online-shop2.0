<template>
  <!-- -------------------------------title page------------------- -->
  <ui-text-h1 class="black mt-96">Shop The Latest</ui-text-h1>

  <div class="wrapper mt-40">
    <!-- -------------------------------wrapper------------------- -->

    <!-- -------------------------------form search------------------- -->
    <ui-form class="mr-30">
      <!-- -------------------------------input------------------- -->
      <ui-input
        :name="'search'"
        :type="'search'"
        :placeholder="'Search...'"
        @input="getInputValue"
        :value="inputValue"
      ></ui-input>

      <!-- -------------------------------select------------------- -->
      <ui-select @change="getSelectValue" class="mt-40">
        <ui-option value="">
          <ui-text-h5>Shop By</ui-text-h5>
        </ui-option>

        <ui-option value="min20">
          <ui-text-h5> Price &gt 20 </ui-text-h5>
        </ui-option>

        <ui-option value="max20">
          <ui-text-h5> Price > 20 </ui-text-h5>
        </ui-option>
      </ui-select>

      <ui-select class="mt-16"></ui-select>
    </ui-form>

    <!-- -------------------------------item card------------------- -->
    <card-wrapper>
      <card-item
        v-for="card in itemCardData"
        :key="card.price"
        :path="card.src"
        :title="card.title"
        :subtitle="card.price"
        @click="goToAboutCard(card.id)"
      ></card-item>
    </card-wrapper>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { useItemStore } from "@/stores/fakeData";
import UiTextH1 from "@/components/UiComponents/UiTextH1.vue";
import UiTextH5 from "@/components/UiComponents/UiTextH5.vue";
import CardItem from "@/components/UiBlock/Card/components/CardItem.vue";
import CardWrapper from "@/components/UiBlock/Card/components/CardWrapper.vue";
import UiForm from "@/components/UiComponents/UiForm.vue";

import UiInput from "@/components/UiComponents/UiInput.vue";
import UiSelect from "@/components/UiComponents/UiSelect.vue";
import UiOption from "@/components/UiComponents/UiOption.vue";

const store = useItemStore();
const router = useRouter();

const inputValue = ref("");
const selectValue = ref("");

// <!-- ---------------- computed property for dynamically filtering the array of data ------------------- -->
const itemCardData = computed(() => {
  let product = store.itemArr;
  let search = inputValue.value;
  let select = selectValue.value;

  if (search) {
    // <!-- ---------------- search that ignores case and searches by characters ------------------- -->
    product = product.filter((el) => {
      return (
        el.title.toLowerCase().indexOf(search) !== -1 ||
        el.price.indexOf(search) !== -1
      );
    });
  }
  // <!-- ---------------- search by price ignores extra characters except numbers, convert to numeric type ------------------- -->

  if (select === "min20") {
    return (product = product.filter(
      (el) => parseInt(el.price.replace(/[^,\d]/g, "")) < 20
    ));
  }
  if (select === "max20") {
    return (product = product.filter(
      (el) => parseInt(el.price.replace(/[^,\d]/g, "")) > 20
    ));
  }
  return product;
});

function getInputValue(event) {
  return (inputValue.value = event.target.value);
}
function getSelectValue(event) {
  return (selectValue.value = event.target.value);
}

function goToAboutCard(id) {
  router.push(`/product/${id - 1}`);
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.mt-96 {
  margin-top: 96px;
}
.mt-40 {
  margin-top: 40px;
}

.mt-16 {
  margin-top: 16px;
}

.mr-30 {
  margin-right: 30px;
}
</style>
