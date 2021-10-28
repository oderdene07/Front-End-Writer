import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    { path: "/", name: "default" },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/home/index"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/about/index"),
    },
    {
      path: "/priceOffer",
      name: "priceOffer",
      component: () => import("@/views/priceOffer/index"),
    },
    {
      path: "/FAQ",
      name: "FAQ",
      component: () => import("@/views/FAQ/index"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/login/index"),
    },
  ],
});

export default router;
