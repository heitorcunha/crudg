import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaginaInicial from "../views/PaginaInicial.vue"
import Cadastro from "../views/Cadastro.vue"
import EditarCadastro from "../views/EditarCadastro.vue"
import Ficha from "../views/Ficha.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      name: 'HomeView',
      redirect : "/paginainicial",
      component: HomeView
    },
    {
      path: '/paginainicial',
      name: 'PaginaInicial',
      component: PaginaInicial
    },
    {
      path: '/paginainicial/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/paginainicial/editarcadastro/:clienteId',
      name: 'EditarCadastro',
      component: EditarCadastro
    },
    {
      path: '/paginainicial/Ficha/:clienteId',
      name: 'Ficha',
      component: Ficha
    },
    




    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
