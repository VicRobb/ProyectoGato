// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Tablero from './components/Tablero.vue'; // Importa tus componentes

const routes = [
  // Otras rutas si las tienes
  {
    path: '/tablero',
    component: Tablero,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
