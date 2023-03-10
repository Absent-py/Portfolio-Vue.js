import { createWebHistory, createRouter } from 'vue-router';
import Start from '../views/start.vue';
import Registration from '../views/Registration.vue'


const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
  {
    path: "/reg",
    name: "Registration",
    component: Registration,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/"
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;