import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/tutorials",
      name: "tutorials",
      component: () => import("@/components/TutorialsList.vue"),
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("@/components/TutorialDetails.vue"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("@/components/AddTutorial.vue"),
    }
  ]
});

export default router
