<template>
  <div class="cart__total">
    <ui-text-h2 class="black fw-400">Cart totals</ui-text-h2>

    <div class="shipping">
      <div class="shipping__subtotal">
        <ui-text-h4 class="black fw-400">SUBTOTAL</ui-text-h4>
        <ui-text-h4 class="grey fw-400"
          >$ {{ calculationOfTheOrderAmount() }}</ui-text-h4
        >
      </div>

      <div class="shipping__info mt-23">
        <ui-text-h4 class="black fw-400">SHIPPING</ui-text-h4>

        <div class="shipping__info-wrapper">
          <ui-text-h4 class="grey fw-400"
            >Shipping costs will be calculated once you have provided address.
          </ui-text-h4>

          <!-- ---------------------- -->
          <div class="shipping__info-select">
            <ui-select-custom
              mainTitle="CALCULATE SHIPPING"
              @open="openShipingInfo"
            />

            <div v-if="showShipingInfo">
              <div class="mt-23">
                <ui-select-custom
                  title="SELECT A COUNTRY"
                  :submitForm="submitForm"
                  :selectOption="selectArrCountry"
                  @selectValue="(value) => getSelectValue(value, 'country')"
                  @open="clearSelectValue"
                ></ui-select-custom>
              </div>

              <div class="mt-23">
                <ui-select-custom
                  title="CITY"
                  :submitForm="submitForm"
                  :selectOption="selectArrCity"
                  @selectValue="(value) => getSelectValue(value, 'city')"
                ></ui-select-custom>
              </div>

              <div class="mt-23">
                <ui-select-custom
                  title="POST CODE / ZIP"
                  :submitForm="submitForm"
                  :selectOption="selectPostCode"
                  @selectValue="(value) => getSelectValue(value, 'post-code')"
                ></ui-select-custom>
              </div>
            </div>
          </div>
          <!-- ------------------------ -->
          <ui-button-main class="border" @click="sendShipingInfo">
            <ui-text-h4 class="black"> UPDATE TOTALS </ui-text-h4>
          </ui-button-main>
        </div>
      </div>
    </div>

    <div class="mt-45">
      <div class="cart__total-prise">
        <ui-text-h4 class="black">TOTAl</ui-text-h4>
        <ui-text-h4 class="black">$ {{ calculationTotalPrise }}</ui-text-h4>
      </div>

      <ui-button-black
        class="width-100 mt-45"
        @click="router.push('/checkout')"
      >
        <ui-text-h4>PROCEED TO CHECKOUT</ui-text-h4>
      </ui-button-black>
    </div>
  </div>
</template>

<script setup>
import { useCartData } from "@/stores/cartData";
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import UiTextH2 from "@/components/Block/UiComponents/UiTextH2.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import UiSelectCustom from "@/components/Block/UiComponents/UiSelectCustom.vue";
import UiButtonMain from "@/components/Block/UiComponents/UiButtonMain.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";

const { calculationOfTheOrderAmount } = useCartData();
const router = useRouter();
const showShipingInfo = ref(false);
const country = ref("");
const city = ref("");
const postCode = ref("");
const submitForm = ref(false);

const selectArrCountry = reactive([
  { value: "", name: "SELECT A COUNTRY" },
  { value: "AT", name: "Austria" },
  { value: "AL", name: "Albania" },
  { value: "IT", name: "Italy" },
  { value: "CA", name: "Canada" },
  { value: "CN", name: "China" },
  { value: "PL", name: "Poland" },
  { value: "UA", name: "Ukraine" },
  { value: "FR", name: "France" },
]);

const selectArrCity = reactive([{ value: "", name: "CITY" }]);
const selectPostCode = reactive([{ value: "", name: "POST CODE / ZIP" }]);

function clearSelectValue() {
  submitForm.value = false;
}

function openShipingInfo() {
  showShipingInfo.value = !showShipingInfo.value;
}

function getSelectValue(value, id) {
  if (id == "country") {
    country.value = value;
    const citiRequest = `http://api.geonames.org/searchJSON?country=${country.value}&username=sergey1993`;
    getShipingInfo(citiRequest, "geonames", selectArrCity, "toponymName");
  }

  if (id == "city") {
    city.value = value;
    const postCodeRequest = `http://api.geonames.org/postalCodeSearchJSON?placename=${city.value}&username=sergey1993`;
    getShipingInfo(
      postCodeRequest,
      "postalCodes",
      selectPostCode,
      "postalCode"
    );
  }

  if (id == "post-code") {
    postCode.value = value;
  }
}

async function getShipingInfo(request, variableData, selectArr, itemValue) {
  let response = await fetch(request);

  let data = await response.json();
  const result = data[variableData];
  let arr = reactive([]);

  if (result) {
    result.forEach((item) => {
      if (item[itemValue] != undefined) {
        arr.push({ value: item[itemValue], name: item[itemValue] });
      }
    });
    selectArr.splice(1, selectArrCity.length, ...arr);
  }
}

const calculationTotalPrise = computed(() => {
  if (country.value && city.value) {
    return calculationOfTheOrderAmount() + 20;
  } else {
    return calculationOfTheOrderAmount();
  }
});

function sendShipingInfo() {
  // sending data to the server
  submitForm.value = true;
}
</script>

<style lang="scss" scoped>
.cart__total {
  padding: 90px 0 39px 0;
  &-prise {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.shipping {
  width: 500px;
  padding-top: 64px;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
  &__subtotal {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__info {
    display: flex;
    justify-content: space-between;
    &-wrapper {
      padding-bottom: 39px;
      width: 250px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    &-select {
      width: 100%;
      margin-top: 39px;
    }
  }
}
.mt-23 {
  margin-top: 23px;
}
.mt-45 {
  margin-top: 45px;
}
.border {
  border: 1px solid rgba(0, 0, 0, 1);
  margin-top: 24px;
}
.width-100 {
  width: 100%;
}
</style>
