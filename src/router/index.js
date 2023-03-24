import { createWebHistory, createRouter } from 'vue-router'

import Start from '../views/Start.vue'
import Registration from '../views/Registration.vue'
import ExamsModule from '../views/ExamsModule.vue'
import ExamCreation from '../views/ExamCreation.vue'
import ExamPreview from '../views/ExamPreview.vue'
import ExamsList from '../views/ExamsList.vue'
import NotFound from '../views/NotFound.vue'
import Greetings from '../views/Greetings.vue'
import Three from '../views/Three.vue'


const routes = [
  {
    path: "/start",
    name: "Start",
    component: Start,
  },
  {
    path: "/reg",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/exams-module",
    name: "ExamsModule",
    component: ExamsModule,
  },
  {
    path: '/exams-module/create',
    name: 'ExamCreation',
    component: ExamCreation
},
{
    path: '/exams-module/preview',
    name: 'ExamPreview',
    component: ExamPreview
},
{
    path: '/exams-module/list',
    name: 'ExamsList',
    component: ExamsList
},
{
    path: '/',
    name: 'Greetings',
    component: Greetings
},
{
  path: '/three',
  name: 'Three',
  component: Three
},
{
  path: '/not-found',
  name: 'NotFound',
  component: NotFound
},
  {
    path: '/:pathMatch(.*)*',
    redirect: "/not-found"
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;