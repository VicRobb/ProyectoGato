import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
				{
				  path: "/:catchAll(.*)",
				  redirect: { name: "Error" },
				},
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/Home.vue'),
        },
				{
          path: '/error',
          name: 'Error',
          component: () => import('@/views/Error.vue'),
        },
    ]
})

export default router