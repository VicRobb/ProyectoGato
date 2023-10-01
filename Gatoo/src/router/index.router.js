import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
    history: createWebHistory(),
    routes: [
				{
				  path: "/:catchAll(.*)",
				  redirect: { name: "Home" },
        },
        
        {
            path: '/prin',
            name: '/pp',
            component: () => import('../pagina_principal/pagina_principal.vue'),
        },
          
        
        {
          path: '/tabPC',
          name: 'Home',
          component: () => import('../components/TableroPC.vue'),
        },
        {
          path: '/tab',
          name: 'Location',
          component: () => import('../components/Tablero.vue'),
        },
        
    ]
})

export default router

