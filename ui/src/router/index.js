import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: "home",
    component: () => import("@/views/Home.vue"),
    children: [
      {
        path: "/home",
        component: () => import("@/views/Home.vue"),
        name: "home"
      }
    ]
  },
  {
    path: '/research',
    name: 'Research',
    component: () => import("@/views/Research.vue"),
  },
  {
    path: '/work-with-me',
    name: 'WorkWithMe',
    component: () => import("@/views/WorkWithMe.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
