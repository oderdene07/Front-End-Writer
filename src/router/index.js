import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/writer/",
      name: "home",
      component: () => import("@/views/home/index"),
    },
    {
      path: "/writer/about",
      name: "about",
      component: () => import("@/views/about/index"),
    },
    {
      path: "/writer/priceOffer",
      name: "priceOffer",
      component: () => import("@/views/priceOffer/index"),
    },
    {
      path: "/writer/FAQ",
      name: "FAQ",
      component: () => import("@/views/FAQ/index"),
    },
    {
      path: "/writer/login",
      name: "login",
      component: () => import("@/views/login/index"),
    },
  ],
});

export default router;
