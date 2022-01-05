import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Facts from "../views/Facts.vue";
import FactGenerator from "../views/FactGenerator.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/facts",
    name: "Facts",
    component: Facts
  },
  {
    path: "/fact-generator",
    name: "FactGenerator",
    component: FactGenerator
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// {
//   path: "/about",
//   name: "About",
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () =>
//     import(/* webpackChunkName: "about" */ "../views/About.vue"),
// },