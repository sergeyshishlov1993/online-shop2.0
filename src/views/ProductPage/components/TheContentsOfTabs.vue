<template>
  <!-- --------------------- product__description -------------- -->

  <div class="product__description" v-if="props.selectedTab === 'Description'">
    <ui-text-h4 class="grey mt-40 fw-400">
      {{ item.productDescription }}
    </ui-text-h4>
  </div>

  <!-- ------------------- Aditional-information--------- -->

  <div
    class="Aditional-information mt-40"
    v-else-if="props.selectedTab === 'Aditional information'"
  >
    <!-- ------------ product information -------- -->

    <ui-text-h4 class="mt-10 fw-400 black"
      >Weight:
      <span class="grey">
        {{ item.aditionalInformation.weight }}
      </span>
    </ui-text-h4>

    <ui-text-h4 class="mt-10 fw-400 black"
      >Dimentions:
      <span class="grey">
        {{ item.aditionalInformation.dimentions }}
      </span>
    </ui-text-h4>

    <ui-text-h4 class="mt-10 fw-400 black"
      >Colours:
      <span class="grey">
        {{ item.aditionalInformation.colours }}
      </span>
    </ui-text-h4>

    <ui-text-h4 class="mt-10 fw-400 black"
      >Material:
      <span class="grey">
        {{ item.aditionalInformation.material }}
      </span>
    </ui-text-h4>
  </div>

  <!-- ------------------- reviews--------- -->

  <div v-else class="reviews">
    <div>
      <!-- ------------------- heading that counts the number of reviews --------- -->
      <ui-text-h3 class="fw-400 black"
        >{{ item.reviews.length }} Reviews for lira earings
      </ui-text-h3>

      <!-- ------------------- iteration over an array of objects for rendering reviews --------- -->
      <the-product-reviews
        v-for="review in item.reviews"
        :key="review.date"
        :name="review.namePersone"
        :date="review.date"
        :stars="review.stars"
        :grade="review.gradeStar"
        :text="review.reviewText"
      >
      </the-product-reviews>
    </div>

    <!-- ------------------- Feedback form component --------- -->
    <the-reviews-form />
  </div>
</template>

<script setup>
import UiTextH3 from "@/components/Block/UiComponents/UiTextH3.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import TheProductReviews from "./TheProductReviews.vue";
import TheReviewsForm from "./TheReviewsForm.vue";

const props = defineProps({
  selectedTab: {
    type: String,
    required: true,
  },

  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.meaning {
  color: linear-gradient(0deg, #9f9c9c, #a7a5a5);
}
.reviews {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.mt-10 {
  margin-top: 10px;
}
.mt-40 {
  margin-top: 40px;
}
</style>
