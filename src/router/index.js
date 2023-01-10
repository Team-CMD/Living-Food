// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "Item",
        name: "SpecificItem",
        component: () => import("@/views/SpecificItem.vue"),
      },
    ],
  },
  {
    path: "/Product",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Korean",
        component: () => import("@/views/ItemList.vue"),
      },
    ],
  },

  {
    path: "/User",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "Order",
        name: "OrderList",
        component: () => import("@/views/OrderList.vue"),
      },
    ],
  },

  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: () => import("@/views/ErrorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
