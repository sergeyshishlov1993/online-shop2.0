<template>
  <div class="wrapper-reviews">
    <!-- ----------------------wrapper------------------------------ -->

    <div class="wrapper__person-data">
      <!-- -----------------name persone----------------------- -->

      <ui-text-h3 class="mt-70 fw-400 black">{{ props.name }}</ui-text-h3>

      <!-- --------------------------id - Date-------------------------- -->
      <span>
        <ui-text-h5 class="ml-13">
          {{ props.date }}
        </ui-text-h5>
      </span>
    </div>

    <!-- -------------------------- star rating-------------------------- -->
    <div class="mt-16">
      <icon-star
        class="mr-10"
        v-for="(star, index) in props.stars"
        :key="star"
        :class="{ grade: index + 1 <= props.grade }"
      ></icon-star>
    </div>

    <!-- -------------------------- review text-------------------------- -->
    <ui-text-h4 class="mt-24 grey">
      {{ props.text }}
    </ui-text-h4>

    <!-- ----------------------wrapper /------------------------------ -->
  </div>
</template>

<script setup>
import UiTextH3 from "@/components/UiComponents/UiTextH3.vue";
import UiTextH4 from "@/components/UiComponents/UiTextH4.vue";
import UiTextH5 from "@/components/UiComponents/UiTextH5.vue";
import IconStar from "@/components/UiIcon/IconStar.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.wrapper-reviews {
  padding: 42px 87px 0 0;
  width: 580px;
  display: flex;
  flex-direction: column;
}
.wrapper__person-data {
  display: flex;
  align-items: baseline;
}
.grade {
  fill: black;
}
.mt-16 {
  margin-top: 16px;
}
.mt-24 {
  margin-top: 24px;
}
.mt-70 {
  margin-top: 70px;
}
.mr-10 {
  margin-right: 10px;
}
.ml-13 {
  margin-left: 13px;
}
</style>
