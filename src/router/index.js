import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/vuejs-pwa/",
      name: "home",
      component: () => import("@/views/home/index"),
    },
    {
      path: "/vuejs-pwa/about",
      name: "about",
      component: () => import("@/views/about/index"),
    },
    {
      path: "/vuejs-pwa/priceOffer",
      name: "priceOffer",
      component: () => import("@/views/priceOffer/index"),
    },
    {
      path: "/vuejs-pwa/FAQ",
      name: "FAQ",
      component: () => import("@/views/FAQ/index"),
    },
    {
      path: "/vuejs-pwa/login",
      name: "login",
      component: () => import("@/views/login/index"),
    },
  ],
});

export default router;
