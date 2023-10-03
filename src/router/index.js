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

  {
    path: "/blog",
    name: "blog",

    component: function () {
      return import("../views/BlogPage");
    },
  },

  {
    path: "/blog/:id",
    name: "blog-coments",

    component: function () {
      return import("../views/BlogComentsPage");
    },
  },
  {
    path: "/our-story",
    name: "our-story",

    component: function () {
      return import("../views/OurStoryPage");
    },
  },
  {
    path: "/cart",
    name: "cart",

    component: function () {
      return import("../views/ShoppingCartPage");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
