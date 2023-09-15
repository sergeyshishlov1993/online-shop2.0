import { defineStore } from "pinia";
import { reactive } from "vue";

export const useLikeListData = defineStore("likeList", () => {
  const likeList = reactive([]);

  return {
    likeList,
  };
});
