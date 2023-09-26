<template>
  <div>
    <ui-text-h2 class="black fw-400">
      Comments({{ quantityComments }})
    </ui-text-h2>

    <the-comment
      v-for="comment in currentObj.comments"
      :key="comment.id"
      :avatar="comment.avatar"
      :name="comment.name"
      :date="comment.date"
      :text="comment.comment"
      :id="comment.id"
      :isReply="isReply"
      :replyComment="comment.replyToComment"
      @reply="(updatedReply, id) => updateButtonStatesReply(updatedReply, id)"
    />

    <ui-input-text-area
      v-if="isReply"
      name="reply"
      id="reply"
      rows="3"
      placeholder="Your Reply*"
      class="width-100 textaria"
      :value="replyValue"
      @input="(event) => getReplyValue(event)"
      @keydown.enter="replyToComment"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useBlogData } from "@/stores/blogData";
import UiTextH2 from "@/components/Block/UiComponents/UiTextH2.vue";
import TheComment from "../components/TheComment.vue";
import UiInputTextArea from "@/components/Block/UiComponents/UiInputTextArea.vue";

const route = useRoute();
const { blogData, getReplyToСomment } = useBlogData();
const currentRoute = route.params.id;

const isReply = ref(false);
const replyValue = ref("");
const replyId = ref();

const currentObj = computed(() => {
  return blogData[currentRoute];
});

const quantityComments = computed(() => {
  return blogData[currentRoute].comments.length;
});

function updateButtonStatesReply(updatedReply, id) {
  replyId.value = id;
  return (isReply.value = updatedReply);
}

function getReplyValue(event) {
  return (replyValue.value = event.target.value);
}
function replyToComment() {
  getReplyToСomment(replyValue.value, replyId.value, currentObj.value);

  replyValue.value = "";
  isReply.value = false;
}
const props = defineProps({
  item: {
    type: Object,
    requred: true,
  },
});
</script>

<style lang="scss" scoped>
div {
  padding: 68px 0 39px 0;
}
.width-100 {
  width: 100%;
  border-bottom: 1px solid rgba(216, 216, 216, 1);
}
.textaria {
  width: 100%;
  height: 111px;
  margin-top: 40px;
}
</style>
