//importo le funzioni di Vue Router
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import DetailPage from "../pages/DetailPage.vue";
import KillerPage from "../pages/KillerPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/killers/detail", name: "killers-detail", component: DetailPage },
    { path: "/killers", name: "killerPage", component: KillerPage },
  ],
});

export { router };
