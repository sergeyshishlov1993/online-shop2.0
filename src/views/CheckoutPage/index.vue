<template>
  <div class="wrapper">
    <ui-text-h1 class="black fw-500 center">Checkout</ui-text-h1>

    <!-- ------------------------------------------- -->
    <ui-text-h4 class="grey fw-400 mt-64"
      >Returning customer?
      <router-link to="#"> Click here to login</router-link></ui-text-h4
    >
    <ui-text-h4 class="grey fw-400 mt-16"
      >Have a coupon?
      <router-link to="#"
        >Click here to enter your code</router-link
      ></ui-text-h4
    >
    <!-- ------------------------------------------- -->
    <div class="wrapper__coupon-code mt-24">
      <ui-text-h4 class="grey fw-400"
        >If you have a coupon code, please apply it below.</ui-text-h4
      >

      <ui-form @submit.prevent="sendCouponCode" class="mt-39 form">
        <ui-input
          type="text"
          placeholder="Coupon Code"
          name="code"
          :value="couponCode"
          @input="getInputCode"
        />

        <ui-button-black class="btn">
          <ui-text-h4>APPLY COUPON</ui-text-h4>
        </ui-button-black>
      </ui-form>
    </div>
    <!-- ------------------------------------------- -->
    <ui-form class="wrapper__user" @submit.prevent="subForm">
      <user-info
        @sendFormData="getFormData"
        @selectValio="getSelectValio"
        @sendCheckBox="getCheckboxValue"
        :submitForm="submitForm"
        :show-checbox="true"
        @clearSelectValue="removeSubmitFlag"
      />
      <user-order @send-radio-btn-value="getRadioBtnValue" />
    </ui-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useOrderData } from "@/stores/orderData";
import { useCartData } from "@/stores/cartData";
import UserInfo from "@/views/CheckoutPage/sections/UserInfo.vue";
import UserOrder from "@/views/CheckoutPage/sections/UserOrder.vue";
import UiTextH1 from "@/components/Block/UiComponents/UiTextH1.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import UiForm from "@/components/Block/UiComponents/UiForm.vue";
import UiInput from "@/components/Block/UiComponents/UiInput.vue";
import UiButtonBlack from "@/components/Block/UiComponents/UiButtonBlack.vue";

const router = useRouter();
const { orderData } = useOrderData();
const { cartData, calculationOfTheOrderAmount } = useCartData();

const couponCode = ref("");
// --------form-info--------
const firstName = ref("");
const lastName = ref("");
const companyName = ref("");
const country = ref("");
const streetAddress = ref("");
const postcode = ref("");
const city = ref("");
const phone = ref("");
const email = ref("");
const createAccount = ref(false);
const indicateDifferentAddress = ref(false);
const orderNotes = ref("");
const paymentMethod = ref("");

// a variable that will duplicate the value of the event in order to clear the value of custom ui elements
const submitForm = ref(false);

// ---------------monitoring the state of the form to clear a custom select--------
function removeSubmitFlag() {
  submitForm.value = false;
}

function getInputCode(event) {
  couponCode.value = event.target.value;
}

function sendCouponCode() {
  // sending code to the server
  couponCode.value = "";
}

function getSelectValio(value) {
  country.value = value;
}

function getFormData(event, id) {
  switch (id) {
    case "first name":
      firstName.value = event;
      break;

    case "last name":
      lastName.value = event;
      break;

    case "Company Name":
      companyName.value = event;
      break;

    case "Street Address":
      streetAddress.value = event;
      break;

    case "Postcode":
      postcode.value = event;
      break;

    case "City":
      city.value = event;
      break;

    case "Phone":
      phone.value = event;
      break;

    case "Email":
      email.value = event;
      break;

    case "Order notes":
      orderNotes.value = event;
      break;
  }
}

function getCheckboxValue(value, id) {
  switch (id) {
    case "create accout":
      createAccount.value = value;
      break;

    case "different address":
      indicateDifferentAddress.value = value;
      break;
  }
}

function getRadioBtnValue(value) {
  paymentMethod.value = value;
}

function addProductToOrder() {
  const res = [];
  cartData.cart.forEach((i) => {
    if (i.title && i.price) {
      res.push({
        title: i.title,
        price: i.price,
        quantity: i.quantity,
      });
    }
  });
  return res;
}

function subForm(event) {
  const form = event.target;
  const date = new Date();
  const dateOrder = ref("");

  // order date
  function getDateOrder() {
    const dateOptipn = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    return (dateOrder.value = new Intl.DateTimeFormat("en-Uk", dateOptipn));
  }

  orderData.orders.push({
    persone: {
      firstName: firstName.value,
      lastName: lastName.value,
      companyName: companyName.value,
      country: country.value,
      streetAddress: streetAddress.value,
      postcode: postcode.value,
      city: city.value,
      phone: phone.value,
      email: email.value,
      orderNotes: orderNotes.value,
      paymentMethod: paymentMethod.value,
    },
    date: getDateOrder().format(date),
    orderNumber: Math.floor(Math.random() * 1000_000_000_000),
    status: "processed",
    orderPrice: calculationOfTheOrderAmount(),
    order: addProductToOrder(),
  });

  form.reset();
  clearFormFields();
  submitForm.value = true;
  cartData.cart.length = 0;
  router.push("/confirmation");
}

function clearFormFields() {
  firstName.value = "";
  lastName.value = "";
  companyName.value = "";
  country.value = "";
  streetAddress.value = "";
  postcode.value = "";
  city.value = "";
  phone.value = "";
  email.value = "";
  createAccount.value = false;
  indicateDifferentAddress.value = false;
  orderNotes.value = "";
  paymentMethod.value = "";
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 96px;
  &__coupon-code {
    padding: 24px 24px 40px 24px;
    width: 580px;
    border: 1px solid rgba(216, 216, 216, 1);
  }
  &__user {
    display: flex;
    justify-content: space-between;
  }
}
.btn {
  margin-left: 76px;
  width: 75%;
}
a {
  color: black;
  font-family: DM Sans;
  font-size: 16px;
  font-weight: 400;
}
.form {
  display: flex;
}
.mt-16 {
  margin-top: 16px;
}
.mt-24 {
  margin-top: 24px;
}
.mt-39 {
  margin-top: 39px;
}
.mt-64 {
  margin-top: 64px;
}
.center {
  text-align: center;
}
</style>
