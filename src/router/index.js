//importo le funzioni di Vue Router
import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import DetailPage from "../pages/DetailPage.vue";
import Appkillers from "../killers/Appkillers.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/killers/:id", name: "killers-detail", component: DetailPage },
    { path: "/killers", name: "killersCards", component: Appkillers },
  ],
});

export { router };
