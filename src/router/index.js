import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/packages",
      name: "packages",
      component: () => import("../views/PackagesView.vue")
    },
    {
      path: "/machines",
      name: "machines",
      component: () => import("../views/MachinesView.vue")
    }
  ]
});

export default router;
