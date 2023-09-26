<template>
  <div class="wrapper mt-250">
    <!-- -------------------------------------------------------------- -->

    <div class="wrapper__list">
      <ul>
        <router-link to="#"
          ><ui-text-h4 class="black fw-400 grey">CONTACT</ui-text-h4>
        </router-link>

        <router-link to="#">
          <ui-text-h4 class="ml-41 black fw-400 grey"
            >TERMS OF SERVICES</ui-text-h4
          ></router-link
        >

        <router-link to="#">
          <ui-text-h4 class="ml-41 black fw-400 grey"
            >SHIPPING AND RETURNS</ui-text-h4
          ></router-link
        >
      </ul>

      <ui-text-h4 class="mt-48 black fw-400 grey"
        >© 2021 Shelly. Terms of use and privacy policy.</ui-text-h4
      >
    </div>

    <div class="wrapper__link">
      <div class="wrapper__text">
        <ui-text-h4 class="black fw-400 grey">
          Give an email, get the newsletter.
        </ui-text-h4>

        <router-link to="#"> <icon-arrow-rigth /></router-link>
      </div>

      <!-- -------------------------social-link---------------------- -->
      <div class="wrapper__social-media mt-48">
        <icon-link-in class="ml-30" />
        <icon-facebook class="ml-30" />
        <icon-instagram class="ml-30" />
        <icon-twiter class="ml-30" />
      </div>
      <!-- -------------------------------------------------------------- -->
    </div>
  </div>
</template>

<script setup>
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import IconArrowRigth from "@/components/UiIcon/IconArrowRigth.vue";
import IconLinkIn from "@/components/UiIcon/IconLinkIn.vue";
import IconFacebook from "@/components/UiIcon/IconFacebook.vue";
import IconInstagram from "@/components/UiIcon/IconInstagram.vue";
import IconTwiter from "@/components/UiIcon/IconTwiter.vue";
</script>

<style lang="scss" scoped>
ul {
  display: flex;
}
span {
  font-family: DM Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
}
.wrapper {
  padding: 52px 0 92px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid rgba(216, 216, 216, 1);
  &__link {
    min-width: 350px;
  }
  &__text {
    padding-bottom: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
  }
  &__social-media {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.mt-250 {
  margin-top: 250px;
}
.mt-48 {
  margin-top: 48px;
}
.ml-30 {
  margin-left: 30px;
}
.ml-41 {
  margin-left: 41px;
}
</style>
