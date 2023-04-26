import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage/MainPage.vue";
import AppRouter from '../components/AppRouter/AppRouter.vue'

export const publicRoutes = [
  { path: "/", name: "", component: AppRouter },
  { path: "/main", name: "", component: MainPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: publicRoutes,
});

export default router;
