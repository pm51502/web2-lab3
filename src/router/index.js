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