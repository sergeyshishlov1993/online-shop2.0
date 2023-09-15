import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/shop",
    name: "shop",

    component: function () {
      return import("../views/ShopPage");
    },
  },
  {
    path: "/product/:id",
    name: "product",

    component: function () {
      return import("../views/ProductPage");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
