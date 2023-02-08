import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "List",
    component: () => import("../views/List/index.vue"),
  },
  {
    path: "/blog/:id",
    name: "Blog",
    component: () => import("../views/Blog/index.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
