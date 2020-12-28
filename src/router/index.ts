import Vue from "vue";
import VueRouter, { Route, RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "Dashboard"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/security/Login.vue"),
    meta: { title: "Login", noAuth: true }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@/views/Dashboard.vue"),
    meta: { title: "Dashboard" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to: Route, from: Route, next: Function) => {
  const token: string | null = localStorage.getItem("user");

  if (to.matched.some(record => record.meta.noAuth)) {
    if (token) {
      next({
        name: "Dashboard",
        query: { redirect: to.fullPath }
      });
      return;
    } else {
      next();
    }
  } else {
    if (!token) {
      next({ name: "Login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  }
});

export default router;
