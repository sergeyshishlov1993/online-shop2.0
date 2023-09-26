<template>
  <div class="comment">
    <img :src="props.avatar" alt="avatar" />
    <div class="comment__wrapper ml-24">
      <div class="comment__header">
        <!-- ------------------------- -->

        <div class="comment__title">
          <ui-text-h3 class="black fw-400">{{ props.name }}</ui-text-h3>
          <ui-text-h5 class="grey fw-400 ml-16">{{ props.date }}</ui-text-h5>
        </div>

        <button class="reply" @click="replyToComment(props.id)">
          <icon-arrow-reply />
          <ui-text-h6 class="grey fw-400 ml-8">Reply</ui-text-h6>
        </button>
      </div>

      <ui-text-h4 class="grey fw-400 mt-16">
        {{ props.text }}
      </ui-text-h4>
    </div>
  </div>

  <div class="ml-90">
    <the-comment
      v-for="reply in props.replyComment"
      :key="reply.id"
      :avatar="reply.avatar"
      :name="reply.name"
      :date="reply.date"
      :text="reply.comment"
    />
  </div>
</template>

<script setup>
import UiTextH3 from "@/components/Block/UiComponents/UiTextH3.vue";
import UiTextH4 from "@/components/Block/UiComponents/UiTextH4.vue";
import UiTextH5 from "@/components/Block/UiComponents/UiTextH5.vue";
import UiTextH6 from "@/components/Block/UiComponents/UiTextH6.vue";
import IconArrowReply from "@/components/UiIcon/iconArrowReply.vue";
import TheComment from "./TheComment";

const emit = defineEmits(["reply"]);
const props = defineProps({
  avatar: {
    type: String,
    requred: true,
  },
  name: {
    type: String,
    requred: true,
  },
  date: {
    type: String,
    requred: true,
  },
  text: {
    type: String,
    requred: true,
  },
  isReply: {
    type: Boolean,
    requred: true,
  },
  replyComment: {
    type: Array,
    requred: true,
  },
  id: {
    type: Number,
    requred: true,
  },
});

function replyToComment(id) {
  const updatedReply = (props.isReply = true);
  emit("reply", updatedReply, id);
}
</script>

<style lang="scss" scoped>
.comment {
  padding-top: 48px;
  display: flex;
  width: 100%;
  &__wrapper {
    width: 100%;
  }

  &__header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  &__title {
    min-width: 300px;
    display: flex;
    align-items: baseline;
  }
}
.reply {
  display: flex;
}
img {
  width: 70px;
  height: 70px;
  object-fit: cover;
}
.ml-8 {
  margin-left: 8px;
}
.ml-16 {
  margin-left: 16px;
}
.mt-16 {
  margin-top: 16px;
  line-height: 27px;
}
.ml-24 {
  margin-left: 24px;
}

.ml-90 {
  margin-left: 90px;
}
</style>
